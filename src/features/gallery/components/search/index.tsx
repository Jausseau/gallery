import React from "react";
import usePhoto from "../../hooks/use-photo";
import SearchStyles from "./styles";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const { search } = usePhoto();

  return (
    <SearchStyles.Container>
      <label htmlFor="search-gallery">Search</label>
      <input
        name="search-gallery"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={() => search(searchValue)}>Search the photo</button>
    </SearchStyles.Container>
  );
};

export default Search;
