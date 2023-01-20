import DefaultLayout from '../../components/layout/default-layout';
import client from '../../utils/apollo-client';
import { gql } from '@apollo/client/core';
import { getBlogPosts } from '../../repository/contentful-repository';
import Link from 'next/link';

export default function Posts({ posts }) {
  return (
    <DefaultLayout>
      <div className='sm:text-center'>
        <h1 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
          Blog Posts
        </h1>
      </div>
      <div className='my-8 space-y-4'>
        {posts.map((post) => (
          <div key={post.sys.id}>
            <Link href={`posts/${post.slug}`}>
              <h2 className='font-black text-3xl'>{post.title}</h2>
            </Link>
            <p className='text-sm text-gray-500'>{post.sys.publishedAt}</p>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const { data } = await getBlogPosts();
  const posts = data.blogPostCollection.items;

  return {
    props: {
      posts,
    },
  };
}
