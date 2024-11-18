import { logo } from '../constants/constants.js';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <div className='flex items-center justify-between p-4'>
                <img className='w-20 h-20 border-2 border-black rounded-full transition duration-1000 ease-in-out shadow-md hover:shadow-2xl transform hover:scale-110 hover:rotate-[360deg]' src={logo} />
                <div className='flex items-center gap-5 font-ultra'>
                    <Link className='bg-black text-white rounded-lg py-2 px-10 font-semibold text-md transition duration-500 ease-in-out hover:scale-110' to="/">Home</Link>
                    <Link className='bg-black text-white rounded-lg py-2 px-10 font-semibold text-md transition duration-500 ease-in-out hover:scale-110' to="/recipes">Recipes</Link>
                </div>
            </div>
            <hr className="border-gray-900 border" />
        </>
    )
}

export default Navbar;