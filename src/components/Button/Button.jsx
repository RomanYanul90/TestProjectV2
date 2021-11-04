import cssStyles from './button.module.css'
import classNames from "classnames";

export default function Button({text,type, onClick}) {
    const buttonClassName = classNames(cssStyles.button, cssStyles[`button_${type}`])

    return (
        <button className={buttonClassName} onClick={onClick}>{text}</button>
    )
}