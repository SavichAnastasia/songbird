import React from 'react';
import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import BirdCard from '../BirdCard';
import AnswerBlock from '../AnswerBlock';
import { Button } from 'react-bootstrap';
import birdsData from '../../birdsData';
import './style.scss';

export default function GameContainer ({ }) {
  return (
    <div className="gameContainer">
      <Header />
      <QuestionBlock />
      <div className="gameContainer-answer">
        <AnswerBlock />
        <BirdCard />
      </div>
      <Button variant="success">Next</Button>
    </div>
  )
}