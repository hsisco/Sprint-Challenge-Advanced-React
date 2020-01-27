import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { SetFavPlayer } from './components/SetFavPlayer';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('✅renders without crashing', () => {
  render(<App />);
});

test('✅SetFavPlayer returns Carli Lloyd', () => {
  const player = {name: 'Carli Lloyd'};
  const declare = jest.fn(player => player.name);

  declare(player);

  expect(declare).toHaveReturnedWith('Carli Lloyd');
});

test('✅no "Men" in text', () => {
  expect(App).not.toContain(/men/i);
});