import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Email from './components/Email';
import Password from './components/Password';

import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    const { type } = target;

    type === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <main className='login-container'>
      <form className='login-form'>
        <h2>LOGIN</h2>

        <section className='login-input-text'>
          <Email value={email} onChange={handleChange} />
          <Password value={password} onChange={handleChange} />
        </section>

        <div>
          <button type='button'>ENTRAR</button>
          <Link to={'/'}>VOLTAR</Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
