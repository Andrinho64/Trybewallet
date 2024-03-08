import store from '../redux';

function Wallet() {
  const { user } = store.getState();
  return (
    <div>
      TrybeWallet
    </div>
  );
}

export default Wallet;
