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
	if (!howCourseLaidOutSection || !howCourseLaidOutSection.values) {
		return null;
	}
	return (
		<section id={howCourseLaidOutSection.type}>
			<div className='flex flex-col gap-3'>
				<h2 className='text-xl font-semibold leading-[30px] text-black'>
					How the course is laid out
				</h2>
				<div className='mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
					{howCourseLaidOutSection.values.map((item) => (
						<div key={item.id} className='flex flex-row items-start gap-3 m-1'>
							<div>
								<div
									className='mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out'
									style={{ fontSize: 0, opacity: 1 }}
								>
									<Image
										src={item.icon}
										alt={item.title}
										width={50}
										height={50}
										className='w-10 h-10'
									/>
								</div>
							</div>
							<div className='flex flex-col flex-1 gap-2'>
								<h2 className='text-[18px] font-[500px] leading-[26px] text-white'>
									{item.title}
								</h2>
								<h2 className='text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]'>
									{item.subtitle}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
