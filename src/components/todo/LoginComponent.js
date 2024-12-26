import React, { useState, useNavigate } from 'react';
export default function LoginComponent() {
  const [username, setUsername] = useState('John Doe');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

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
      navigate(`/welcome/${username}`);
    } else {
      console.log('Login Failed');
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  // function SuccessMessageComponent() {
  //   if (showSuccessMessage)
  //      return <div className='successMessage'>Authenticated Successfully</div>
  //   return
  //   return null;
  // }

  // function ErrorMessageComponent() {
  //   if (showErrorMessage)
  //     return <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>;
  //   return null;
  // }

  return (
    <div className='Login'>
      {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
      {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials.</div>}
      <div className='Login'>
        <h1>Time to study!</h1>
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