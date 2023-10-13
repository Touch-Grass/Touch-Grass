import { MouseEventHandler } from "react";
import "./button.scss";

export enum ButtonType {
    DEFAULT = "button-default",
    SEARCH = "button-search",
    LOGIN = "button-login",
    SIGNIN = "button-signin",
    DANGER = "button-danger",
}

interface ButtonViewProps {
    text: string;
    loading?: Boolean;
    type: ButtonType;
    onClick?: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({text, loading, type, onClick}) => {
    return(
        <button className={type+" loading"} title={text} onClick={onClick}>
            {(loading? <div className="button-loading-spinner"></div> : text)}
        </button>
    );
};

export default ButtonView;
