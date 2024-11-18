import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';

const RecipeListItem = ({ recipe }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className="product flex-shrink-0">
            <div className="product-container">
                <div className="mt-6 w-96 bg-white rounded-lg shadow-lg overflow-hidden h-[400px]">
                    <div className="relative h-56">
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                                <LoadingComponent />
                            </div>
                        )}
                        <img
                            src={recipe.image_url}
                            alt="card-image"
                            className={`w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105 ${!loading ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={handleImageLoad}
                        />
                    </div>
                    <div className="p-4">
                        <div className='flex items-center justify-between'>
                            <h5 className="text-xl font-semibold text-gray-800 mb-2 font-gilroy">{recipe.title}</h5>
                            <Link
                                to={`/recipes/${recipe.recipe_id}`}
                                className="bg-blue-600 hover:bg-blue-800 transition duration-500 ease-in-out text-sm font-semibold text-white hover:text-white px-2 py-2 tracking-tight rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                            >
                                <i className="mr-2 text-lg ri-information-line"></i>
                                Details
                            </Link>
                        </div>
                        <p className="text-gray-600 font-ultra">{recipe.publisher}</p>
                    </div>
                    <div className="p-4 flex gap-5 justify-around mt-6">
                        <Link
                            to={recipe.source_url}
                            className="bg-gray-700 hover:bg-black w-2/3 flex items-center justify-center transition duration-500 ease-in-out text-sm font-gilroy font-semibold text-white hover:text-white px-2 py-2 tracking-wide rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Check Recipe
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecipeListItem;
