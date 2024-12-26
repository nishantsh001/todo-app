import './Todo.css';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export default function TodoApp() {
  return (
    <div className='TodoApp'>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="*" element={<ErrorComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
        </Routes>
        <FooterComponent/> 
      </BrowserRouter>
     
    </div>
  );
}