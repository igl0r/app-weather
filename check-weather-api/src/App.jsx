
import { useState, useEffect } from 'react';
import { Auth } from './pages/Auth';
import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RootRoutes } from './routes/index';

function App() {
  //init state false
  const [isLogin, setIsLogin] = useState(false);

  console.log('isLogin', isLogin);
  const handleChangeStateLogin = (newStateAuth) => {
    setIsLogin(newStateAuth);
  }


  return (
    <BrowserRouter>
      <RootRoutes handleChangeStateLogin={handleChangeStateLogin} isLogin={isLogin} />
    </BrowserRouter>
  );
}

export default App;
