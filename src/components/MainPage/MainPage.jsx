import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchCards } from '../../actions/fetchCards';
import { Card } from '../Card/Card';
import Button from '../Button/Button';

import cssStyles from './MainPage.module.css';

export default function MainPage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [isOpenCards, setOpenCards] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  if (isLoading) {
    return (
      <h1>LOADING...</h1>
    );
  }

  if (!cards.length) {
    return (
      <div>
        <div>
          <Card />
          <Card />
        </div>
        <div className={cssStyles.buttonsContainer}>
          <Button disabled={right} type="play" text="LEFT CARD" onClick={() => setLeft(true)} />
          <Button disabled={left} type="play" text="RIGHT CARD" onClick={() => setRight(true)} />
          <Button type="play" text="Reshuffle the Cards" onClick={() => dispatch(fetchCards())} />
        </div>
      </div>
    );
  }

  const leftCardValue = cards[0].code.split('')[0];
  const rightCardValue = cards[1].code.split('')[0];

  const playButtonHandler = (bid) => {
    if (left && leftCardValue > rightCardValue) {
      dispatch({ type: 'ADD_POINTS', payload: bid });
    } else if (left && leftCardValue < rightCardValue) {
      dispatch({ type: 'TAKE_POINTS', payload: bid });
    } else if (right && rightCardValue > leftCardValue) {
      dispatch({ type: 'ADD_POINTS', payload: bid });
    } else if (right && rightCardValue < leftCardValue) {
      dispatch({ type: 'TAKE_POINTS', payload: bid });
    }

    setOpenCards(true);
  };

  const renewGameHandler = () => {
    dispatch({ type: 'CLEAR_CARDS_SET' });
    setLeft(false);
    setRight(false);
    setOpenCards(false);
  };

  return (
    <div className={cssStyles.buttonsContainer}>
      {cards.map((card) => <Card key={card.code} isShown={isOpenCards} cardPicture={card.image} />)}
      {/* eslint-disable-next-line react/button-has-type */}
      {isOpenCards ? (
        <Button
          type="play"
          text="New Game"
          /* eslint-disable-next-line no-undef */
          onClick={() => renewGameHandler()}
        />
      ) : (
        <Button
          disabled={isOpenCards}
          type="play"
          text="Make a BID"
          /* eslint-disable-next-line no-undef */
          onClick={() => playButtonHandler(Number(prompt()))}
        />
      )}
    </div>
  );
}
