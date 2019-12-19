import React from 'react';
import PropTypes from 'prop-types';

const BookItem = props => {

  getBooks = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  return (
    <div>

    </div>
  );
};

BookItem.propTypes = {

};

export default BookItem;