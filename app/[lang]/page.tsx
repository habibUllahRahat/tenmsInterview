export interface Props {
	params: Promise<{ lang: string }>;
}

export default async function Tom({ params }: Props) {
	const { lang } = await params;

	return (
		<div>
			<h1>Tomato</h1>
			<p>Tomato is a vegetable.</p>
			<p>{lang}</p>
		</div>
	);
}
