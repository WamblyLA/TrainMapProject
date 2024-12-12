import Map from "../modules/Map/Map.jsx";
import SearchBar from '../modules/SearchBar/SearchBar.jsx';

function MainPage() {
  return (
    <div className="MainPage">
      <SearchBar></SearchBar>
      <Map></Map>
    </div>
  );
}

export {MainPage};
