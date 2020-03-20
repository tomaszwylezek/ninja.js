import React, { FC } from "react";
import DataTable from "./DataTable";
import "./App.css";

export interface IAppProps {
  rows: any;
}

export const App: FC<IAppProps> = ({ rows }) => {
  return (
    <div className="container mt-3">
      <DataTable rows={rows} locale="da" rowsPerPage={5} />
    </div>
  );
};
