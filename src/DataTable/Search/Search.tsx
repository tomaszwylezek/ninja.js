import React, { FC } from 'react';

export interface ISearchProps {
  onSearch: (event: any) => void;
}

export const Search: FC<ISearchProps> = ({ onSearch }) => (
  <div className="p-b-1">
    <input type="search" className="form-control" placeholder="Søg brugere" onChange={onSearch} />
  </div>
);
