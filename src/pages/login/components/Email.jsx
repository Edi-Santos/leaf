import React from 'react';
import PropTypes from 'prop-types';

function Email({ value, onChange }) {
  return (
    <label htmlFor='login-e-mail'>
      E-mail
      <input
        type='email'
        id='login-e-mail'
        value={value}
        onChange={onChange}
        placeholder='exemplo@email.com'
      />
    </label>
  );
}

Email.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Email;
