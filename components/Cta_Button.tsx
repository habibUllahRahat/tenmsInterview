import { CtaText as Props } from "../lib/interfaces";

export default function Cta_Button(props: Props) {
	return (
		<>
			<p className='text-2xl font-semibold text-black/90 m-4'>৳1000</p>
			<button className='bg-[#1CAB55] text-white py-2 font-bold rounded-lg hover:bg-[#1CAB55]/80 transition duration-300 ease-in-out w-full mx-auto my-1.5 block border-b-5 border-[#0c5027]/50 hover:border-[#1CAB55]/70'>
				{props.name}
			</button>
		</>
	);
}
