import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../modules/firebase'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    }
    return (
        <>
            <h1>Login</h1>
            <section>
                <form method="post" >
                    <label>Email:</label>
                    <input type='text' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}></input>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}></input>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </section>
        </>
    )
}

export default Login