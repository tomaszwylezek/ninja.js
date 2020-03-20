import React from 'react';

import { IRow } from '../models';

import { Pagination } from './Pagination/Pagination';
import { Row } from './Row/Row';
import { Search } from './Search/Search';

export interface IDataTableProps {
  rows: IRow[];
  rowsPerPage: number;
}

export interface IDataTableState {
  rows: any;
  currentPageNumber: number;
  totalNumberOfPages: number;
}

export class DataTable extends React.Component<IDataTableProps, IDataTableState> {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
  };

  static defaultProps = {
    rowsPerPage: 40
  };

  calculateTotalNumberOfPages(rows: any) {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  }

  search(event: any) {
    const { rows } = this.props;
    const text = event.target.value;
    let rowsFound = rows;

    if (text) {
      rowsFound = rows.filter((row: any) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    });
  }

  changeToPageNumber(pageNumber: number) {
    this.setState({ currentPageNumber: pageNumber });
  }

  rowsInPageNumber(pageNumber: number) {
    const { rowsPerPage } = this.props;
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state;
    const rowsToRender = rows
      .map((row: any) => <Row key={row.per_id} row={row} />)
      .slice(...this.rowsInPageNumber(currentPageNumber));

    return (
      <div>
        <Search onSearch={this.search.bind(this)} />
        <table>
          <tbody>{rowsToRender}</tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={this.changeToPageNumber.bind(this)}
        />
      </div>
    );
  }
}
