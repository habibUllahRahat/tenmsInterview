import { Metadata } from "next";
import type { ReactNode } from "react";
import type { Product, Response, SEO } from "../../../../lib/interfaces";
type Params = Promise<{
	lang: string;
	course: string;
}>;

const headersList = {
	Accept: "application/json",
	"X-TENMS-SOURCE-PLATFORM": "web",
};
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { lang, course } = await params;
	const response = await fetch(
		`https://api.10minuteschool.com/discovery-service/api/v1/products/${course}?lang=${lang}`,
		{
			method: "GET",
			headers: headersList,
		}
	);
	const res: Response = await response.json();
	const seo: SEO = res?.data?.seo;
	const metadata: Metadata = {
		title: seo?.title ?? "",
		description: seo?.description ?? "",
		keywords: seo?.keywords ?? [],
		openGraph: {
			title:
				seo?.defaultMeta[seo?.defaultMeta.findIndex((meta) => meta.value === "og:title")]
					.content ?? "",
			description:
				seo?.defaultMeta[
					seo?.defaultMeta.findIndex((meta) => meta.value === "og:description")
				].content ?? "",
			images: [
				{
					url:
						seo?.defaultMeta[
							seo?.defaultMeta.findIndex((meta) => meta.value === "og:image")
						].content ?? "",
					type:
						seo?.defaultMeta[
							seo?.defaultMeta.findIndex((meta) => meta.value === "og:image:type")
						].content ?? "",
					alt:
						seo?.defaultMeta[
							seo?.defaultMeta.findIndex((meta) => meta.value === "og:image:alt")
						].content ?? "",
				},
				{
					url:
						seo?.defaultMeta[
							seo?.defaultMeta.findIndex(
								(meta) => meta.value === "og:image:secure_url"
							)
						].content ?? "",
					width: 800,
					height: 600,
					type:
						seo?.defaultMeta[
							seo?.defaultMeta.findIndex((meta) => meta.value === "og:image:type")
						].content ?? "",
					alt:
						seo?.defaultMeta[
							seo?.defaultMeta.findIndex((meta) => meta.value === "og:image:alt")
						].content ?? "",
				},
			],
			url:
				seo?.defaultMeta[seo?.defaultMeta.findIndex((meta) => meta.value === "og:url")]
					.content ?? "",
			locale:
				seo?.defaultMeta[seo?.defaultMeta.findIndex((meta) => meta.value === "og:locale")]
					.content ?? "",
		},
		other: {
			"ld-json": seo?.schema
				?.filter((schema) => schema.meta_value)
				?.map((schema) => schema.meta_value),
		},
	};

	return metadata;
}
export async function generateStaticParams() {
	const res = await fetch(
		"https://api.10minuteschool.com/discovery-service/api/v1/products?limit=3",
		{
			headers: {
				Accept: "application/json",
				"X-TENMS-SOURCE-PLATFORM": "web",
			},
		}
	);
	const data = await res.json();
	const products: Product[] = data.data.products;
	const params: { lang: string; course: string }[] = [];
	products.forEach((product) => {
		if (product && product.slug) {
			params.push({ lang: "en", course: product.slug });
			params.push({ lang: "bn", course: product.slug });
		}
	});
	return params;
}

export default async function ProductLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<>
			<h1>Product Layout</h1>
			{children}
		</>
	);
}
