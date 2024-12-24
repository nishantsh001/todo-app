import React, { useState } from 'react';
import './Todo.css';

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      Todo Management Application
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState('John Doe');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  function handleSubmit() {
    if (username === 'John Doe' && password === 'password') {
      console.log('Login Successful');
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    } else {
      console.log('Login Failed');
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  function SuccessMessageComponent() {
    if (showSuccessMessage)
      return <div className='successMessage'>Authenticated Successfully</div>;
    return null;
  }

  function ErrorMessageComponent() {
    if (showErrorMessage)
      return (
        <div className='errorMessage'>
          Authentication Failed. Please check your credentials.
        </div>
      );
    return null;
  }

  return (
    <div className='Login'>
      <SuccessMessageComponent />
      <ErrorMessageComponent />
      <div className='Login'>
        <div>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type='button' name='login' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className='Welcome'>Welcome Component</div>;
}
