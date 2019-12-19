import React, { Component } from 'react';
import PostList from '../../components/PostList/index'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))
  }

  render() {
    return (
        <PostList posts={this.state.posts}/>
    );
  }
}

export default Home;