import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Card } from 'react-bootstrap';
import birdsData from '../../birdsData';
import './style.scss';

export default function QuestionBlock ({ bird = birdsData[0][0] }) {
  return (
    <Card bg="success" className="questionBlock">
      <Card.Img variant="top" src={bird.image} />
      <Card.Body>
        <Card.Title>{bird.name}</Card.Title>
        <ReactAudioPlayer
          src={bird.audio}
          controls
        />
      </Card.Body>
    </Card>
  )
}