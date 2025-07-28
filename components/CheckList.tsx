import Image from "next/image";
import { Checklist, CtaText } from "../lib/interfaces";
import Cta_Button from "./Cta_Button";
import { CallIcon } from "./svgs/SVGs";

export default function CheckList({
	checklist,
	cta,
	isTrailer,
}: {
	checklist: Checklist[];
	cta: CtaText;
	isTrailer?: boolean;
}) {
	return (
		<div className='p-5'>
			<Cta_Button name={cta.name} value={cta.value} />
			<div className='grid py-2 md:p-4 text-black'>
				<p className='text-center mb-4 text-xl font-semibold'>এই কোর্সে যা থাকছে</p>
				{checklist.map((item) => (
					<div key={item.id} className='flex items-center  '>
						<div
							className={`bg-transparent inline-block h-[20px] w-[20px] ${
								isTrailer && "md:opacity-0"
							}transition-opacity duration-300 ease-in-out md:opacity-100 `}
						>
							{item.icon && (
								<Image
									src={item.icon}
									alt='icon'
									width={20}
									height={20}
									className=''
								/>
							)}
						</div>
						<h4 className='mb-0 inline-block pl-4 tracking-[0.005em] text-black'>
							{item.text}
						</h4>
					</div>
				))}
			</div>
			<p className='justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row  absolute -bottom-10 right-0  '>
				<span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
				<span className='flex items-center justify-center ml-2 underline cursor-pointer text-[#1CAB55]'>
					<CallIcon />
					<span className='ml-1'>ফোন করুন (16910)</span>
				</span>
			</p>
		</div>
	);
}
