import React, { useReducer } from 'react';
import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import BirdCard from '../BirdCard';
import AnswerBlock from '../AnswerBlock';
import WinnerPage from '../WinnerPage';
import { Button } from 'react-bootstrap';
import birdsData from '../../birdsData';
import arrayRandomElem from '../../arrayRandomElem';
import './style.scss';

const initialState = {
  category: 0,
  score: 0,
  bird: arrayRandomElem(birdsData[0]),
  answer: null,
  isCorrect: false,
  isGameOver: false,
  attempts: 0
};

const actionTypes = {
  setCategory: 'setCategory',
  setScore: 'setScore',
  setBird: 'setBird',
  setAnswer: 'setAnswer',
  setIsCorrect: 'setIsCorrect',
  setAttempts: 'setAttempts',
  resetGame: 'resetGame'
}

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.setCategory:
      return state.category === (birdsData.length - 1) ?
      {...state, category: 0, isGameOver: true}
      : {...state, category: state.category + 1};
    case actionTypes.setScore:
      return {...state, score: action.data};
    case actionTypes.setBird:
      return {...state, bird: arrayRandomElem(birdsData[state.category])};
    case actionTypes.setAnswer:
      return {...state, answer: birdsData[state.category].find(item => item.id === +action.data)};
    case actionTypes.setIsCorrect:
      return {...state, isCorrect: action.data};
    case actionTypes.setAttempts:
      return {...state, attempts: action.data};
      case actionTypes.resetGame:
      return {...state, isGameOver: false}
    default:
      throw new Error();
  }
}

export default function GameContainer () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAnswer = (e) => {
    dispatch({type: actionTypes.setAnswer, data: e.target.value});
    if (+e.target.value === state.bird.id) {
      dispatch({type: actionTypes.setIsCorrect, data: true});
      console.log(state.attempts)
      dispatch({type: actionTypes.setScore, data: state.score + 5 - state.attempts});
    } else {
      dispatch({type: actionTypes.setAttempts, data: state.attempts + 1});
      console.log(state.attempts)
    }
  }

  const changeCategory = () => {
    if (state.isCorrect) {
      dispatch({type: actionTypes.setCategory});
      dispatch({type: actionTypes.setBird});
      dispatch({type: actionTypes.setIsCorrect, data: false});
      dispatch({type: actionTypes.setAnswer, data: null});
      dispatch({type: actionTypes.setAttempts, data: 0});
    } 
  }

  const resetGame = () => {
    dispatch({type: actionTypes.resetGame});
    dispatch({type: actionTypes.setScore, data: 0})
  }

  return state.isGameOver ? 
      <WinnerPage score={state.score} reset={resetGame}/>
      : (
      <div className="gameContainer">
        <Header category={state.category} score={state.score} />
        <QuestionBlock bird={state.bird} isCorrect={state.isCorrect} />
        <div className="gameContainer-answer">
          <AnswerBlock category={state.category} bird={state.bird} setAnswer={setAnswer} isCorrect={state.isCorrect}/>
          <BirdCard bird={state.answer} isCorrect={state.isCorrect} />
        </div>
        <Button variant={state.isCorrect ? "success" : "primary"} 
          className="gameContainer-nextBtn" 
          onClick={changeCategory}>
            Next
          </Button>
      </div>
      )
}