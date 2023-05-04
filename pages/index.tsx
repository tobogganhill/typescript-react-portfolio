import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { BlogList } from '../components/blogs';
import { PortfolioList } from '../components/portfolios';
import { BaseLayout } from '../components/layouts';
import { getBlogs } from '../lib/blogs';
import { Blog } from '@/interfaces/Blog';
import { saveSearchData } from '../lib/md';
import { getPortfolios } from '@/lib/portfolios';
import { Portfolio } from '@/interfaces/Portfolio';

type Props = {
	blogs: Blog[];
	portfolios: Portfolio[];
};

const Home: NextPage<Props> = ({ blogs, portfolios }) => {
	return (
		<BaseLayout>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
				Blogs
				<Link legacyBehavior href='/blogs'>
					<a className='text-sm ml-1 text-orange-600'> (All)</a>
				</Link>
			</h2>
			<BlogList blogs={blogs} />
			<br></br>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
				Portfolio
				<Link legacyBehavior href='/portfolios'>
					<a className='text-sm ml-1 text-orange-600'> (All)</a>
				</Link>
			</h2>
			<PortfolioList portfolios={portfolios} />
		</BaseLayout>
	);
};

export const getStaticProps: GetStaticProps = () => {
	const blogs = getBlogs();
	const portfolios = getPortfolios();
	const content = { blogs, portfolios };

	saveSearchData(content);

	return {
		props: { blogs: blogs.slice(0, 3), portfolios: portfolios.slice(0, 3) },
	};
};

export default Home;
