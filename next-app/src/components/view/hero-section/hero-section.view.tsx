import "./hero-section.view.scss";

interface HeroSectionViewProps {
    searchString: string;
    onSearchStringChange: (newValue: string) => void;
    onSearch: () => void;
}

const HeroSectionView: React.FC<HeroSectionViewProps> = (props) => {
    const {searchString, onSearchStringChange, onSearch} = props;

    return (
        <div className="hero-search-section">
            <div className={"hero-column"}>
                <div className="hero-tagline">
                    You should <a href="https://youtu.be/JSnUF4d9CBk?si=gHwIQvNeDnCqP77d">touch grass</a> today.
                </div>
                <div className={"hero-search-container"}>
                    <input type="text"
                           value={searchString}
                           placeholder="Where do you want to go?"
                           onChange={event => onSearchStringChange(event.target.value)}
                           onKeyDown={event => {
                               if (event.key === "Enter") {
                                   onSearch();
                               }
                           }}
                           className="hero-search-bar"/>
                    <button className="hero-search-button" onClick={onSearch}>Search</button>
                </div>
            </div>
            <div className="hero-scroll-tip">Scroll down to discover</div>
        </div>
    );
};

export default HeroSectionView;
