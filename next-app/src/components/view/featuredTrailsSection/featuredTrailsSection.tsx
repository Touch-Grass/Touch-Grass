import { IUser } from "@/models/shared/user/user.interface";
import { ITrail } from "@/models/shared/trail/trail.interface";
import FeaturedTrails from "../featuredTrails/featuredTrails";
import "./featuredTrailsSection.scss";

const userMock: IUser = {
    username: "user1",
    name: "John",
    surname: "Doe",
    email: "user1@example.com",
    password: "password1"
};

const trailsFeaturedMock: ITrail[]  = [
    {
        name: "Trail 1",
        description: "Description 1",
        polyline: [1, 2, 3],
        waypoints: [4, 5, 6],
        difficulty: 1,
        length: 5,
        terrain: "Terrain 1",
        duration: 60,
        location: "Location 1",
        images: ["image1.jpg", "image2.jpg"],
        creator: userMock,
    },
    {
        name: "Trail 2",
        description: "Description 2",
        polyline: [7, 8, 9],
        waypoints: [10, 11, 12],
        difficulty: 2,
        length: 8,
        terrain: "Terrain 2",
        duration: 90,
        location: "Location 2",
        images: ["image3.jpg", "image4.jpg"],
        creator: userMock,
    },
    {
        name: "Trail 3",
        description: "Description 3",
        polyline: [7, 8, 9],
        waypoints: [10, 11, 12],
        difficulty: 2,
        length: 8,
        terrain: "Terrain 3",
        duration: 90,
        location: "Location 3",
        images: ["image5.jpg"],
        creator: userMock,
    }
];

export default function FeaturedTrailsSection(){
    return (
        <div className="homepage-section" id="featured-trails-section">
            <div className="featured-trails-column">
                <div className="featured-trails-part">
                    <div className="featured-trails-header">
                        <div className="text-featured-trails"><b>Featured hiking trails</b></div>
                        <div className="text-more"><b>&gt; More</b></div>
                    </div>
                    <FeaturedTrails trailsFeatured={trailsFeaturedMock}></FeaturedTrails>
                </div>
                <div className="it-is-time-part">
                    <div className="text-it-is-time"><b>It&apos;s time to take a hike.</b></div>
                    <div className="register-column">
                        <div className="text-register">Registering only takes one minute.</div>
                        <button className="button-sign-up">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}