import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Card } from 'react-bootstrap';
import './style.scss';

export default function BirdCard ({ bird }) {
  return  bird ? 
  (
    <Card bg="primary" className="birdCard">
      <Card.Body>
        <div className="birdCard-item-wrapper">
          <div className="birdCard-item-wrapper-img" style={{backgroundImage: `url(${bird.image})`}} />
          <div className="birdCard-item-wrapper-title">
            <Card.Title>{bird.name}</Card.Title>
            <Card.Text>{bird.species}</Card.Text>
            <ReactAudioPlayer
              src={bird.audio}
              controls
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