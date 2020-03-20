import React, { FC } from 'react';
import cn from 'classnames';

export interface IPageProps {
  pageNumber: any;
  currentPageNumber: any;
  onChange: any;
}

export const Page: FC<IPageProps> = ({ pageNumber, currentPageNumber, onChange }) => {
  const isActivePage = () => {
    return currentPageNumber === pageNumber;
  };

  const renderedPageNumber = () => {
    return pageNumber + 1;
  };

  const click = (event: any) => {
    event.preventDefault();
    onChange(pageNumber);
  };

  if (isActivePage()) {
    return (
      <li className="page-item mr-1">
        <button className="page-link button-outline" onClick={click}>
          {renderedPageNumber()}
        </button>
      </li>
    );
  }
  return (
    <li className="page-item mr-1">
      <button
        className={cn('page-link', {
          'button-outline': currentPageNumber === pageNumber
        })}
        onClick={click}
      >
        {renderedPageNumber()}
      </button>
    </li>
  );
};
