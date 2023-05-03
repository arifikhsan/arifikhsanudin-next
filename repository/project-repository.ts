import client from '../utils/apollo-client';
import { gql } from '@apollo/client/core';

export const getProjects = async () => {
  return await client.query({
    query: gql`
      query {
        projectCollection(limit: 10, order: sys_publishedAt_DESC) {
          items {
            name
            slug
            description
            link
            displayImage {
              title
              contentType
              url
              width
              height
            }
          }
        }
      }
    `,
  });
};

export const getProject = async (slug) => {
  return await client.query({
    query: gql`
      query {
        projectCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            name
            slug
            displayImage {
              title
              contentType
              url
              width
              height
            }
            body {
              json
            }
          }
        }
      }
    `,
  });
};
