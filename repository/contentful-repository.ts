import client from '../utils/apollo-client';
import { gql } from '@apollo/client/core';

export const getBlogPosts = async () => {
  return await client.query({
    query: gql`
      query {
        blogPostCollection(limit: 10, order: sys_publishedAt_DESC) {
          items {
            title
            slug
            subtitle
            sys {
              id
              publishedAt
            }
          }
        }
      }
    `,
  });
};

export const getBlogPost = async (slug) => {
  return await client.query({
    query: gql`
      query {
        blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            title
            subtitle
            body {
              json
            }
          }
        }
      }
    `,
  });
};
