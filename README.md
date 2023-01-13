query {
  blogPostCollection(limit: 10, order: sys_publishedAt_DESC) {
    items {
      title,
      slug,
      subtitle
    }
  }
}

curl --include --request GET
     https://cdn.contentful.com/spaces/qw7zjbw1afhw/environments/master/content_types/{content_type_id}?access_token={access_token}
