import React from 'react';
import ReactDOM from 'react-dom';
import GatewayCard from './GatewayCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GatewayCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});