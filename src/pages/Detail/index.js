import React, { Component } from 'react'

class Detail extends Component {

  componentDidMount () {
    console.log(this.props)
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Detail;