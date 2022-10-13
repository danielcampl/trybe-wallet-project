import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../redux/actions';

import Money from '../images/money.png';
import '../CSS/Login.css';
import '../CSS/Button.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isdisabled: true,
    login: false,
  }

  validatePassword = () => {
    const { email, password } = this.state;
    const magicNumber = 6;
    if (password.length >= magicNumber && this.validateEmail(email)) {
      this.setState({ isdisabled: false });
    } else {
      this.setState({ isdisabled: true });
    }
  };

  validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  handleClick = () => {
    const { email } = this.state;
    const { dispatchEmailInfo } = this.props;
    dispatchEmailInfo(email);
    this.setState({ login: true });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validatePassword);
  }

  render() {
    const { email, password, isdisabled, login } = this.state;
    return (
      <div className="login-page">
        <div className="login-container">
          <h1>Login</h1>
          <input
            data-testid="email-input"
            name="email"
            type="text"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
            className="login-input"
          />
          <input
            data-testid="password-input"
            name="password"
            type="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
            className="login-input"
          />
          <button
            type="button"
            disabled={ isdisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </div>
        <img src={ Money } alt="money" className="money" />
        { login ? <Redirect to="/carteira" /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmailInfo: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  dispatchEmailInfo: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
