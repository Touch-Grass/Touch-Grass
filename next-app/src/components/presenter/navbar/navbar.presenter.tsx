import dbConnect from "@/lib/dbConnection";
import { CookieService } from "@/services/cookies/service";
import { AuthService } from "@/services/auth/service";
import Navbar from "@/components/view/navbar/navbar";

interface NavbarPresenterProps {}

const NavbarPresenter: React.FC<NavbarPresenterProps> = async props => {
    // Ensure that the database connection is available.
    await dbConnect();
    const token = CookieService.getCookie();
    const isUserLogged = await AuthService.performValidation(token);

    return (
        <Navbar isUserLogged={isUserLogged} />
    );
};

export default NavbarPresenter;
