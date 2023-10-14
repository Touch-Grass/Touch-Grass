import Image from "next/image";
import "./footer.view.scss";

export default function Footer(){
    return(
        <div className="footer">
            <Image className='footer-logo scroll-fade-in' src='/logo-300.png' alt='logo' width={100} height={100} ></Image>
            <div className="footer-title scroll-fade-in"><b>TouchGrass.</b></div>
            <div className="team-members scroll-fade-in">
                <div className="team-member">Ferran Campos</div>
                <div className="team-member">Malin Marques</div>
                <div className="team-member">Christine Qiu</div>
                <div className="team-member">Markus Wagner</div>
            </div>
        </div>
    );
}
