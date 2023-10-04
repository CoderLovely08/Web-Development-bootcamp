import './App.css'
import Register from './components/Authentication/Register'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Authentication/Login';

const App = () => {
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