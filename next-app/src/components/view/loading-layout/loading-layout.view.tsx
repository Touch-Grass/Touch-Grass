import LoadingSpinnerView from "../loading-spinner/loading-spinner.view";
import "./loading-layout.view.scss";
interface LoadingLayoutViewProps {
    active: boolean;
}

const LoadingLayoutView: React.FC<LoadingLayoutViewProps> = ({active}) => {
    return(
        <div className={"loading-layout " + (active ? "active" : "")}>
            <div className="loading-layout-content">
                <LoadingSpinnerView/>
            </div>
        </div>
    );
};

export default LoadingLayoutView;
