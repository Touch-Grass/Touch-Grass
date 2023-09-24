import './userMenu.css'

interface UserMenuProps {
    isUserMenuVisible: boolean;
    onMyTrailsClicked: () => void;
    onAddTrailClicked: () => void;
    onEditAccountClicked: () => void;
    onLogOutClicked: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({isUserMenuVisible, onMyTrailsClicked, onAddTrailClicked, onEditAccountClicked, onLogOutClicked}) => {
    return (
        isUserMenuVisible?
        <div className='user-menu-container'>
            <p><b><i>Trails</i></b></p>
            <div id='menu-item-my-trails' className='menu-item' onClick={onMyTrailsClicked}><i>My Trails</i></div>
            <div id='menu-item-add-trail' className='menu-item' onClick={onAddTrailClicked}><i>Add Trail</i></div>
            <p></p>
            <p><b><i>Account</i></b></p>
            <div id='menu-item-edit-account' className='menu-item' onClick={onEditAccountClicked}><i>Edit account</i></div>
            <div id='menu-item-log-out' className='menu-item' onClick={onLogOutClicked}><i>Log out</i></div>
        </div>:
        <></>
    );
}

export default UserMenu;