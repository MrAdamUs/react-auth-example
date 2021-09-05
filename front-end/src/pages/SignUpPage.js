import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SingUpPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [EmailValue, setEmailValue] = useState('');
  const [PasswordValue, setPasswordValue] = useState('');
  const [ConfirmPasswordValue, setConfirmPasswordValue] = useState('');

  const history = useHistory();

  const onSingUpClicked = async () => {
    alert('onSingUpClicked ');
  };
  return (
    <div className='content-container'>
      <h1>Sing Up</h1>
      {errorMessage && <div className='fail'>{errorMessage}</div>}
      <input
        placeholder='some@gmail.com'
        value={EmailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        placeholder='password'
        type='password'
        value={PasswordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <input
        placeholder='Confirm PasswordValue'
        type='password'
        value={ConfirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
      <hr />
      <button
        disabled={
          !EmailValue ||
          !PasswordValue ||
          PasswordValue !== ConfirmPasswordValue
        }
        onClick={onSingUpClicked}
      >
        Sign Up
      </button>
      <button onClick={() => history.push('/forgot-password')}>
        Forgot your password ?
      </button>
      <button onClick={() => history.push('/login')}>
        Already have an account? Login
      </button>
    </div>
  );
};
