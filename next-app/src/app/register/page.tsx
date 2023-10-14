import RegisterPresenter from "@/components/presenter/register/register.presenter";
import "./page.scss";

export default async function Register() {
    return(
        <>
            <main>
                <RegisterPresenter/>
            </main>
        </>
    );
}
