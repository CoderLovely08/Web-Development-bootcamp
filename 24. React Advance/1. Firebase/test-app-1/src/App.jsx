import './App.css'
import Register from './components/Authentication/Register'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Authentication/Login';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./modules/firebase";
import { useState, useEffect } from "react";

const App = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in");
        setUser(user)
      }
      else {
        console.log("Logged out");
        setUser(null);
      }
    });
  }, []);

  if (user != null) return (
    <div>
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )

  return (
    <>
      <Router>
        <h1>Authentication</h1>
        <Link to='/register'>Register</Link>
        <br></br>
        <Link to='/Login'>Login</Link>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App