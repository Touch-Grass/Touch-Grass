import Image from "next/image";
import "./statistics.view.scss";

interface StatisticsSectionViewProps {
    numberOfUsers: number;
    numberOfTrails: number;
    numberOfLocations: number;
}

const StatisticsView: React.FC<StatisticsSectionViewProps> = (props) => {
    return (
        <div className="statistics">
            <div className={"statistics-board scroll-fade-in"}>
                <div className="statistics-entries">
                    <div className="statistics-entry">
                        <Image className="statistics-image" src="/img/statistics-icon-users.svg" alt="icon-user" width={50}
                               height={50}/>
                        <div className="statistics-number">{props.numberOfUsers}</div>
                        <div className="statistics-unit">users</div>
                    </div>
                    <div className="statistics-entry">
                        <Image className="statistics-image" src="/img/statistics-icon-trails.svg" alt="icon-trail"
                               width={50} height={50}/>
                        <div className="statistics-number">{props.numberOfTrails}</div>
                        <div className="statistics-unit">trails</div>
                    </div>
                    <div className="statistics-entry">
                        <Image className="statistics-image" src="/img/statistics-icon-locations.svg" alt="icon-location"
                               width={50} height={50}/>
                        <div className="statistics-number">{props.numberOfLocations}</div>
                        <div className="statistics-unit">locations</div>
                    </div>
                </div>
                <div className="statistics-slogan">The next could be yours. <b>Add your trails today.</b></div>
            </div>
        </div>
    );
};

export default StatisticsView;
