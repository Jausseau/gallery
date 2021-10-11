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
      <label htmlFor="search-gallery" data-testid="Search#Label">
        Search
      </label>
      <input
        data-testid="Search#Input"
        name="search-gallery"
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && search()}
        value={searchValue}
      />
      <button onClick={search} data-testid="Search#Button">
        Search a photo
      </button>
      <button onClick={reset} disabled={!photo.data} data-testid="Search#Reset">
        Reset search
      </button>
    </SearchStyles.Container>
  );
};

export default Search;
