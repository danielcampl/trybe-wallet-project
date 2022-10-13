import React from 'react';
import WalletForm from '../components/WalletForm';
import Header from '../components/Header';
import Table from '../components/Table';

import Money from '../images/money.png';
import '../CSS/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <img src={ Money } alt="money" className="money-wallet" />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
