import React from 'react'
import BlogItem from './BlogItem'
import _ from 'lodash';

const BlogList = ({ posts }) => (
  React.createElement(
    'div',
    null,
    _.map(posts, (obj, key) => {
      obj.key = key;
      return React.createElement(BlogItem, obj);
    })
  )
);

export default BlogList;
