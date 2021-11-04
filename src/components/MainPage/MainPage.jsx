import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { fetchCards } from '../../actions/fetchCards';

export default function MainPage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <div>
      <h1>MainPage</h1>
      <Button
        text="Play"
        type="play"
        onClick={() => {
          dispatch(fetchCards());
          // console.log(cards)
        }}
      />
      {isLoading && <h1>LOADING...</h1>}
      {cards.length > 0 && !isLoading && (
      <div>
        <div>{cards[0].code}</div>
        <div>{cards[1].code}</div>
      </div>
      ) }
    </div>
  );
}
