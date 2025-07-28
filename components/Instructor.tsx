import { thisSection } from "@/lib/interfaces";
import Image from "next/image";
export interface Instructor {
	description: string;
	has_instructor_page: boolean;
	name: string;
	slug: string;
	image: string | null;
}

export default function Instructor({
	instructorsSection,
}: {
	instructorsSection: thisSection<Instructor>;
}) {
	if (!instructorsSection || !instructorsSection.values) {
		throw new Error("Instructors section is empty");
	}

	return (
		<section id={instructorsSection.type} className='g'>
			<div className='mx-auto  px-4 py-10'>
				<h2 className='text-2xl font-bold mb-4'>{instructorsSection.name}</h2>
				<div
					className={`grid grid-cols-1 ${
						instructorsSection.values.length > 1 && "md:grid-cols-2"
					} gap-4 shadow-md md:shadow-none   md:border-1 border-gray-300 rounded-lg `}
				>
					{instructorsSection.values.map((instructor) => {
						if (!instructor) {
							throw new Error("Instructor is null or undefined");
						}

						return (
							<div
								key={instructor.slug}
								className='bg-white rounded-lg p-4 flex items-center gap-2'
							>
								<Image
									src={instructor.image ?? ""}
									alt={instructor.name}
									width={640}
									height={360}
									className='w-24 h-24 object-cover rounded-full mb-4'
								/>
								<div className='flex flex-col '>
									<h3 className='text-lg text-black/80  mb-2 hover:text-[#1CAB55] transition duration-300 ease-in-out text-left'>
										{instructor.name}
									</h3>
									{instructor?.description && (
										<p
											className='text-black text-[clamp(10px,1vw,16px)] font-medium '
											dangerouslySetInnerHTML={{
												__html: instructor.description ?? "",
											}}
										/>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
