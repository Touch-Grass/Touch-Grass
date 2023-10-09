import Image from "next/image";
import "./trail.scss";
import {IUser} from "@/models/shared/user/user.interface";

interface TrailProps {
  name: string;
  description: string;
  length: number;
  difficulty: number;
  terrain: string;
  rating: number;
  image: string;
  user: IUser;
}

const Trail: React.FC<TrailProps> = ({
  name,
  description,
  length,
  difficulty,
  terrain,
  rating,
  image,
}) => {
  return (
    <>
      <div className="trail-container">
        <div>
            <Image src={image} alt='image of the trail' className="trail-image" width={10} height={10}/>
            <div className="trail-text">
                <h2>{name}</h2>
                <div className="trail-description">{description}</div>
                <div className="trail-difficulty">Difficulty <div className="trail-difficulty-container"><div className="trail-difficulty-meter"/><div className="trail-difficulty-white" style={{width:(47.5*difficulty/10)}}/></div></div>
                <div className="trail-extras"> <strong>Length</strong> {length} <strong>Terrain</strong> {terrain}
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none"><path d="M11.5 17.6811L18.607 22L16.721 13.86L23 8.38316L14.7315 7.66526L11.5 0L8.2685 7.66526L0 8.38316L6.2675 13.86L4.393 22L11.5 17.6811Z" fill="black"/></svg>
                {rating}
                </div>
                <div className="trail-user"> </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Trail;
