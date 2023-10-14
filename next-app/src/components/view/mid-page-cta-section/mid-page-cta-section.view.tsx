import Image from "next/image";
import "./mid-page-cta-section.view.scss";
import Link from "next/link";
import ButtonView, {ButtonType} from "@/components/view/button/button.view";

const MidPageCTASectionView: React.FC = (props) => {
    return (
        <div className="mid-page-cta">
            <div className={"mid-page-cta-column scroll-fade-in"}>
                <Image className="mid-page-cta-walking-guy" src="/img/walking-guy.svg" alt="walking-guy" width={0}
                       height={0}/>
                <div className="mid-page-cta-slogan">
                    <div>It&apos;s time to</div>
                    <div>take a hike<span>.</span></div>
                </div>
                <div className="mid-page-cta-action">
                    <div>Registering only takes one minute.</div>
                    <Link href='/register'>
                        <ButtonView type={ButtonType.LOGIN} text={"Sign up"}></ButtonView>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MidPageCTASectionView;
