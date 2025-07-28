import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { Response, SEO } from "../../../../lib/interfaces";

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

	const response = await fetch(`${process.env.API_KEY}/${course}?lang=${lang}`, {
		headers: headersList,
	});

	const res: Response = await response.json();
	const seo: SEO | undefined = res?.data?.seo;

	const getMetaContent = (name: string): string =>
		seo?.defaultMeta?.find((meta) => meta.value === name)?.content ?? "";

	return {
		title: seo?.title ?? "",
		description: seo?.description ?? "",
		keywords: seo?.keywords ?? [],
		openGraph: {
			title: getMetaContent("og:title"),
			description: getMetaContent("og:description"),
			images: [
				{
					url: getMetaContent("og:image"),
					type: getMetaContent("og:image:type"),
					alt: getMetaContent("og:image:alt"),
				},
				{
					url: getMetaContent("og:image:secure_url"),
					width: 800,
					height: 600,
					type: getMetaContent("og:image:type"),
					alt: getMetaContent("og:image:alt"),
				},
			],
			url: getMetaContent("og:url"),
			locale: getMetaContent("og:locale"),
		},
		other: {
			"ld-json": seo?.schema?.map((s) => s.meta_value).filter(Boolean),
		},
	};
}

export async function generateStaticParams() {
	return [
		{ lang: "en", course: "ielts-course" },
		{ lang: "bn", course: "ielts-course" },
	];
}
export default function ProductLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
