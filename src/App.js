import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authorization from './Components/Authorization/Authorization';
import Testing from './Components/Testing/Testing';
import Registration from './Components/Registration/Registaration';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Routes>
            <Route path="/testing"
              element={<Testing/> } />
            <Route path="/authorization"
              element={<Authorization 
                store={this.props.store}
              />} />
            <Route path="/registration"
              element={<Registration />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
