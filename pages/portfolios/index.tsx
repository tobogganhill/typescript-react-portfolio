import { GetStaticProps, NextPage } from 'next';
import { PageLayout } from '@/components/layouts';
import { getPortfolios } from '@/lib/portfolios';
import { PortfolioList } from '@/components/portfolios';
import { Portfolio } from '@/interfaces/Portfolio';

type Props = {
	portfolios: Portfolio[];
};

const PortfoliosPage: NextPage<Props> = ({ portfolios }) => {
	return (
		<PageLayout pageTitle='All Portfolios'>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
				All Portfolios
			</h2>
			<PortfolioList portfolios={portfolios} />
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = () => {
	const portfolios = getPortfolios();
	return { props: { portfolios } };
};
export default PortfoliosPage;
