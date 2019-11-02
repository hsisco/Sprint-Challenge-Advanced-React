import React from 'react';
import * as rtl from 'react-testing-library';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  rtl.render(<App />);
});

it('renders "World Cup" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/world cup/i));
});

it('no "Men" in text', () => {
  const wrapper = rtl.render(<App />);
  const noMen = wrapper.queryByText(/men/i);
  expect(noMen).not.toBeInTheDocument();
});