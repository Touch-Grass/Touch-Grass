import ImageUpload from "@/components/view/imageUpload/imageUpload.view";
import "./editAccount.view.scss";

interface EditAccountViewProps {
    onProfilePicChanged: (imageUrl:string) => void;
}

const EditAccountView: React.FC<EditAccountViewProps> = (props) => {
    return (
        <div className="profile-page-container">
            <div className='profile-pic-container'>
              <ImageUpload imageUrl='/userIcon.png' onImageChanged={(imageUrl)=>props.onProfilePicChanged(imageUrl)}/>
            </div>
            <div className='profile-info-container'>
              <div className='profile-entry-container'>
                  <div className='profile-text'>Username</div>
                  <input className='profile-input' type='text' placeholder="Chris"></input>
              </div>
              <div className='profile-entry-container'>
                <div className='profile-text'>Email address</div>
                <input className='profile-input' type='text'  placeholder="chris@mail.com"></input>
              </div>
              <div className='profile-entry-container'>
                <div className='profile-text'>Password</div>
                <input className='profile-input' type='password'></input>
              </div>
              <div className='profile-entry-container'>
                <div className='profile-text'>Password confirmation</div>
                <input className='profile-input' type='password'></input>
              </div>
              <div className='profile-button-container'>
                <button className='profile-button' id='profile-save-button'>Save</button>
                <button className='profile-button' id='profile-delete-button'>Delete account</button>
              </div>
            </div>
        </div>
    );
  };
  
  export default EditAccountView;