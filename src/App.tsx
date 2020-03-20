import React, { FC } from 'react';
import { DataTable } from './DataTable/DataTable';
import { IRow } from './models';
import './App.css';

export interface IAppProps {
  rows: IRow[];
}

export const App: FC<IAppProps> = ({ rows }) => (
  <div className="container mt-3">
    <DataTable rows={rows} rowsPerPage={5} />
  </div>
);
