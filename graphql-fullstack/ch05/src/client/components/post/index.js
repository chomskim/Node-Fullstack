import React, { Component } from 'react';
import PostHeader from './header';
import PostContent from './content';

export default class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className={"post " + (post.id < 0 ? "optimistic" : "")}>
        <PostHeader post={post}/>
        <PostContent post={post}/>
      </div>
    )
  }
}