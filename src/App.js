
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_default_data } from './redux/state_slices/counter/counterSlice';
import { onLoginSuccess, onLogout } from './redux/state_slices/admin/adminSlice';

//include comnponents
import Logo from './components/frontend/Logo'; 
import Menu from './components/frontend/Menu'; 
import Home from './components/frontend/pages/Home'; 
import Login from './components/frontend/pages/Login'; 
import Logout from './components/frontend/pages/Logout'; 
import Page from './components/frontend/pages/Page'; 
import Footer from './components/frontend/Footer'; 
import Admin from './components/backend/Admin'; 
function App() {
  // set default data
  //let default_objects = useSelector((state) => state.counter.value.data);

  const dispatch = useDispatch();
  //  get admin data
  useEffect(()=>{
    dispatch(add_default_data()); 
    
    if (localStorage.getItem('islogin') === 'login') {
      dispatch(onLoginSuccess());
    }
  }, [dispatch])
 
  const isAdminLogin = useSelector((state) => state.admin.value.isAdmin);

  //Add default value for data or site objects

  return (
    <Router>
      <div className="App">
        <header className="site-header">
          <Logo />
          <Menu />
        </header>
        <Switch>
          <Route path="/login">
            <Login  />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/:page">
            <Page />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          
        </Switch>
        <Footer/>
        {isAdminLogin && <Admin/>}
        
        
      </div>
    </Router>
  );
}

export default App;
