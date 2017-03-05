import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
  <App txt="this is the prop text" />,
  document.getElementById('root')
);