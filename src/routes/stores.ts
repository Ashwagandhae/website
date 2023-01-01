import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { ColorPalette, Message } from '../types';

export const palette: Writable<ColorPalette | null> = writable(null);

const messageLifetime = 3000;
class Messenger {
	messages: Writable<Message[]>;
	timeouts: NodeJS.Timeout[];
	constructor() {
		this.messages = writable([]);
		this.timeouts = [];
	}
	addMessage(text: string) {
		// add message and removes them after 5 seconds
		this.messages.update((messages) => {
			messages.push({ text, id: Date.now() });
			// trim if longer than 5 seconds
			if (messages.length > 3) {
				messages.shift();
				clearTimeout(this.timeouts.shift());
			}
			this.timeouts.push(
				setTimeout(() => {
					this.messages.update((messages) => {
						messages.shift();
						return messages;
					});
					this.timeouts.shift();
				}, messageLifetime)
			);
			return messages;
		});
	}
}

export const messenger = new Messenger();

export const messages = messenger.messages;
