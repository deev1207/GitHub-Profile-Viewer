import { Routes, Route, useLocation, Navigate   } from 'react-router-dom';
import './App.css';
import Repos from './Components/Repos/Repos';
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import { useState } from 'react';

function App() {
  const [username, setUserName] = useState()
  const [redirectPath, setRedirectPath] = useState(null);
  console.log(username);
  function onSubmit(query){
    setUserName(query)
    setRedirectPath('/profile');

  }
  return(
    <>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Search onSubmit={onSubmit} />}  /> */}
          <Route path="/repos" element={<Repos username={username}/>}  />
          <Route path="/profile" element={<Profile  setRedirectPath={setRedirectPath} username={username}/>}  />
          <Route path="/" element={redirectPath ? <Navigate to="/profile" /> : <Search onSubmit={onSubmit} />} />
 
        </Routes>
    </>
  )
}

export default App;
