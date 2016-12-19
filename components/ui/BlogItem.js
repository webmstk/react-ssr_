import React from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ text, image }) => (
  React.createElement(
    'div',
    null,
    React.createElement(Image, image),
    React.createElement(TextBox, null, text)
  )
);

export default BlogItem;
