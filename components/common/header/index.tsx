const Header = () => {
	return (
		<main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
			<div className='sm:text-center lg:text-left'>
				<h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
					<span className='block text-gray-500 xl:inline'>Veri</span>
					<span className='block text-gray-600 xl:inline'>DID</span>
				</h1>
				<p className='mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
					Verification software for verifiable credentials.
				</p>
				<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
					<div className='rounded-md shadow'>
						<a
							href='#'
							className='flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-gray-400 md:py-4 md:px-10 md:text-lg'>
							Team
						</a>
					</div>
					<div className='mt-3 sm:mt-0 sm:ml-3'>
						<a
							href='#'
							className='flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-gray-400 md:py-4 md:px-10 md:text-lg'>
							Portfolio
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Header;
