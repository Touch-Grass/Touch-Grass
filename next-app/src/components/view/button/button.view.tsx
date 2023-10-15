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
    loading?: boolean;
    disabled?: boolean;
    type: ButtonType;
    onClick?: () => void;
}

const ButtonView: React.FC<ButtonViewProps> = ({text, disabled, loading, type, onClick}) => {
    return(
        <button className={type+" loading"} disabled={!!disabled} title={text} onClick={onClick}>
            {(loading? <div className="button-loading-spinner"></div> : text)}
        </button>
    );
};

export default ButtonView;
