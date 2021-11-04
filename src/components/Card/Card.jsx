import classNames from 'classnames';
import cssStyles from './card.module.css';

// eslint-disable-next-line
export function Card({className, cardPicture, isShown}) {
  if (!cardPicture || !isShown) {
    return (<img className={classNames(cssStyles.card, className)} alt="card" src="https://static7.depositphotos.com/1257959/746/v/600/depositphotos_7461846-stock-illustration-playing-card-back-side-60x90.jpg" />);
  }
  return (
    <img className={classNames(cssStyles.card, className)} alt="card" src={cardPicture} />
  );
}
