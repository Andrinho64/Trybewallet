import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux';
import WalletForm from '../components/WalletForm';
import {
  currencySuccess,
  expenseConstructor,
} from '../redux/actions';

// Teste para o componente WalletForm
test('renders WalletForm component', async () => {
  const { getByText, getByTestId } = render(
    <Provider store={ store }>
      <WalletForm />
    </Provider>,
  );

  const addButton = getByText('Adicionar despesa');
  const valueInput = getByTestId('value-input');
  const descriptionInput = getByTestId('description-input');

  fireEvent.change(valueInput, { target: { value: '100' } });
  fireEvent.change(descriptionInput, { target: { value: 'Test description' } });

  fireEvent.click(addButton);

  // Espera a próxima renderização do componente após a adição da despesa
  await waitFor(() => {
    expect(getByText('Test description')).toBeInTheDocument();
  });
});

// Teste para a action currencySuccess
test.skip('currencySuccess action', () => {
  const keys: any = ['USD', 'EUR', 'GBP'];
  const action = currencySuccess(keys);
  expect(action.type).toEqual('CURRENCY_SUCCESS');
  expect(action.payload).toEqual(keys);
});

// Teste para a action expenseConstructor
test('expenseConstructor action', () => {
  const expense : any = {
    description: 'Test expense',
    currency: 'USD',
    method: 'Credit card',
    tag: 'Food',
    value: '100',
    id: 1,
  };
  const action = expenseConstructor(expense);
  expect(action.type).toEqual('EXPENSE_CONSTRUCTOR');
  expect(action.payload).toEqual(expense);
});

/* import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import mockData from './helpers/mockData';
import store from '../redux';
import Wallet from '../pages/Wallet';
import WalletForm from '../components/WalletForm';
import {
  currencySuccess,
  expenseConstructor,
} from '../redux/actions';

test('Espera-se que na página inicial, tenha o texto "Login"', async () => {
  renderWithRouterAndRedux(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(screen.getByText(/E-mail:/i)).toBeInTheDocument();
  expect(screen.getByText(/Senha:/i)).toBeInTheDocument();
});

test('Espera-se que na página inicial, tenha o texto "Login"', async () => {
  const dataTestIdDescription = 'description-input';
  renderWithRouterAndRedux(<Wallet />);
  expect(screen.getByText(/Dinheiro/i)).toBeInTheDocument();
});

// Teste para a action currencySuccess
test('currencySuccess action', () => {
  const keys: any = ['USD', 'EUR', 'GBP'];
  const action = currencySuccess(keys);
  expect(action.type).toEqual('CURRENCY_SUCCESS');
  expect(action.payload).toEqual(keys);
});

// Teste para a action expenseConstructor
test('expenseConstructor action', () => {
  const expense : any = {
    description: 'Test expense',
    currency: 'USD',
    method: 'Credit card',
    tag: 'Food',
    value: '100',
    id: 1,
  };
  const action = expenseConstructor(expense);
  expect(action.type).toEqual('EXPENSE_CONSTRUCTOR');
  expect(action.payload).toEqual(expense);
}); */
