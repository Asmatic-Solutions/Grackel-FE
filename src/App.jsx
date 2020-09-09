import React from 'react';
import LoginPage from "./components/Auth/Login/LoginPage"
import AddPage from "./components/Homepage/AddPage"
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">Grackel</div>
      <AddPage></AddPage>
      {/* <LoginPage></LoginPage> */}
      
    </div>
  );
}

export default App;
