import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Hook with redux segment control/i)).toBeInTheDocument();
  expect(screen.getByText(/Props with State segment control/i)).toBeInTheDocument();
});
