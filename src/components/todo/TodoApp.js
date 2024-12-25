import React, { useState } from 'react';
import './Todo.css';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
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

function WelcomeComponent() {
  // const params =  useParams();
  // console.log(params.username);
  const { username } = useParams();
  console.log(username);
  return (
    <div className='Welcome'>
      <h1>Welcome {username}</h1>
      Welcome Component
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className='ErrorComponent'>
      <h1>we are working really hard!</h1>
      <div>
        Apologies for 404. reach out our team.....
      </div>
    </div>
  );
}


function ListTodosComponent() {

  const todos = [
    { id: 1, description: 'Learn AWS' },
    { id: 2, description: 'Learn Full Stack' },
    { id: 3, description: 'Learn Devops' },
  ]

  return (
    <div className='ListTodosComponent'>
      <h1>List Todos</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                </tr>
              )
              )
            }

          </tbody>
        </table>
      </div>
    </div>

  );
}
