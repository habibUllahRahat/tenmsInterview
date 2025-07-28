import Image from "next/image";
import type { thisSection } from "../lib/interfaces";

export interface Htclo {
	icon: string;
	id: string;
	subtitle: string;
	title: string;
}

export default function HowCourseLaidOut({
	howCourseLaidOutSection,
}: {
	howCourseLaidOutSection: thisSection<Htclo> | null;
}) {
	if (!howCourseLaidOutSection?.values?.length) return null;

	return (
		<section id={howCourseLaidOutSection.type}>
			<div className='flex flex-col gap-3'>
				<h2 className='text-xl font-semibold leading-[30px] text-black'>
					How the course is laid out
				</h2>

				<div className='mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
					{howCourseLaidOutSection.values.map((item) => (
						<div key={item.id} className='flex items-start gap-3'>
							<div className='mb-4'>
								<Image
									src={item.icon}
									alt={item.title || "Course icon"}
									width={40}
									height={40}
									className='w-10 h-10'
								/>
							</div>
							<div className='flex flex-col flex-1 gap-2'>
								<h3 className='text-[18px] font-medium leading-[26px] text-white'>
									{item.title}
								</h3>
								<p className='text-sm font-normal leading-[22px] text-gray-400'>
									{item.subtitle}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
