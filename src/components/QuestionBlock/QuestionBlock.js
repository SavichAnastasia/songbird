import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import 'react-h5-audio-player/src/styles.scss'
import './style.scss';

function QuestionBlock ({ bird, isCorrect }) {
  const player = useRef(null);
  useEffect(() => {
    if (isCorrect) player.current.audio.current.pause();
  }, [isCorrect])

  if (bird) console.log(bird.name)
  return (
    <Card bg="success" className="questionBlock">
      <div className="questionBlock-img" style={{backgroundImage: `url(${isCorrect ? bird.image : 'src/assets/img/bird.jpg'})`}} />
      <Card.Body>
        <Card.Title>{isCorrect ? bird.name : '******'}</Card.Title>
        <AudioPlayer
          ref={player}
          src={bird.audio}
          controls
          onAbort={(e) => e.target.pause()}
        />
      </Card.Body>
    </Card>
  )
}

QuestionBlock.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  bird: PropTypes.object
};

export default React.memo(QuestionBlock)