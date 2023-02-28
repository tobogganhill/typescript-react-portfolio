import { BlogItem } from './blogitem';

const blogs = [
	{
		slug: 'nft-marketplace-in-react-js-next-typescript-full-guide',
		title: 'Blog 1',
		description: 'Blog 1 description.',
		date: '2022-12-12',
		coverImage:
			'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=639&q=80',
	},
	{
		slug: 'web-development-and-coding-full-course',
		title: 'Blog 2',
		description: 'Blog 2 description.',
		date: '2022-08-12',
		coverImage:
			'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbG9yZnVsJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		slug: 'rust-webassembly-with-js-ts-the-practical-guide',
		title: 'Blog 3',
		description: 'Blog 3 description.',
		date: '2022-04-12',
		coverImage:
			'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2xvd3xlbnwwfHwwfHw%3D&w=1000&q=80',
	},
	{
		slug: 'unity-2d-with-c-complete-game-dev-course',
		title: 'Blog 4',
		description: 'Blog 4 description.',
		date: '2022-02-12',
		coverImage:
			'https://images.unsplash.com/photo-1579547945478-a6681fb3c3c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
	},
	{
		slug: 'markdown-full-example',
		title: 'Blog 5',
		description: 'Blog 5 description.',
		date: '2022-01-12',
		coverImage:
			'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xzUXhKc3VnT25FZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
	},
];

const BlogList = () => {
	return (
		<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
			{blogs.map((blog) => (
				<BlogItem key={blog.slug} blog={blog} />
			))}
		</div>
	);
};

export default BlogList;
