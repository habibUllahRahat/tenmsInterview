export default function Loading() {
	return (
		<>
			<section className='min-h-[300px] md:min-h-[300px] md:max-h-[400px] bg-gray-200'>
				<div className='container flex flex-col-reverse gap-4 md:flex-row md:gap-12 pb-6 md:py-10 md:max-h-[400px] mb-4 animate-pulse'>
					<div className='flex-1 flex flex-col justify-center animate-pulse'>
						<div className='h-10 w-3/4 bg-gray-300 rounded mb-4 animate-pulse' />
						<div className='h-6 w-full bg-gray-300 rounded mb-3 animate-pulse' />
						<div className='h-6 w-5/6 bg-gray-300 rounded animate-pulse' />
					</div>
					<div className='w-[300px] h-[200px] bg-gray-300 rounded animate-pulse' />
				</div>
			</section>

			<main className='container grid grid-cols-1 md:grid-cols-12 gap-4 mid:gap-6 animate-pulse'>
				<div className='mid:col-span-6 lg:col-span-7 md:col-start-1 flex flex-col gap-10 animate-pulse'>
					<div className='animate-pulse space-y-4'>
						<div className='h-8 w-1/3 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-5/6 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-3/4 bg-gray-300 rounded animate-pulse' />
					</div>

					<div className='animate-pulse space-y-4'>
						<div className='h-8 w-1/2 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-full bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-4/5 bg-gray-300 rounded animate-pulse' />
					</div>

					<div className='animate-pulse space-y-4'>
						<div className='h-8 w-1/2 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-3/4 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-2/3 bg-gray-300 rounded animate-pulse' />
					</div>

					<div className='animate-pulse space-y-4'>
						<div className='h-8 w-1/2 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-5/6 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-4/5 bg-gray-300 rounded animate-pulse' />
					</div>

					<div className='animate-pulse space-y-4'>
						<div className='h-8 w-1/2 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-4/6 bg-gray-300 rounded animate-pulse' />
						<div className='h-6 w-2/3 bg-gray-300 rounded animate-pulse' />
					</div>
				</div>
			</main>
		</>
	);
}
