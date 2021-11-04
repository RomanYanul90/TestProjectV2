import classNames from 'classnames';
import cssStyles from './button.module.css';

// eslint-disable-next-line react/prop-types
export default function Button({
// eslint-disable-next-line react/prop-types
  text, type, onClick, disabled = false,
}) {
  const buttonClassName = classNames(cssStyles.button, cssStyles[`button_${type}`]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={disabled}
      className={buttonClassName}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
