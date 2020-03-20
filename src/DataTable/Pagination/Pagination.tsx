import React, { FC, SyntheticEvent } from 'react';

import { Page } from '../Page/Page';

export interface IPaginationProps {
  currentPageNumber: number;
  totalNumberOfPages: number;
  onChange: (pageNumber: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = Array.from(Array(totalNumberOfPages).keys()).map(pageNumber => {
    return (
      <Page
        key={pageNumber}
        pageNumber={pageNumber}
        isSelected={currentPageNumber === pageNumber}
        onChange={(event: SyntheticEvent<HTMLButtonElement>) => {
          event.preventDefault();
          onChange(pageNumber);
        }}
      />
    );
  });

  if (pages.length <= 1) {
    return null;
  }

  return <ul className="pagination">{pages}</ul>;
};
