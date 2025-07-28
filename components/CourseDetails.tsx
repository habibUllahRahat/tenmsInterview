import { thisSection } from "../lib/interfaces";

export interface CourseDetails {
	description: string;
	icon: string;
	title: string;
	id: string;
}

export default function CourseDetailsCom({
	course,
}: {
	course: thisSection<CourseDetails> | null;
}) {
	if (!course || !course.values) return null;

	return (
		<section id={course.type}>
			<div className='relative mb-6 md:mb-10 py-2 md:bg-white md:py-0 text-black'>
				<div
					className='text-2xl font-semibold mb-4'
					dangerouslySetInnerHTML={{ __html: course.name ?? "" }}
				></div>

				<div className='join join-vertical border-1 border-gray-300 rounded-lg divide-y divide-dashed divide-gray-400 bg-white'>
					{course.values.map((item) => (
						<div
							key={item.id}
							className='collapse collapse-arrow join-item  border-gray-300'
						>
							<input type='radio' name='course-accordion' defaultChecked={false} />
							<div
								className='collapse-title font-medium text-base'
								dangerouslySetInnerHTML={{ __html: item.title }}
							></div>
							<div className='collapse-content text-sm'>
								{item.description && (
									<ul
										className='list-disc pl-4 space-y-2'
										dangerouslySetInnerHTML={{ __html: item.description }}
									></ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
