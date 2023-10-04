import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../modules/firebase'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    }
    return (
        <>
            <h1>Register</h1>
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
                    <button type="submit" onClick={handleSubmit}>Register</button>
                </form>
            </section>
        </>
    )
}

export default Register