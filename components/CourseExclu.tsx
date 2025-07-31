import Image from "next/image";
import type { thisSection } from "../lib/interfaces";
import { CorrectMark } from "./svgs/SVGs";

export interface CourseEx {
	checklist: string[];
	file_type: string;
	file_url: string;
	id: string;
	title: string;
	video_thumbnail?: string;
}

export default function CourseExclu({ coursex }: { coursex: thisSection<CourseEx> }) {
	if (!coursex || !coursex.values) {
		return null;
	}

	return (
		<section id={coursex.type} className='flex flex-col gap-3 mb-10'>
			<h2 className='text-xl font-semibold leading-[30px] text-black'>{coursex.name}</h2>
			<div className='grid grid-cols-1 px-5 border border-gray-300 divide-y divide-dashed divide-gray-400 rounded-md'>
				{coursex.values.map((item) => (
					<div
						key={item.id}
						className='flex flex-col w-full justify-between gap-3 py-5 md:flex-row'
					>
						<div className='flex flex-col gap-2'>
							<h2 className='text-xl '>{item.title}</h2>
							{item.checklist.map((check, index) => (
								<div
									key={index}
									className='flex flex-row  justify-between items-center gap-5'
								>
									<CorrectMark />
									<p className='text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]'>
										{check}
									</p>
								</div>
							))}
						</div>
						{item?.file_url && (
							<div className='flex justify-center items-center w-full transition-opacity duration-300 ease-in-out'>
								<Image
									alt={item.file_type}
									src={item.file_url}
									width={350}
									height={200}
									className='w-[200px] h-[200px] aspect-square object-cover'
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
