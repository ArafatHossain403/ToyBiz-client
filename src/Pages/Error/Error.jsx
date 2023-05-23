import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className='w-full mx-auto'>
            <img src="https://cdn.dribbble.com/users/1291613/screenshots/3198569/media/8c9e6c16260eab836fd6f2891e2f35e6.png?compress=1&resize=800x600&vertical=top" alt="" />
            <div className="text-center"><Link to={'/'}><button className="btn btn-wide text-light-800">Back to home</button></Link></div>
        </div>
        
    );
};

export default Error;