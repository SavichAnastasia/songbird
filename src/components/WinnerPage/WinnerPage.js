import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './style.scss';

export default function WinerPage ({ score, reset }) {
  useEffect(() => {
    const audio = new Audio();
    audio.src = 'src/assets/audio/success.mp3';
    audio.autoplay = true;
    return () => audio.pause();
  })

  return score === 30 ? (
    <div className="winnerPage">
      <p className="winnerPage-title">Поздравляем!</p>
      <p>{score} баллов из 30! Теперь ты знаешь кто чирикнул!</p>
      <img src="src/assets/img/winner.png" alt="winner" />
    </div>
  ) : (
    <div className="winnerPage" style={{backgroundImage: 'url(src/assets/img/birds.png)'}}>
      <p className="winnerPage-title">Поздравляем!</p>
      <p>Вы набрали {score} баллов из 30 возможных!</p>
      <Button variant="success" onClick={reset}>Попробовать еще раз</Button>
    </div>
  )
}