import "./userIcon.view.scss";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

interface UserIconProps {
    username: string;
    userProfilePic: string;
}

const UserIcon: React.FC<UserIconProps> = ({username, userProfilePic}) => {

    const [DropdownOpen, setDropDownOpen] = useState<boolean>(false);

    const dropdownMenuController = () => {
        setDropDownOpen(!DropdownOpen);
    };

    return (
        <div className="user-icon-container">
            <div className='user-icon-container-presentation' onClick={dropdownMenuController}>
                <div className='text-username'>Hello there <b>{username}</b>!</div>
                <Image
                    className='user-icon-profile-pic'
                    src={userProfilePic}
                    alt='user-icon-profile-pic'
                    width={40}
                    height={40}
                ></Image>
                <Image className={"user-icon-chevrown-down" + (DropdownOpen? " open" : "")} src='/chevron-down.svg' alt='logo' width={25} height={25} ></Image>
            </div>
            <div className={"user-icon-container-menu" + (DropdownOpen? " open" : "")}>
                <div className='user-icon-container-menu-content'>
                    <ul>
                        <p>Trails</p>
                        <li><Link href='/'>Saved Trails</Link></li>
                        <li><Link href='/'>My Trails</Link></li>
                        <li><Link href='/add-trail'>Add Trails</Link></li>
                        <p>My account</p>
                        <li><Link href='/'>Edit account</Link></li>
                        <li><Link href='/api/auth/logout'>Log Out</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default UserIcon;
