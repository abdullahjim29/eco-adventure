import { RotatingLines } from 'react-loader-spinner'
const LoadingSpinner = () => {
    return (
        <div className='min-h-[500px] flex justify-center'>
        <RotatingLines
		height="80"
		width="80"
		radius="9"
		strokeColor="#583CEA"
		ariaLabel="loading"
		wrapperStyle
		wrapperClass
	  />
        </div>
    );
};

export default LoadingSpinner;