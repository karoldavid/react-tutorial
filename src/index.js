import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
  <App cat={5} txt="this is the prop value" />,
  document.getElementById('root')
);