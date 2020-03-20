import React, { FC, SyntheticEvent, useMemo, useState } from 'react';

import { IRow } from '../models';

import { Pagination } from './Pagination/Pagination';
import { Row } from './Row/Row';
import { Search } from './Search/Search';

export interface IDataTableProps {
  rows: IRow[];
  rowsPerPage: number;
}
export const DataTable: FC<IDataTableProps> = ({ rows, rowsPerPage = 50 }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const startIndex = currentPageNumber * rowsPerPage;

  const lowerCasedSearch = search.toLowerCase();

  const filteredRows = useMemo(() => {
    return rows.filter(row => {
      return row.name1.toLowerCase().includes(lowerCasedSearch) || row.email.toLowerCase().includes(lowerCasedSearch);
    });
  }, [rows, search]);

  const totalNumberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(filteredRows.length / rowsPerPage);

  const rowsToRender = filteredRows
    .map((row: any) => <Row key={row.per_id} row={row} />)
    .slice(startIndex, startIndex + rowsPerPage);

  return (
    <div>
      <Search
        value={search}
        handleChange={(event: SyntheticEvent<HTMLInputElement>) => {
          setSearch(event.currentTarget.value);
        }}
      />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber}
      />
    </div>
  );
};
