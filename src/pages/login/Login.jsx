import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <form>
      <h2>LOGIN</h2>

      <label htmlFor='login-e-mail'>
        E-mail
        <input
          type='email'
          id='login-e-mail'
          value=''
          placeholder='exemplo@email.com'
        />
      </label>

      <label htmlFor='login-password'>
        Senha
        <input
          type='password'
          id='login-password'
          value=''
          placeholder='********'
        />
      </label>

      <div>
        <button type='button'>ENTRAR</button>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    </form>
  );
}

export default Login;
