import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { fetchCards } from '../../actions/fetchCards';
import { Card } from '../Card/Card';

export default function MainPage() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.points);
  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.loading.isLoading);
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
        <h1>{balance}</h1>
        <Card />
        <Card />
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => setLeft(true)}>Left</button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => setRight(true)}>Right</button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => dispatch(fetchCards())}>
          LoadCards
        </button>
      </div>
    );
  }

  console.log('left', left);
  console.log('right', right);
  return (
    <div>
      <h1>{balance}</h1>
      {cards.map((card) => <Card key={card.code} cardPicture={card.image} />)}
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => {
        if (left && cards[0].code.split('')[0] > cards[1].code.split('')[0]) {
          dispatch({ type: 'ADD_POINTS', payload: 10 });
        } else if (left && cards[0].code.split('')[0] < cards[1].code.split('')[0]) {
          dispatch({ type: 'TAKE_POINTS', payload: 10 });
        } else if (right && cards[1].code.split('')[0] > cards[0].code.split('')[0]) {
          dispatch({ type: 'ADD_POINTS', payload: 10 });
        } else if (right && cards[1].code.split('')[0] < cards[0].code.split('')[0]) {
          dispatch({ type: 'TAKE_POINTS', payload: 10 });
        }
        setTimeout(() => {
          dispatch({ type: 'CLEAR_CARDS_SET' });
          setLeft(false);
          setRight(false);
        }, 4000);
      }}
      >
        Play
      </button>
    </div>
  );
}
