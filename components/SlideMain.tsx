"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Media } from "../lib/interfaces";
import { PlayButton } from "./svgs/SVGs";

interface Props {
	media: Media;
}

export default function SlideMain({ media }: Props) {
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		return () => {
			setIsPlaying(false);
		};
	}, []);

	return (
		<div className='relative w-full h-full aspect-video'>
			{!isPlaying && media.resource_type === "video" && (
				<button
					className='absolute top-0 left-0 w-full h-full bg-black/40 z-[2] flex items-center justify-center'
					onClick={() => setIsPlaying(true)}
					aria-label='Play video'
				>
					<PlayButton />
				</button>
			)}
			{isPlaying && media.resource_type === "video" ? (
				<VideoContent media={media} />
			) : (
				<ImageContent media={media} />
			)}
		</div>
	);
}

function VideoContent({ media }: Props) {
	return (
		<iframe
			className='w-full h-full'
			src={media.resource_value}
			title={media.name}
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		/>
	);
}

function ImageContent({ media }: Props) {
	return (
		<div className='w-full h-full'>
			<Image
				className='object-cover w-full h-full'
				src={media?.resource_type === "video" ? media.thumbnail_url : media.resource_value}
				alt={media.name}
				width={640}
				height={360}
			/>
		</div>
	);
}
