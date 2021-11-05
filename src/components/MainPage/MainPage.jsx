import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchCards } from '../../actions/fetchCards';
import { Card } from '../Card/Card';
import Button from '../Button/Button';

import cssStyles from './MainPage.module.css';

export default function MainPage() {
  console.log('render');
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const message = useSelector((state) => state.message.info);
  const [isOpenCards, setOpenCards] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [loadNewCards, setLoadNewCards] = useState(false);

  let leftCardValue;
  let rightCardValue;

  useEffect(() => {
    dispatch(fetchCards());
    setLoadNewCards(false);
  }, [loadNewCards]);

  if (cards.length > 0) {
    // eslint-disable-next-line prefer-destructuring
    leftCardValue = cards[0].code.split('')[0];
    // eslint-disable-next-line prefer-destructuring
    rightCardValue = cards[1].code.split('')[0];
  }

  const playButtonHandler = (bid) => {
    if (left && leftCardValue > rightCardValue) {
      dispatch({ type: 'ADD_POINTS', payload: bid });
      dispatch({ type: 'SET_WON_MESSAGE' });
    } else if (left && leftCardValue < rightCardValue) {
      dispatch({ type: 'TAKE_POINTS', payload: bid });
      dispatch({ type: 'SET_LOSE_MESSAGE' });
    } else if (right && rightCardValue > leftCardValue) {
      dispatch({ type: 'ADD_POINTS', payload: bid });
      dispatch({ type: 'SET_WON_MESSAGE' });
    } else if (right && rightCardValue < leftCardValue) {
      dispatch({ type: 'TAKE_POINTS', payload: bid });
      dispatch({ type: 'SET_LOSE_MESSAGE' });
    }

    setOpenCards(true);
  };

  const renewGameHandler = () => {
    dispatch({ type: 'CLEAR_CARDS_SET' });
    setLeft(false);
    setRight(false);
    setOpenCards(false);
    dispatch({ type: 'CLEAR_MESSAGE' });
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
        <div>
          {isOpenCards ? (
            <Button
              type="play"
              text="New Game"
              /* eslint-disable-next-line no-undef */
              onClick={() => renewGameHandler()}
            />
          ) : (
            <div className={cssStyles.buttonsContainer}>
              <Button disabled={right} type="play" text="First card" onClick={() => setLeft(true)} />
              <Button disabled={left} type="play" text="Second card" onClick={() => setRight(true)} />
              {/* eslint-disable-next-line no-undef */}
              <Button disabled={!right && !left} type="play" text="Make a BID" onClick={() => playButtonHandler(Number(prompt()))} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
