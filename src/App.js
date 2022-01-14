import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './Components/AppRouter/AppRouter';
import { useActions } from './hooks/useActions';

const App = () => {
  const setUser = useActions();
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUser(true)
    } 
  })
  return (
    <div className='app-wrapper'>
      <AppRouter />
    </div>
  )
}


export default App;
