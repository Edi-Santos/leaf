import React from 'react';
import PropTypes from 'prop-types';

function Password({ value, onChange }) {
  return (
    <label htmlFor='login-password'>
      Senha
      <input
        type='password'
        id='login-password'
        value={value}
        onChange={onChange}
        placeholder='********'
      />
    </label>
  );
}

Password.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Password;
