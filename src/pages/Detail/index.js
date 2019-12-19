import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Detail extends Component {
  render() {
    return (
      <div>
        Detalhe
        <Link to='/detail'>Oi</Link>
      </div>
    );
  }
}

export default Detail;