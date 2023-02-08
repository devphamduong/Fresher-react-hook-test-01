import { useState } from 'react';
import './Login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Login</div>
                <div className="text">Email or Username</div>
                <input type={'text'} value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email or Username' />
                <input type={'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
                <button className={email && password ? 'active' : ''} disabled={email && password ? false : true}>Login</button>
                <div className='back'>
                    <i className='fa-solid fa-angles-left'></i> Go back
                </div>
            </div>
        </>
    );
}

export default Login;;