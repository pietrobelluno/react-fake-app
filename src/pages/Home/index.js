import React, { Component } from 'react';
import PostList from '../../components/PostList/index'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(json => this.setState({posts: json}))
      .then(() => this.checkParams())
  }

  checkParams = () => {
    const { state } = this.props.location
    console.warn(state)

    if (Object.entries(state).length === 0 && state.constructor === Object) return false

    const { posts } = this.state
    console.warn(this.state)


    const newPosts = posts.map(post => {

      if (post.id === parseInt(state.id)){
        console.warn('achou')
        post = {
          ...post,
          body: state.body,
          title: state.title
        }
      }

      return post
    })

    this.setState({posts: newPosts}, () => {
      console.warn('setou')
    })
  }

  deletePost = (forDeletePost) => {
    const { posts } = this.state
    const newPosts = posts.filter(post => !(post.id == forDeletePost.id))
    console.warn(newPosts)

    this.setState({posts: newPosts})
  }

  render() {
    return (
        <PostList posts={this.state.posts} delete={this.deletePost}/>
    );
  }
}

export default Home;