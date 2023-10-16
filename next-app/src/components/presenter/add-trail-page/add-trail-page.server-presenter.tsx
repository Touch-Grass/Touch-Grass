import { AuthService } from "@/services/auth/service";
import { CookieService } from "@/services/cookies/service";
import {redirect} from "next/navigation";
import AddTrailPagePresenter from "./add-trail-page.presenter";

interface AddTrailServerPresenterProps {}

const AddTrailServerPresenter: React.FC<AddTrailServerPresenterProps> = async props => {
    //Used to validate cookies on the add trail page (which is "use client" and can't do so. Can't put that one back to "use server" because of the image upload functionality)
    try{
        const token = CookieService.getCookie();
        await AuthService.performValidation(token);
    }catch(error: any){
        redirect("/login");
    }

    return (
        <AddTrailPagePresenter/>
    );
};

export default AddTrailServerPresenter;
