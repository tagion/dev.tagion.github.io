import { v4 as uuid } from 'uuid';

import { HeadSEO, Highlighted } from 'ui/organisms';
import { PostItem } from 'ui/molecules';

import posts from 'lib/content/blog/posts';

const Blog = () => {
	return (
		<>
			<HeadSEO title='Tagion Blog' description='Tagion blog with latest news' />
			<Highlighted id='blog' title={'Blog'} breadcrumbs={['/', 'Blog']} className='border-bottom-0'>
				{posts.map(({ title, description, image, url }) => (
					<PostItem key={uuid()} title={title} description={description} imageSrc={image} href={url} />
				))}
			</Highlighted>
		</>
	);
};

// export async function getStaticProps() {
// 	const host = process.env.HOST;

// 	return {
// 		props: {
// 			host,
// 		},
// 	};
// }

export default Blog;
