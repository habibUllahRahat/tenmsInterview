import CheckList from "../../../../components/CheckList";
import CourseDetailsCom, { CourseDetails } from "../../../../components/CourseDetails";
import CourseExclu, { CourseEx } from "../../../../components/CourseExclu";
import HowCourseLaidOut, { Htclo } from "../../../../components/HowCourseLaidOut";
import type { Instructor } from "../../../../components/Instructor";
import Instructors from "../../../../components/Instructor";
import Trailer from "../../../../components/Trailer";
import WywlComponent, { Wywl } from "../../../../components/Wywl";
import type { Data, Media, Product, Response, thisSection } from "../../../../lib/interfaces";
interface Props {
	params: Promise<{
		lang: string;
		course: string;
	}>;
}
const headersList = {
	Accept: "application/json",
	"X-TENMS-SOURCE-PLATFORM": "web",
};

async function getData(lang: string, course: string): Promise<Data> {
	const response = await fetch(
		`https://api.10minuteschool.com/discovery-service/api/v1/products/${course}?lang=${lang}`,
		{
			method: "GET",
			headers: headersList,
			next: { revalidate: 60 },
		}
	);

	const res: Response = await response.json();
	return res.data as Data;
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

export default async function Page({ params }: Props) {
	const { lang, course } = await params;
	const data: Data = await getData(lang, course);
	const media: Media[] = data?.media ?? [
		{
			name: "image",
			resource_type: "image",
			resource_value: "https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg",
			thumbnail_url: "https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg",
		},
	];
	const instructorsSection = data.sections.find((section) => section?.type === "instructors");
	const instructors: thisSection<Instructor> = instructorsSection as thisSection<Instructor>;
	const howCourseLaidOutSection = data.sections.find(
		(section) => section?.order_idx === 3
	) as thisSection<Htclo>;
	const wywl = data.sections.find((section) => section?.order_idx === 5) as thisSection<Wywl>;
	const CourseExclusive = data.sections.find(
		(section) => section?.order_idx === 8
	) as thisSection<CourseEx>;
	const courseDetails = data.sections.find(
		(section) => section?.order_idx === 7
	) as thisSection<CourseDetails>;
	return (
		<>
			<section
				className=' min-h-[300px] md:min-h-[300px] md:max-h-[400px] text-white flex flex-col justify-center relative'
				style={{
					backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className='container relative flex flex-col-reverse gap-4 md:flex-row md:gap-12 pb-6 md:py-10 md:max-h-[400px] mb-4'>
					<div className=' flex flex-col justify-center '>
						<h1 className='font-semibold mb-2 text-[21px] md:text-4xl capitalize'>
							{data.title}
						</h1>
						<div
							className='text-sm md:text-lg text-white/80 mb-4 md:mb-6'
							dangerouslySetInnerHTML={{ __html: data.description }}
						/>
					</div>

					<Trailer media={media} checklist={data.checklist} cta_text={data.cta_text} />
				</div>
				<div className='block md:hidden w-full bg-white'>
					<CheckList checklist={data.checklist} cta={data.cta_text} />
				</div>
			</section>
			<main className='container flex flex-col md:grid md:grid-cols-12 gap-4 mid:gap-6 '>
				<div className='mid:col-span-6 lg:col-span-7 md:col-start-1 '>
					<Instructors instructorsSection={instructors} />
					<HowCourseLaidOut howCourseLaidOutSection={howCourseLaidOutSection} />
					<WywlComponent wywl={wywl} />
					<CourseExclu coursex={CourseExclusive} />
					<CourseDetailsCom course={courseDetails} />
				</div>
			</main>
		</>
	);
}
