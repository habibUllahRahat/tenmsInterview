"use client";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Media } from "../lib/interfaces";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SlideMain from "./SlideMain";
import SlideMini from "./SlideMini";
import { LeftArrow, RightArrow } from "./svgs/SVGs";

type Props = {
	media: Media[];
};

export default function Slider({ media }: Props) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
	const [player, setPlayer] = useState<SwiperClass | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='md:p-1 relative'>
			<div className='aspect-video flex flex-col items-center w-full'>
				<Swiper
					onSwiper={setPlayer}
					onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
					loop={true}
					spaceBetween={10}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className='mySwiper2 w-full '
				>
					{media.map((item: Media) => (
						<SwiperSlide key={item.resource_value}>
							<SlideMain media={item} />
						</SwiperSlide>
					))}
				</Swiper>

				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={4}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className='  w-11/12 mx-auto mySwiper '
				>
					{media.map((item: Media, index) => (
						<SwiperSlide key={item.resource_value}>
							<SlideMini media={item} isActive={index === activeIndex} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div
				onClick={() => player?.slidePrev()}
				className='absolute left-[10px] top-2/5 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer'
			>
				<LeftArrow />
			</div>
			<div
				onClick={() => player?.slideNext()}
				className='absolute right-[10px] top-2/5 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer'
			>
				<RightArrow />
			</div>
		</div>
	);
}
