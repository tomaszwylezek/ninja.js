import React, { FC } from "react";

export interface IPageProps {
  pageNumber: any;
  currentPageNumber: any;
  onChange: any;
}

const Page: FC<IPageProps> = props => {
  const { pageNumber, currentPageNumber, onChange } = props;

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
      <button className="page-link" onClick={click}>
        {renderedPageNumber()}
      </button>
    </li>
  );
};

export default Page;
