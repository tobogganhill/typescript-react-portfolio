import { PortfolioItem } from './PortfolioItem';
const portfolios = [
	{
		slug: 'software-engineer-siemens',
		title: 'Portfolio 1',
		description: 'Portfolio 1 description.',
		employmentDate: '2022-01-12',
		coverImage:
			'https://images.unsplash.com/photo-1615715757274-29f82b8f5488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxzUXhKc3VnT25FZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
	},
];

const PortfolioList = () => {
	return (
		<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
			{portfolios.map((portfolio) => (
				<PortfolioItem key={portfolio.slug} portfolio={portfolio} />
			))}
		</div>
	);
};

export default PortfolioList;
