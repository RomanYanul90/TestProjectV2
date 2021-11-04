import classNames from 'classnames';
import cssStyles from './button.module.css';

// eslint-disable-next-line react/prop-types
export default function Button({ text, type, onClick }) {
  const buttonClassName = classNames(cssStyles.button, cssStyles[`button_${type}`]);

  return (
  // eslint-disable-next-line react/button-has-type
    <button className={buttonClassName} onClick={onClick}>{text}</button>
  );
}
