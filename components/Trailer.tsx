import type { Checklist, CtaText, Media } from "@/lib/interfaces";
import CheckList from "./CheckList";
import Slider from "./Slider";
interface Props {
	media: Media[];
	checklist: Checklist[];
	cta_text: CtaText;
}

export default function Trailer({ media, checklist, cta_text }: Props) {
	media = media.filter((item: Media) => {
		if (item.resource_type === "video") {
			item.resource_value = `https://www.youtube.com/embed/${item.resource_value}?autoplay=1&modestbranding=1&rel=0`;
			return item;
		}
		return item;
	});
	const mediaForSlide = media.filter((item: Media) => item.name != "sqr_img");
	// console.log(mediaForSlide);
	console.log(checklist[0].text);
	return (
		<section className='w-full md:min-w-[400px] lg:max-w-[400px] md:bg-white right-0 md:mb-0 tarnsition-all duration-300  md:border-2 md:border-gray-100 rounded-xs md:translate-y-2/5'>
			<div className='order-1 md:order-2'>
				<Slider media={mediaForSlide} />
			</div>
			<div className='hidden md:block '>
				<CheckList checklist={checklist} cta={cta_text} isTrailer={true} />
			</div>
		</section>
	);
}
