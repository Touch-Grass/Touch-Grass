import dbConnect from "@/lib/dbConnection";
import { CookieService } from "@/services/cookies/service";
import { AuthService } from "@/services/auth/service";
import Navbar from "@/components/view/navbar/navbar.view";

interface NavbarPresenterProps {
    fixed: boolean;
}

const NavbarPresenter: React.FC<NavbarPresenterProps> = async props => {
    // Ensure that the database connection is available.
    let userInfo=null;
    try{
        await dbConnect();
        const token = CookieService.getCookie();
        userInfo = await AuthService.getUserInfoFromToken(token);
    }catch(error:any){
        console.error("");
        return;
    }


    return (
        <Navbar fixed={props.fixed} user={userInfo}/>
    );
};

export default NavbarPresenter;
