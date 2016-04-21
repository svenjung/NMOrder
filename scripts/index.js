import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory } from 'react-router';
import { createHistory, createHashHistory } from 'history';
import Root from './Root';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const defaultHistory = useRouterHistory(createHistory)({ queryKey: false });

const rootEl = document.getElementById('root');
// Use hash location for Github Pages
// but switch to HTML5 history locally.
const history = process.env.NODE_ENV === 'production' ?
    hashHistory : defaultHistory;

ReactDOM.render(<Root history={history} />, rootEl);