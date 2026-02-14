import { useEffect } from 'react';
import { Auth } from '../pages/Auth'
import {  Routes, Route } from 'react-router-dom';
import { PersonalAccount } from '../pages/PersonalAccount';
import News from '../pages/News';

export const RootRoutes = ({ handleChangeStateLogin, isLogin }) => {

    return (
      <Routes>
        {!isLogin && <Route path='/auth' element={<Auth handleChangeStateLogin={handleChangeStateLogin} isLogin = {isLogin} />} />}
        {isLogin && <Route path='/profile' element={<PersonalAccount />} />}
        <Route path="/*" element={<News isLogin={isLogin}/>} />
      </Routes>
    )
}

