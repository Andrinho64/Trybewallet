import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { IStorage } from '../redux/types';

function Wallet() {
  const [currency, setCurrency] = useState('BRL');
  const userEmail = useSelector((state: any) => state.user.email);
  const storeExpense = useSelector((state: IStorage) => state.wallet.expenses);

  const getSome = () => {
    const totalExpenses = storeExpense.reduce((prev, cur) => {
      const sum = Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask);
      return prev + sum;
    }, 0);
    console.log(storeExpense);
    return totalExpenses;
  };

  return (
    <>
      <div>
        TrybeWallet
      </div>
      <header data-testid="email-field">
        <section data-testid="user-email">
          {' '}
          {userEmail}
        </section>
        <section data-testid="total-field">
          {getSome().toFixed(2)}
        </section>
        <section data-testid="header-currency-field">
          {currency}
        </section>
      </header>
      <WalletForm />
    </>
  );
}

export default Wallet;
