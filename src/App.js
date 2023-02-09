import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  const dataUser = useSelector(state => state.user.account);

  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
