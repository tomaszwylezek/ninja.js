import React, { FC, SyntheticEvent } from 'react';

export interface ISearchProps {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

export const Search: FC<ISearchProps> = ({ value, handleChange }) => (
  <div className="p-b-1">
    <input type="search" className="form-control" placeholder="Søg brugere" onChange={handleChange} value={value} />
  </div>
);
