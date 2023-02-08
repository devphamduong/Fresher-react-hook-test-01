import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../services/UserService';
import './Login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate('/');
        }
    }, []);

    const handleLogin = async () => {
        if (!email && !password) {
            toast.error("Email/Password is required!");
            return;
        }
        setIsLoading(true);
        let res = await login(email, password);
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            navigate('/');
        } else {
            if (res && res.status === 400) {
                toast.error(res.data.error);
            }
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Login</div>
                <div className="text">Email or Username ( eve.holt@reqres.in )</div>
                <input type={'text'} value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email or Username' />
                <input type={'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' />
                <button className={email && password && !isLoading ? 'active' : ''} disabled={email && password && !isLoading ? false : true} onClick={() => handleLogin()}>
                    {isLoading ? <i className='fa-solid fa-sync fa-spin'></i> : ''}&nbsp;Login
                </button>
                <div className='back'>
                    <i className='fa-solid fa-angles-left'></i> Go back
                </div>
            </div>
        </>
    );
}

export default Login;;