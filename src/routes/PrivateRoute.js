import { Navigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function PrivateRoute(props) {
    if (!localStorage.getItem("token")) {
        return (
            <Alert variant="danger" className='mt-3'>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You don't have permission to access this route.
                </p>
            </Alert>
        );
    }

    return (
        <>
            {props.children}
        </>
    );
}

export default PrivateRoute;