import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { newsPost } from './Redux/state';


export let renderJs = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} newsPost={newsPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}