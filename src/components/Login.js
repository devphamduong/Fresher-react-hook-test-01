import { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../services/UserService';
import './Login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email && !password) {
            toast.error("Email/Password is required!");
            return;
        }
        let res = await login(email, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token);
        }
    };

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Login</div>
                <div className="text">Email or Username</div>
                <input type={'text'} value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email or Username' />
                <input type={'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
                <button className={email && password ? 'active' : ''} disabled={email && password ? false : true} onClick={() => handleLogin()}>Login</button>
                <div className='back'>
                    <i className='fa-solid fa-angles-left'></i> Go back
                </div>
            </div>
        </>
    );
}

export default Login;;