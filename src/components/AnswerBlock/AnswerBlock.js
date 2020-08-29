import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import birdsData from '../../birdsData';
import './style.scss';

export default function AnswerBlock ({ category, onClick }) {
  return (
    <ButtonGroup vertical>
      {birdsData[category].map(item => <Button onClick={onClick} key={item.id} value={item.id} >{item.name}</Button>)}
    </ButtonGroup>
  )
}