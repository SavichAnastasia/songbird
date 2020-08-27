import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Card } from 'react-bootstrap';
import birdsData from '../../birdsData';
import './style.scss';

export default function BirdCard ({ bird = birdsData[0][0] }) {
  return (
    <Card bg="primary" className="birdCard">
      <Card.Header>{bird.name}</Card.Header>
      <Card.Body>
        <div className="birdCard-item-wrapper">
          <Card.Img variant="top" src={bird.image} />
          <div className="birdCard-item-wrapper-title">
            <Card.Title>{bird.species}</Card.Title>
            <ReactAudioPlayer
              src={bird.audio}
              controls
            />
          </div>
        </div>
        <Card.Text>{bird.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}