import type { ColorPalette } from 'src/types';
export function getPaletteStyle(palette: ColorPalette | null) {
	let style;
	if (palette == null) {
		style = '';
	} else {
		const [h, s, l] = palette;
		// --back-1-hover: hsl(${h}, 30%, 34%);

		style = `
    --back: hsl(${h}, 10%, 19%);
    --back-1: hsl(${h}, 20%, 26%);
    --back-1-hover: hsl(${h}, ${s}%, ${l}%);
    --back-2: hsl(${h}, 20%, 34%);
    --back-2-hover: hsl(${h}, ${s}%, ${l + 5}%);
    --text: hsl(${h}, 29%, 88%);
    --text-strong: hsl(${h}, 0%, 100%);
    --text-weak: hsl(${h}, 18%, 70%);
    --link: hsl(${h}, 64%, 61%);
    --link-hover: hsl(${h}, 100%, 81%);
  `;
	}
	return style;
}
