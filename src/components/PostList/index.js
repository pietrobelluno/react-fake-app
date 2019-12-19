import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component{

  render () {
    return (
      <ul>
          {this.props.posts.map(post =>
            <li>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/detail/${post.id}`}>Ver Detalhes</Link>
            </li>
          )}
      </ul>
    );
  }
}

export default PostList
