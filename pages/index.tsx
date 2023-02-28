import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { BlogList } from '../components/blogs';
import { PortfolioList } from '../components/portfolios';
import { BaseLayout } from '../components/layouts';
import { getBlogs } from '../lib/blogs';

const Home: NextPage = () => {
	return (
		<BaseLayout>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
				Blogs
				<Link legacyBehavior href='/blogs'>
					<a className='text-sm ml-1 text-orange-600'> (All)</a>
				</Link>
			</h2>
			<BlogList />
			<br></br>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
				Portfolio
				<Link legacyBehavior href='/portfolios'>
					<a className='text-sm ml-1 text-orange-600'> (All)</a>
				</Link>
			</h2>
			<PortfolioList />
		</BaseLayout>
	);
};

export const getStaticProps: GetStaticProps = () => {
	const blogs = getBlogs();
	console.log(blogs);
	return { props: {} };
};

export default Home;
