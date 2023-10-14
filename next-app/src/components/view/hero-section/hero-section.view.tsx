import "./hero-section.view.scss";

interface HeroSectionViewProps {}

const HeroSectionView: React.FC<HeroSectionViewProps> = (props) => {
    return (
        <div className="homepage-section" id="hero-search-section">
            <div className={"hero-column"}>
                <div className="hero-tagline">
                    You should <a href="https://youtu.be/JSnUF4d9CBk?si=gHwIQvNeDnCqP77d">touch grass</a> today.
                </div>
                <div className={"hero-search-container"}>
                    <input type='text'
                            placeholder='Where do you want to go?'
                            className='hero-search-bar'/>
                    <button className='hero-search-button'>Search</button>
                </div>
            </div>
            <div className='hero-scroll-tip'>Scroll down to discover</div>
        </div>
    );
};

export default HeroSectionView;
