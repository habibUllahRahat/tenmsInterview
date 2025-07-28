import Image from "next/image";
import { Media } from "../lib/interfaces";
interface Props {
	media: Media;
	isActive: boolean;
}
export default function SlideMini({ media, isActive }: Props) {
	return (
		<div
			className={`relative w-16 rounded cursor-pointer overflow-hidden my-1.5 z-[1] ${
				isActive ? "outline-[#1CAB55]  outline-3" : ""
			} `}
		>
			<div
				className='rounded opacity-0 transition-opacity duration-300 ease-in-out'
				style={{ fontSize: 0, opacity: 1 }}
			>
				<Image
					alt={media.name}
					loading='lazy'
					width={100}
					height={500}
					src={
						media?.resource_type === "video"
							? media.thumbnail_url
							: media.resource_value
					}
				/>
			</div>
		</div>
	);
}
