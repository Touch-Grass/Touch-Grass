import Image from "next/image";
import Link from "next/link";
import type { UserInterface } from "../../models/users";
import UserIcon from "../userIcon/userIcon";
import UserMenu from "@/components/userMenu/userMenu";
import Signin from "@/components/signin/signin";
import "./navbar.css";

interface TrailProps {
  _id: string;
  name: string;
  description: string;
  length: number;
  difficulty: number;
  terrain: string;
  rating: number;
  image: string;
user: UserInterface;     
}

const Trail: React.FC<TrailProps> = ({
  _id,
  name,
  description,
  length,
  difficulty,
  terrain,
  rating,
  image,
  user,
}) => {
  return (
    <>
      <div className="trail-container">
        <div>
            <Image src={image} alt='image of the trail' className="trail-image"/>
            <div className="trail-text">
                <h2>{name}</h2>
                <div>{description}</div>
                <div className="trail-difficulty">Difficulty</div>
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
