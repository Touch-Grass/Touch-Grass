import Trail from "@/components/trail/trail";
import type {ITrail} from "@/models/shared/trail/trail.interface";
import "./searchResults.scss";

interface SearchProps {
  search: string;
  finds: number;
  trail1:ITrail;
  trail2:ITrail;
  trail3:ITrail;
  //trailArray:any;           //TODO: Implement an array version of this, though consider lazy loading of this
}

const SearchResult: React.FC<SearchProps> = (
    {
      search,
      finds,
      trail1,
      trail2,
      trail3
    }
  ) => {
  return (
    <>
    <div className="search-container">
      <div className="search-heading"> <div>{finds} trails in {search}</div></div>
      <Trail name={trail1.name} description={trail1.description} length={trail1.length} difficulty={trail1.difficulty} terrain={trail1.terrain} rating={0} image={trail1.images[0]} user={trail1.creator}/>
      <Trail name={trail2.name} description={trail2.description} length={trail2.length} difficulty={trail2.difficulty} terrain={trail2.terrain} rating={0} image={trail1.images[0]} user={trail2.creator}/>
      <Trail name={trail3.name} description={trail3.description} length={trail3.length} difficulty={trail3.difficulty} terrain={trail3.terrain} rating={0} image={trail1.images[0]} user={trail3.creator}/>
    </div>
    </>
  );
};

export default SearchResult;
