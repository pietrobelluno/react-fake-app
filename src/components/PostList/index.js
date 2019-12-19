import React, { Component } from 'react';

class PostList extends Component{

  render () {
    return (
      <ul>
          {this.props.posts.map(post =>
            <li>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button>Ver Detalhes</button>
            </li>
          )}
      </ul>
    );
  }
}

export default PostList
