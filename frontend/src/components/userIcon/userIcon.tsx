import './userIcon.css';
import Image from 'next/image';

interface UserIconProps {
    username: string;
    userProfilePic: string;
    onUserProfilePicClicked: () => void;
}

const UserIcon: React.FC<UserIconProps> = ({username, userProfilePic, onUserProfilePicClicked}) => {
    return (
        <div className='user-icon-container'>
            <div className='text-username'>{username}</div>
            <Image 
                className='user-icon-profile-pic'
                src={userProfilePic} 
                alt='user-icon-profile-pic' 
                width={40} 
                height={40}
                onClick={onUserProfilePicClicked}
            ></Image>
        </div>
    );
}

export default UserIcon;