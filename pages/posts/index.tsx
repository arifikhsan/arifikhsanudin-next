import DefaultLayout from '../../components/layout/default-layout';
import { fetchEntries } from '../../utils/contentful-posts.js';

export default function Posts({ posts }) {
  return (
    <DefaultLayout>
      <div className='sm:text-center'>
        <h1 className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
          Blog Posts
        </h1>
      </div>
      <div className='my-8 space-y-4'>
        {posts.map((post) => (
          <div key={post.sys.id}>
            <h2 className='font-black text-2xl'>{post.fields.title}</h2>
            <p className='text-sm text-gray-500'>{post.sys.createdAt}</p>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const posts = await fetchEntries();
  console.log(posts);
  // const posts = await res.map((post) => {
  //   return post.fields;
  // });

  return {
    props: {
      posts,
    },
  };
}
