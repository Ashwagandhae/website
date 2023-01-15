export async function load({ params }: { params: { slug: string } }) {
	// get svg
	const icon = await import(`../content/icons/${params.slug}.json`);

	// add svg to post
	const post = await import(`../content/${params.slug}.json`);

	return { ...post, icon };
}
