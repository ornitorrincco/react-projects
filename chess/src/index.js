// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <div style={{height: '300px', width: '300px'}}>
    <Board knightPosition={knightPosition} />
    </div>,
    rootEl
  )
);
// registerServiceWorker();
