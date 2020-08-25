import React from 'react';
import { Pagination } from 'react-bootstrap';
import { categories } from '../../constants';
import './style.scss';

export default function Header ({ activeItem = categories[0], score = 0}) {
  return (
    <header>
      <div className="title">
        <h1>Songbird</h1>
        <h4>Score: {score}</h4>
      </div>
      <Pagination>
        { categories.map( item => <Pagination.Item className={activeItem === item ? 'active' : ''} key={item}>{item}</Pagination.Item>) }
      </Pagination>
    </header>
  )
}