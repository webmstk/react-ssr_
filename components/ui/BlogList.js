import React from 'react'
import BlogItem from './BlogItem'
import _, { map, assign } from 'lodash';

const BlogList = ({ posts }) => (
  React.createElement(
    'div',
    null,
    _.map(posts, (obj, key) =>
      React.createElement(BlogItem, _.assign({}, obj, { key: key }))
    )
  )
);

export default BlogList;
