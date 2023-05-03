import DefaultLayout from '../../components/layout/default-layout';
import { getBlogPost } from '../../repository/blog-post-repository';
import client from '../../utils/apollo-client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Post({ post }) {
  return (
    <DefaultLayout>
      <div className='my-12'>
        <div className='sm:text-center'>
          <h1 className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
            {post.title}
          </h1>
        </div>
        <div className='mt-12'>{documentToReactComponents(post.body.json)}</div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await getBlogPost(params.slug);
  const post = data.blogPostCollection.items[0];
  return { props: { post } };
}
