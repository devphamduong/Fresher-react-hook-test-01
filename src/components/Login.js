import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoading = useSelector(state => state.user.isLoading);
    const account = useSelector(state => state.user.account);

    useEffect(() => {
        if (account && account.auth) {
            navigate('/');
        }
    }, [account]);

    const handleLogin = async () => {
        if (!email.trim() && !password) {
            toast.error("Email/Password is required!");
            return;
        }
        dispatch(doLogin(email, password));
    };

    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Login</div>
                <div className="text">Email or Username ( eve.holt@reqres.in )</div>
                <input type={'text'} value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email or Username' />
                <input type={'password'} value={password} onChange={(event) => setPassword(event.target.value)} onKeyDown={(event) => handleKeyDown(event)} placeholder='Password' />
                <button className={email && password && !isLoading ? 'active' : ''} disabled={email && password && !isLoading ? false : true} onClick={() => handleLogin()}>
                    {isLoading ? <i className='fa-solid fa-sync fa-spin'></i> : ''}&nbsp;Login
                </button>
                <div className='back'>
                    <i className='fa-solid fa-angles-left'></i> <span onClick={() => navigate('/')}>&nbsp;Go back</span>
                </div>
            </div>
        </>
    );
}

export default Login;