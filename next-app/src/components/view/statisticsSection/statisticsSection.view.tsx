import Image from "next/image";
import "./statisticsSection.view.scss";

interface StatisticsSectionViewProps {
    numberOfUsers: number;
    numberOfTrails: number;
    numberOfLocations: number;
}

const StatisticsSectionView: React.FC<StatisticsSectionViewProps> = (props) =>
{
    return (
        <div className="homepage-section" id="statistics-section">
            <div className="background-half"></div>
            <div className="statistics-board scroll-fade-in">
                <div className="statistics-entries">
                    <div className="statistics-entry">
                        <Image className="statistics-image" src="/img/statistics-icon-users.svg" alt="icon-user" width={50} height={50}/>
                        <div className="statistics-number">{props.numberOfUsers}</div>
                        <div className="statistics-unit">users</div>
                    </div>
                    <div className="statistics-entry">
                        <Image className="statistics-image" src="/img/statistics-icon-trails.svg" alt="icon-trail" width={50} height={50}/>
                        <div className="statistics-number">{props.numberOfTrails}</div>
                        <div className="statistics-unit">trails</div>
                    </div>
                    <div className="statistics-entry">
                        <Image className="statistics-image" src="/img/statistics-icon-locations.svg" alt="icon-location" width={50} height={50}/>
                        <div className="statistics-number">{props.numberOfLocations}</div>
                        <div className="statistics-unit">locations</div>
                    </div>
                </div>
                <div className="text-next-could-be-yours">The next could be yours. <b>Add your trails today.</b></div>
            </div>
        </div>
    );
};

export default StatisticsSectionView;