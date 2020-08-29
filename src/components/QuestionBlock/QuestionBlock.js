import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Card } from 'react-bootstrap';
import './style.scss';

export default function QuestionBlock ({ bird, isCorrect }) {
  return (
    <Card bg="success" className="questionBlock">
      <div className="questionBlock-img" style={{backgroundImage: `url(${isCorrect ? bird.image : 'src/assets/bird.jpg'})`}} />
      <Card.Body>
        <Card.Title>{isCorrect ? bird.name : '******'}</Card.Title>
        <ReactAudioPlayer
          src={bird.audio}
          controls
        />
      </Card.Body>
    </Card>
  )
}