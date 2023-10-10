import NavbarPresenter from '@/components/presenter/navbar/navbar.presenter'
import RegisterPresenter from '@/components/presenter/register/register.presenter'
import './page.scss'

export default async function Register() {
    return(
        <>
            <NavbarPresenter/>
            <main className='process-form'>
                <RegisterPresenter/>
            </main>
        </>
    )
}