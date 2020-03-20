import React, { FC } from "react";

export interface ISearchProps {
  onSearch: (event: any) => void;
}

const Search: FC<ISearchProps> = props => {
  const { onSearch } = props;

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
