import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { ColorPalette } from '../types';

export const palette: Writable<ColorPalette | null> = writable(null);
