import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import Button from '../Button/Button';

import cssStyles from './MainPage.module.css';
import {
  ADD_POINTS, CLEAR_CARDS_SET, CLEAR_MESSAGE,
  FETCH_CARDS_WITH_SAGA,
  SET_LOSE_MESSAGE,
  SET_WON_MESSAGE,
  TAKE_POINTS,
} from '../../actions/actionTypes';
import { errorMessage } from '../../reducers/messageReducer';

export default function MainPage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const message = useSelector((state) => state.message.info);
  const [isOpenCards, setOpenCards] = useState(false);
  const [clickedButton, setClickedButton] = useState('');
  const [loadNewCards, setLoadNewCards] = useState(false);

  const right = 'right';
  const left = 'left';

  let leftCardValue;
  let rightCardValue;

  useEffect(() => {
    // dispatch(fetchCards());
    dispatch({ type: FETCH_CARDS_WITH_SAGA });
    setLoadNewCards(false);
  }, [loadNewCards]);

  if (cards.length > 0) {
    // eslint-disable-next-line prefer-destructuring
    leftCardValue = cards[0].code.split('')[0];
    // eslint-disable-next-line prefer-destructuring
    rightCardValue = cards[1].code.split('')[0];
  }

  const playButtonHandler = (bid) => {
    if (clickedButton === left && leftCardValue > rightCardValue) {
      dispatch({ type: ADD_POINTS, payload: bid });
      dispatch({ type: SET_WON_MESSAGE });
    } else if (clickedButton === left && leftCardValue < rightCardValue) {
      dispatch({ type: TAKE_POINTS, payload: bid });
      dispatch({ type: SET_LOSE_MESSAGE });
    } else if (clickedButton === right && rightCardValue > leftCardValue) {
      dispatch({ type: ADD_POINTS, payload: bid });
      dispatch({ type: SET_WON_MESSAGE });
    } else if (clickedButton === right && rightCardValue < leftCardValue) {
      dispatch({ type: TAKE_POINTS, payload: bid });
      dispatch({ type: SET_LOSE_MESSAGE });
    }

    setOpenCards(true);
  };

  const renewGameHandler = () => {
    dispatch({ type: CLEAR_CARDS_SET });
    setClickedButton('');
    setOpenCards(false);
    dispatch({ type: CLEAR_MESSAGE });
    setLoadNewCards(true);
  };

  if (isLoading) {
    return (
      <h1>LOADING...</h1>
    );
  }

  return (
    <div className={cssStyles.cardsContainer}>
      <div className={cssStyles.cardsContainer_withMessage}>
        {message && <h1>{message}</h1>}
        <div className={cssStyles.cardsContainer}>
          {cards.map((card) => <Card key={card.code} isShown={isOpenCards} cardPicture={card.image} />)}
        </div>
        {message !== errorMessage && (
          <div>
            {isOpenCards ? (
              <Button
                type="play"
                text="New Game"
                onClick={() => renewGameHandler()}
              />
            ) : (
              <div className={cssStyles.buttonsContainer}>
                <Button disabled={clickedButton === right} type="play" text="First card" onClick={() => setClickedButton(left)} />
                <Button disabled={clickedButton === left} type="play" text="Second card" onClick={() => setClickedButton(right)} />
                {/* eslint-disable-next-line no-undef */}
                <Button disabled={!clickedButton} type="play" text="Make a BID" onClick={() => playButtonHandler(Number(prompt()))} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
