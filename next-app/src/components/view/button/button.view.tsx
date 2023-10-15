import "./button.view.scss";

export enum ButtonType {
    DEFAULT = "button-default",
    SEARCH = "button-search",
    LOGIN = "button-login",
    SIGNIN = "button-signin",
    DANGER = "button-danger",
}

interface ButtonViewProps {
    text: string;
    disabled?: boolean;
    type: ButtonType;
    onClick?: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({text, disabled, type, onClick}) => {
    return(
        <button className={type} disabled={!!disabled} title={text} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonView;
