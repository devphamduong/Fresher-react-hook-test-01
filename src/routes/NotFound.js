import Alert from 'react-bootstrap/Alert';

function NotFound() {
    return (
        <>
            <Alert variant="danger" className='mt-3'>
                <Alert.Heading><strong>404</strong>. That's an error</Alert.Heading>
                <p>
                    The requested URL {window.location.pathname} was not found on this server.
                </p>
            </Alert>
        </>
    );
}

export default NotFound;