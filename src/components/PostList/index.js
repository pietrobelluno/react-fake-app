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
              <Link to={{pathname: `/detail/${post.id}`, state: post}} >Ver Detalhes</Link>
              <br></br>
              <Link to={{pathname: `/edit/${post.id}`, state: post}} >Editar</Link>
              <br></br>
              <button onClick={() => this.props.delete(post)}>Deletar</button>
            </li>
          )}
      </ul>
    );
  }
}

export default PostList
