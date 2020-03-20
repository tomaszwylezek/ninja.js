import React, { FC, SyntheticEvent, useMemo, useState, useCallback } from 'react';

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

  const containSearch = useCallback(
    (value: string) => {
      return value.toLowerCase().includes(lowerCasedSearch);
    },
    [lowerCasedSearch]
  );

  const filteredRows = useMemo(() => rows.filter(row => containSearch(row.name1) || containSearch(row.email)), [
    rows,
    search
  ]);

  const totalNumberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(filteredRows.length / rowsPerPage);

  const rowsToRender = filteredRows
    .slice(startIndex, startIndex + rowsPerPage)
    .map(row => <Row key={row.per_id} row={row} />);

  return (
    <div>
      <Search
        value={search}
        handleChange={(event: SyntheticEvent<HTMLInputElement>) => {
          console.log(event.currentTarget.value, 'event');
          setSearch(event.currentTarget.value);
        }}
      />

      {!!rowsToRender.length && (
        <>
          <table>
            <tbody>{rowsToRender}</tbody>
          </table>
          <Pagination
            currentPageNumber={currentPageNumber}
            totalNumberOfPages={totalNumberOfPages}
            onChange={setCurrentPageNumber}
          />
        </>
      )}

      {rowsToRender.length === 0 && <p>Nothing has been found</p>}
    </div>
  );
};
