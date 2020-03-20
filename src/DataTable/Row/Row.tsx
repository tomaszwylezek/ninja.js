import React, { FC } from 'react';

import { IRow } from '../../models';

export interface IRowProps {
  row: IRow;
}

export const Row: FC<IRowProps> = ({ row }) => (
  <tr>
    <td>
      <a href={row.edit_path}>{row.name1}</a>
      <br />
      <small>{row.email}</small>
    </td>
  </tr>
);
