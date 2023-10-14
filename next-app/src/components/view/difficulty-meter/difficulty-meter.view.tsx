import React, {CSSProperties} from "react";
import "./difficulty-meter.view.scss";

interface DifficultyMeterViewProps {
    /** Scalar value between 0 and 1. */
    difficulty: number;
}

/**
 * This view showcases the difficulty of a trail as a progress bar.
 * @param props {DifficultyMeterViewProps} The properties of this progress bar.
 */
const DifficultyMeterView: React.FC<DifficultyMeterViewProps> = (props: DifficultyMeterViewProps) => {
    const {difficulty} = props;

    return (
        <div className={"difficulty-meter"} style={{"--difficulty-meter-progress": `${difficulty}`} as CSSProperties}>
            <div className={"difficulty-meter-gray-out"} ></div>
            <div className={"difficulty-meter-marker"}></div>
        </div>
    );
};

export default DifficultyMeterView;
