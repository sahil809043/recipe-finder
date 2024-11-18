import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RecipeCategory from '../components/RecipeCategory'

const Home = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_1280.jpg",
        "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.webp?b=1&s=612x612&w=0&k=20&c=5F4SvP5LPjDtjDqohFrTSV1qLrjxG1Edniu4I9WzM8c="
    ];

    const handleImageChange = (direction) => {
        setCurrentImage((prevImage) => {
            const newIndex = (prevImage + direction + images.length) % images.length;
            return newIndex;
        });
    };


    return (
        <>
            <section className='banner w-full lg:flex lg:flex-row-reverse mt-5'>
                <div className="relative w-full lg:w-1/2 lg:h-full">
                    <img
                        className="object-cover object-center w-full h-96"
                        src={images[currentImage]}
                        alt="Displayed"
                    />
                    <div className="absolute bottom-2 right-2 flex space-x-4 text-black">
                        <i
                            className="ri-arrow-left-line text-5xl border-2 rounded-full border-black transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                            onClick={() => handleImageChange(-1)}
                        ></i>
                        <i
                            className="ri-arrow-right-line text-5xl border-2 rounded-full border-black transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
                            onClick={() => handleImageChange(1)}
                        ></i>

                    </div>
                </div>

                <div className="information px-4 py-7 w-full lg:w-1/2 lg:flex lg:flex-col lg:justify-between">
                    <div className="upper">
                        <h1 className='text-2xl md:text-4xl text-nowrap lg:text-4xl lg:leading-[3rem] font-gilroy text-[black] font-semibold leading-[2rem]'>Get the <span className="text-3xl md:text-5xl tracking-tighter text-amber-700 font-ultra">BEST Recipes</span></h1>
                        <h1 className='text-2xl md:text-4xl text-nowrap lg:text-4xl lg:leading-[3rem] font-gilroy text-[black] font-semibold leading-[2rem] capitalize'><span className="text-3xl md:text-5xl tracking-tighter text-amber-700 font-ultra">from every </span>corner of the World</h1>
                        <h5 className='font-ultra text-md lg:font-bold lg:tracking-wider font-medium leading-tight tracking-tighter mt-5'>Discover recipes, satisfy cravings, one ingredient at a time </h5>
                        <div className="flex items-center justify-center mt-10">
                            <Link
                                to={`/recipes`}
                                className='flex items-center justify-center gap-5 bg-amber-700 text-black shadow-md transition duration-1000 ease-in-out hover:shadow-lg transform hover:scale-110 rounded-lg font-gilroy px-5 py-3 mt-3 h-[100px] w-[400px] text-4xl font-bold'>
                                <i className="ri-restaurant-2-line"></i>
                                Find Recipes
                                <i className="ri-bread-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='middleSection overflow-x-hidden mt-2 md:mt-2'>
                <div className='heading px-3 py-10 md:px-10'>
                    <h1 className='text-5xl md:text-[100px] font-gilroy font-bold md:font-bold md:leading-[5rem] tracking-tight leading-[2rem]'>Explore</h1>
                    <h1 className='text-2xl md:text-5xl font-gilroy font-bold md:font-semibold capitalize tracking-tighter'><span className='font-bold text-4xl md:text-6xl text-gray-600'>Category </span>of Recipes we have✌️</h1>
                </div>

                <RecipeCategory />

            </section>

            <div className="mt-10 flex items-center justify-center">
                <Link
                    to={`/recipes/all`}
                    className="relative border-black border-4 rounded-lg bg-red-400 px-6 py-12 w-full sm:w-4/5 md:w-3/4 text-3xl sm:text-4xl md:text-6xl font-grotesk lg:tracking-wide font-bold inline-flex items-center justify-start pl-6 pr-10 sm:pl-8 sm:pr-12 md:pl-8 md:pr-16 overflow-hidden text-black transition-all duration-1000 ease-in-out hover:pl-8 hover:pr-6 sm:hover:pl-10 sm:hover:pr-8 md:hover:pl-12 md:hover:pr-10 group tracking-tighter"
                >
                    <span
                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-1000 ease-in-out bg-[#932b2b] group-hover:h-full">
                    </span>
                    <span
                        className="absolute right-0 pr-10 sm:pr-16 md:pr-20 duration-1000 ease-out group-hover:translate-x-20 sm:group-hover:translate-x-32 md:group-hover:translate-x-40">
                        <svg
                            className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </span>
                    <span
                        className="absolute left-0 pl-1 sm:pl-2 md:pl-4 -translate-x-20 sm:-translate-x-32 md:-translate-x-40 group-hover:translate-x-10 sm:group-hover:translate-x-20 md:group-hover:translate-x-40 ease-out duration-1000">
                        <svg
                            className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </span>
                    <span
                        className="relative flex items-center justify-center w-full text-left transition-colors duration-300 ease-in-out group-hover:text-gray-400"
                    >
                        Explore All Our Dishes
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Home;