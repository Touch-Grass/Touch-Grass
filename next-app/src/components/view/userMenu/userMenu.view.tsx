import "./userMenu.view.scss";
import Link from "next/link";

interface UserMenuProps {
    isUserMenuVisible: boolean;
    onSavedTrailsClicked: () => void;
    onMyTrailsClicked: () => void;
    onAddTrailClicked: () => void;
    onEditAccountClicked: () => void;
    onLogOutClicked: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
    isUserMenuVisible,
    onSavedTrailsClicked,
    onMyTrailsClicked,
    onAddTrailClicked,
    onEditAccountClicked,
    onLogOutClicked
}) => {
    return (
        isUserMenuVisible ?
            <div className='user-menu-container'>
                <p id='menu-trails-text'><b><i>Trails</i></b></p>
                <div id='menu-item-saved-trails' className='menu-item' onClick={onSavedTrailsClicked}><Link
                    href='/saved-trail-list'><i>Saved Trails</i></Link></div>
                <div id='menu-item-my-trails' className='menu-item' onClick={onMyTrailsClicked}><Link
                    href='/my-trail-list'><i>My Trails</i></Link></div>
                <div id='menu-item-add-trail' className='menu-item' onClick={onAddTrailClicked}><Link href='/add-trail'><i>Add
                    Trail</i></Link></div>
                <p id='menu-account-text'><b><i>Account</i></b></p>
                <div id='menu-item-edit-account' className='menu-item' onClick={onEditAccountClicked}><Link
                    href='/edit-account'><i>Edit account</i></Link></div>
                <div id='menu-item-log-out' className='menu-item' onClick={onLogOutClicked}><i>Log out</i></div>
            </div> :
            <></>
    );
};

export default UserMenu;
