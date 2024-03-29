# Firebase Tutorials with React

### 1. Connecting your webapp with firebase

- Create a firebase project and connect your web app using the firebase sdk

```bash
npm i firebase
# install the firebase sdk
```

- Create a config file in your project directory _firebase.js_

```javascript
import { initializeApp } from "firebase";

const configOptions = {
  // Options...
};

export const app = initializeApp(configOptions);
```

### 2. Authentication using Firebase

- Create an authentication provider in the firebase console, I used the basic email and password one
  [docs](https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0)

```jsx
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// the app is our app instance which we used above to connect to firebase
// Create an instance of auth using the getAuth() method
const auth = getAuth(app);

// Pass the auth instance along with email and password
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user);
    alert("Registration Succesfull!");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
```

- Similarly to use sign in the user use the **signUserWithEmailAndPassword()** method

```jsx
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    alert("Login Successful!");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    alert("Login Rejected!");
  });
```

- Here's the complete code for both **Registration** and **Login**

```jsx
// Register Component
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../modules/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        alert("Registration Succesfull!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <>
      <h1>Register</h1>
      <section>
        <form method="post">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
```

```jsx
// Login Component
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../modules/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Login Successful!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Login Rejected!");
      });
  };
  return (
    <>
      <h1>Login</h1>
      <section>
        <form method="post">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
```

### 3. Session Management

- To manage the user login and logout session use the following snippet

```jsx
/*
- onAuthStateChanged() this method tells us whether the user is logged in or not
- signOut() this method is used to sign out a user
*/
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// This takes 2 params
// @param - auth object
// @param - callback function
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in");
  } else {
    console.log("Logged out");
  }
});

const handleSignOut = () => {
  signOut(auth);
};
```

- Complete Code

```jsx
import "./App.css";
import Register from "./components/Authentication/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Authentication/Login";
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
        setUser(user);
      } else {
        console.log("Logged out");
        setUser(null);
      }
    });
  }, []);

  if (user != null)
    return (
      <div>
        <h1>Hello {user.email}</h1>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    );

  return (
    <>
      <Router>
        <h1>Authentication</h1>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/Login">Login</Link>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
```
