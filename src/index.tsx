import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { IRow } from './models';

const element: HTMLElement = document.getElementById('user-data') as HTMLElement;

const userData: IRow[] = JSON.parse(element.dataset.users as string);

ReactDOM.render(<App rows={userData} />, document.getElementById('root'));
