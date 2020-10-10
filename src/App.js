import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilPhoto'
import FullName from './Component/Profile/FullName'
import Adress from './Component/Profile/Adress'
import "./App.css"
function App() {
    return (
    <div className="App">
      <ProfilePhoto />
      <div><FullName />
      <Adress />
      </div>
    </div>
  );
  
}

export default App;
