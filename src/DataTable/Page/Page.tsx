import React, { FC, SyntheticEvent } from 'react';
import cn from 'classnames';

export interface IPageProps {
  pageNumber: number;
  isSelected: boolean;
  onChange: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export const Page: FC<IPageProps> = ({ pageNumber, isSelected, onChange }) => {
  return (
    <li className="page-item mr-1">
      <button
        className={cn('page-link', {
          'button-outline': isSelected
        })}
        onClick={onChange}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};
