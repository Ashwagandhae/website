export async function load({ params }: { params: { slug: string } }) {
	// get svg
	const svg = await import(`../content/${params.slug}.svg?raw`);

	// add svg to post
	const post = await import(`../content/${params.slug}.json`);

	return { ...post, icon: svg.default };
}
