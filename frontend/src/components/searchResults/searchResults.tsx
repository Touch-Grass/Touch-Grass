import UserIcon from "../userIcon/userIcon";
import Trail from '@/components/trail/trail';
import Signin from '@/components/signin/signin';
import type { UserInterface } from "../../models/users";
import type { TrailInterface } from "../../models/trails";
import './searchResult.css';

interface SearchProps {
  search: string;
  finds: number;
  trail1:TrailInterface;
  trail2:TrailInterface;
  trail3:TrailInterface;
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
      <Trail _id={trail1._id} name={trail1.name} description={trail1.description} length={trail1.length} difficulty={trail1.difficulty} terrain={trail1.terrain} rating={trail1.rating} image={trail1.image} user={trail1.user}/>
      <Trail _id={trail2._id} name={trail2.name} description={trail2.description} length={trail2.length} difficulty={trail2.difficulty} terrain={trail2.terrain} rating={trail2.rating} image={trail2.image} user={trail2.user}/>
      <Trail _id={trail3._id} name={trail3.name} description={trail3.description} length={trail3.length} difficulty={trail3.difficulty} terrain={trail3.terrain} rating={trail3.rating} image={trail3.image} user={trail3.user}/>
    </div>
    </>
  );
}

export default SearchResult;