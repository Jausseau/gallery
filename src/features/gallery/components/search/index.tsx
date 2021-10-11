import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getPhoto, selectPhoto } from "../../store";
import SearchStyles from "./styles";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useAppDispatch();
  const photo = useAppSelector(selectPhoto);

  const search = React.useCallback(() => {
    dispatch(getPhoto(searchValue));
  }, [dispatch, searchValue]);

  const reset = React.useCallback(() => {
    dispatch(getPhoto());
  }, [dispatch]);

  return (
    <SearchStyles.Container>
      <label htmlFor="search-gallery">Search</label>
      <input
        name="search-gallery"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && search()}
        value={searchValue}
      />
      <button onClick={search}>Search a photo</button>
      <button onClick={reset} disabled={!photo.data}>
        Reset search
      </button>
    </SearchStyles.Container>
  );
};

export default Search;
