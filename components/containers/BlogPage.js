import React from 'react';
import BlogList from '../ui/BlogList';

const posts = [
  {
    text: 'Во сне долго искал по городу общественный туалет. К счастью, не нашёл.',
    image: { src: 'pic1.png', width: 100, height: 100, alt: 'pic1' }
  },
  {
    text: 'Проблема наших депутатов заключается в том, что они принимают законы, а им надо принимать лекарства.',
    image: { src: 'pic2.png', width: 100, height: 100, alt: 'pic2' }
  },
  {
    text: 'Учащиеся консерватории на переменах бегают за здание попеть Боба Марли.',
    image: { src: 'pic3.png', width: 100, height: 100, alt: 'pic3' }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

export default BlogPage;
