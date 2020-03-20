import React, { FC } from "react";

export interface IRowProps {
  row: any;
}

const Row: FC<IRowProps> = props => {
  const { row } = props;

  return (
    <tr>
      <td>
        <a href={row.edit_path}>{row.name1}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

export default Row;
