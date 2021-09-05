import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [EmailValue, setEmailValue] = useState('');
  const [PasswordValue, setPasswordValue] = useState('');

  const history = useHistory();

  const onLoginClicked = async () => {
    alert('Login Clicked');
  };
  return (
    <div className='content-container'>
      <h1>Log In</h1>
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
      <hr />
      <button disabled={!EmailValue || !PasswordValue} onClick={onLoginClicked}>
        Log In
      </button>
      <button onClick={() => history.push('/forgot-password')}>
        Forgot your password ?
      </button>
      <button onClick={() => history.push('/signup')}>
        Dont't have an account? Sing Up{' '}
      </button>
    </div>
  );
};
