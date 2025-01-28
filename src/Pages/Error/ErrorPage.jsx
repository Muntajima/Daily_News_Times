import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page" className='flex flex-col justify-center items-center mt-44'>
            <h1 className='text-2xl font-bold mb-8'>Oops!</h1>
            <h1 className='text-4xl font-bold mb-8 text-red-700'>404</h1>
            <p className='mb-4 '>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className='text-gray-500'>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;