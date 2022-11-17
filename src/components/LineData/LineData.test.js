import React from 'react';
import ReactDOM from 'react-dom';
import LineData from './LineData';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineData />, div);
  ReactDOM.unmountComponentAtNode(div);
});