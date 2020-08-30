import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { categories } from '../../constants';
import './style.scss';

function Header ({ category, score }) {
  return (
    <header>
      <div className="title">
        <h1>Songbird</h1>
        <h4>Score: {score}</h4>
      </div>
      <Pagination>
        { categories.map(item => <Pagination.Item 
          className={categories[category] === item ? 'active' : ''} 
          key={item}>
            {item}
          </Pagination.Item>) }
      </Pagination>
    </header>
  )
}

Header.propTypes = {
  category: PropTypes.number,
  score: PropTypes.number.isRequired
};

export default React.memo(Header);