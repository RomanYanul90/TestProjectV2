import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import { Card } from '../Card/Card';
import { fetchCards } from '../../actions/fetchCards';

import cssStyles from './mainPage.module.css';

export default function MainPage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const balance = useSelector((state) => state.balance.points);
  const [leftButton, setLeftButtonParams] = useState({
    clicked: false,
    cardValue: null,
  });
  const [rightButton, setRightButtonParams] = useState({
    clicked: false,
    cardValue: null,
  });
  const [showCards, setShowCards] = useState(false);

  // const [highestValue, setHighestValue] = useState(0);

  // console.log('leftButtonClicked', leftButton);
  // console.log('rightButtonClicked', rightButton);

  // console.log(cards[0].code.split('')[0], cards[1].code.split('')[0]);

  // useEffect(() => {
  //   dispatch(fetchCards());
  // }, [leftButton, rightButton]);

  const playButtonHandler = () => {
    // await dispatch(fetchCards());
    setShowCards(true);
    console.log(cards.length);

    setLeftButtonParams((prev) => ({
      ...prev,
      cardValue: cards[0].code.split('')[0],
    }));
    setRightButtonParams((prev) => ({
      ...prev,
      cardValue: cards[1].code.split('')[0],
    }));

    if (leftButton.cardValue > rightButton.cardValue) {
      // setHighestValue(leftButton.cardValue);
    } else {
      // setHighestValue(rightButton.cardValue);
    }
    // console.log('leftButtonClicked', leftButton);
    // console.log('rightButtonClicked', rightButton);

    // if (cards[0].code.split('')[0] > cards[1].code.split('')[0]) {
    //   setHighestValue(cards[0].code.split('')[0]);
    // } else {
    //   setHighestValue(cards[1].code.split('')[0]);
    // }

    // if (leftButtonClicked && cards[0].code.split('')[0] === highestValue) {
    //   console.log('case1');
    //   dispatch({ type: 'ADD_POINTS', payload: 10 });
    // } else if (leftButtonClicked && cards[1].code.split('')[0] === highestValue) {
    //   console.log('case2');
    //   dispatch({ type: 'TAKE_POINTS', payload: 10 });
    // }
    //
    // if (rightButtonClicked && cards[1].code.split('')[0] === highestValue) {
    //   console.log('case3');
    //   dispatch({ type: 'ADD_POINTS', payload: 10 });
    // } else if (rightButtonClicked && cards[0].code.split('')[0] === highestValue) {
    //   console.log('case4');
    //   dispatch({ type: 'TAKE_POINTS', payload: 10 });
    // }

    // setTimeout(() => {
    //   dispatch({ type: 'CLEAR_CARDS_SET' });
    //   setLeftButtonParams((prev) => ({
    //     ...prev,
    //     clicked: false,
    //   }));
    //   setRightButtonParams((prev) => ({
    //     ...prev,
    //     clicked: false,
    //   }));
    // }, 5000);
  };

  return (
    <div className={cssStyles.mainPage__container}>
      <h1>MainPage</h1>
      <div>
        <h1>{balance}</h1>
      </div>
      {cards.length > 0 && showCards ? <Card cardPicture={cards[0].image} /> : <Card />}
      <Button
        disabled={leftButton.clicked || rightButton.clicked}
        text="Left"
        type="play"
        onClick={() => {
          setLeftButtonParams((prev) => ({
            ...prev,
            clicked: true,
          }));
          dispatch(fetchCards());
        }}
      />
      <Button
        disabled={leftButton.clicked || rightButton.clicked}
        text="Right"
        type="play"
        onClick={() => {
          setRightButtonParams((prev) => ({
            ...prev,
            clicked: true,
          }));
          dispatch(fetchCards());
        }}
      />
      <Button
        text="Play"
        type="play"
        onClick={() => playButtonHandler()}
      />
      {cards.length > 0 && showCards ? <Card cardPicture={cards[1].image} /> : <Card />}
      {isLoading && <h1>LOADING...</h1>}
    </div>
  );
}
