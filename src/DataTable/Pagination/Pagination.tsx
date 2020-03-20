import React, { FC, SyntheticEvent } from 'react';

import { PaginationItem } from './PaginationItem/PaginationItem';

export interface IPaginationProps {
  currentPageNumber: number;
  totalNumberOfPages: number;
  onChange: (pageNumber: number) => void;
}

const createKeyArray = (amount: number): number[] => Array.from(Array(amount).keys());

export const Pagination: FC<IPaginationProps> = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if (totalNumberOfPages === 0) {
    return null;
  }

  const pages = createKeyArray(totalNumberOfPages);

  return (
    <ul className="pagination">
      {pages.map(pageNumber => (
        <PaginationItem
          key={pageNumber}
          pageNumber={pageNumber}
          isSelected={currentPageNumber === pageNumber}
          onChange={(event: SyntheticEvent<HTMLButtonElement>) => {
            event.preventDefault();
            onChange(pageNumber);
          }}
        />
      ))}
    </ul>
  );
};
