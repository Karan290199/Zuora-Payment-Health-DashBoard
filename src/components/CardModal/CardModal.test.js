import React from 'react';
import ReactDOM from 'react-dom';
import CardModal from './CardModal';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});