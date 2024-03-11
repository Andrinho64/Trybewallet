import React from 'react';
import { useSelector } from 'react-redux';

function Wallet() {
  const INITIAL_VALUE = 0;
  const userEmail = useSelector((state: any) => state.user.email);

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
          {INITIAL_VALUE}
        </section>
        <section data-testid="header-currency-field">
          BRL
        </section>
      </header>
    </>
  );
}

export default Wallet;
