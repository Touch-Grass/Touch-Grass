import LoginPresenter from "@/components/presenter/login/login.presenter";
import "./page.scss";

export default async function Login() {
    return(
        <>
            <main className='process-form'>
                <LoginPresenter/>
            </main>
        </>
    );
}
