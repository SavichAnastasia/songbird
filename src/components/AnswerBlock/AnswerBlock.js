import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import birdsData from '../../birdsData';
import './style.scss';

export default function AnswerBlock ({ category = 0 }) {
  return (
    <ButtonGroup vertical>
      {birdsData[category].map(item => <Button key={item.id}>{item.name}</Button>)}
    </ButtonGroup>
  )
}