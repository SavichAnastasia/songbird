import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import birdsData from '../../birdsData';
import './style.scss';

function AnswerBlock ({ category, setAnswer, bird, isCorrect }) {
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    setAnswers(birdsData[category].map(item => ({
      id: item.id,
      name: item.name,
      isClicked: false
    })));
  }, [category]);

  const onClick = (e) => {
    if (!isCorrect) {
      const audio = new Audio();
      audio.src = `src/assets/audio/${bird.id === +e.target.value ? 'correct' : 'error'}.mp3`;
      audio.autoplay = true;
    }
    setAnswer(e);
    setAnswers(answers.map(answer => !isCorrect && (answer.id === +e.target.value) ? {...answer, isClicked: true} : answer));
  } 

  return (
    <ButtonGroup vertical>
      {answers ? answers.map(item => <Button onClick={onClick} key={item.id} value={item.id} active={item.isClicked}>
        <span className={item.isClicked ? (item.id === bird.id ? 'green' : 'red') : ''}>&bull;</span>
        {item.name}
      </Button>) : null}
    </ButtonGroup>
  )
}

AnswerBlock.propTypes = {
  category: PropTypes.number,
  setAnswer: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  bird: PropTypes.object
};

export default AnswerBlock;
