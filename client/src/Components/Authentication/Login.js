import React, { useState } from 'react';
import Menubar from '../Navbar/Menubar';

import './Login.css';

const Login = async () => {
    const [emailRef, setEmailRef] = useState(false);
    const [passwordRef, setPasswordRef] = useState(false);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = () => {
        const responseData = fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/user/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        console.log(responseData);
    }

    return (
        <div className='auth'>
            <div className='login'>
                <Menubar backgroundClr="#305B98" />
                <div className='login__container'>
                    <h1 className="login_heading">LOGIN</h1>
                    <form className='login_form'>
                        <div className="loginForm_inputContainer input_container">
                            <label htmlFor='email' className={(emailRef) ? ("activeEmail") : ("")}>Email</label>
                            <input name='email' id='email' type='email' placeholder='Enter email' required={true} onChange={e => setEmail(e.target.value)} onFocus={() => (setEmailRef(true))} onBlur={() => (setEmailRef(false))} value={email} />
                        </div>
                        <div className="loginForm_inputContainer input_container">
                            <label htmlFor='password' className={(passwordRef) ? ("activePassword") : ("")}>Password</label>
                            <input name='password' id='password' type='password' placeholder='Enter password' required={true} onChange={e => setPassword(e.target.value)} onFocus={() => (setPasswordRef(true))} onBlur={() => (setPasswordRef(false))} value={password} />
                        </div>
                        <button type='button' onClick={submitHandler} className="login__button" disabled={!email || !password}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;