import Image from "next/image";
import { Media } from "../lib/interfaces";
interface Props {
	media: Media;
}
export default function ImageSlide({ media }: Props) {
	return (
		<div className='relative w-full h-full aspect-video'>
			<Image
				className='object-cover w-full h-full'
				src={media.resource_value}
				alt={media.name}
				width={640}
				height={360}
			/>
		</div>
	);
}
