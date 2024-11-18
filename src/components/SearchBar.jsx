import { useState } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';

const SearchBar = ({ setSearchedQuery }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <>
            <h1 className='flex items-center justify-center px-2 py-4 text-xl md:p-12 md:text-4xl lg:text-[40px] lg:leading-[3rem] font-gilroy lg:font-ultra tracking-tighter font-bold'>What’s cooking today 🤔? <br />
                Lets find a recipe that make your taste buds dance 😋!
            </h1>

            <div className='flex items-center gap-3 justify-center'>
                <input
                    className='w-1/2 tracking-tighter lg:w-1/3 h-10 rounded-full p-6 font-gilroy font-medium'
                    type="text"
                    placeholder='search your faviorate meals'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className='w-12 h-12 transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105 bg-blue-500 text-white rounded-full font-gilroy font-medium'
                    onClick={onFormSubmit}
                >
                    <i className="ri-search-line"></i>
                </button>
            </div>
        </>
    )
}

export default SearchBar;