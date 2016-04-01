import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {App, AppES6} from './components/App';

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<div>
    <App />
    <AppES6 />
  </div>, app);
}
