import { thisSection } from "../lib/interfaces";
import { CorrectMark } from "./svgs/SVGs";

export interface Wywl {
	color: string;
	icon: string;
	id: string;
	text: string;
}

export default function WywlComponent({ wywl }: { wywl: thisSection<Wywl> }) {
	if (!wywl || !wywl.values) {
		return null;
	}
	return (
		<div className='relative mb-6 md:mb-10 py-2 md:bg-white md:py-0'>
			<div className='bg-white pt-6 pb-6 md:pt-0 md:pb-0'>
				<h2 className='mb-4 text-xl font-semibold md:text-2xl'>
					What you will learn by doing the course
				</h2>
				<div className='rounded-md md:border border-gray-300'>
					<div className='pt-2 md:p-6'>
						<ul className='grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4'>
							{wywl.values.map((item) => (
								<li key={item.id} className='flex items-start gap-2 mb-2'>
									<CorrectMark />
									<div className='flex-1' style={{ color: item.color }}>
										{item.text}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
