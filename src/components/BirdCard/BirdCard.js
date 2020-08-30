import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { Card } from 'react-bootstrap';
import 'react-h5-audio-player/src/styles.scss'
import './style.scss';

export default function BirdCard ({ bird, isCorrect }) {
  return  bird ? 
  (
    <Card bg="primary" className="birdCard">
      <Card.Body>
        <div className="birdCard-item-wrapper">
          <div className="birdCard-item-wrapper-img" style={{backgroundImage: `url(${bird.image})`}} />
          <div className="birdCard-item-wrapper-title">
            <Card.Title>{bird.name}</Card.Title>
            <Card.Text>{bird.species}</Card.Text>
            <AudioPlayer
              src={bird.audio}
              controls
              onAbort={(e) => e.target.pause()}
            />
          </div>
        </div>
        <Card.Text>{bird.description}</Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Card bg="primary" className="birdCard">
      <Card.Text>Послушайте плеер и выберите птицу из списка.</Card.Text>
    </Card>
  )
}