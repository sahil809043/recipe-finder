import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingComponent from '../components/LoadingComponent';

function AllRecipes() {
    const [uniqueMeals, setUniqueMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const categories = ['Dessert', 'Miscellaneous', 'Pasta', 'Seafood', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Seafood', 'Chicken'];

    useEffect(() => {
        const fetchAllRecipes = async () => {
            try {
                const mealsSet = new Set();

                for (let category of categories) {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                    const meals = response.data.meals;

                    meals.forEach(meal => {
                        if (meal !== null) {
                            mealsSet.add(JSON.stringify(meal));
                        }
                    });
                }

                const uniqueMealsArray = Array.from(mealsSet).map(meal => JSON.parse(meal));
                const limitedMealsArray = uniqueMealsArray.slice(0, 100);
                setUniqueMeals(limitedMealsArray);
            } catch (error) {
                setError('Failed to fetch recipes. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchAllRecipes();
    }, []);

    return (
        <>
            <h1 className='flex items-center justify-center text-7xl font-bold font-gilroy tracking-tighter p-4'>All Recipes</h1>

            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <LoadingComponent />
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center h-96">
                    <h2 className="text-xl font-gilroy font-semibold text-red-500">
                        {error}
                    </h2>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            ) : (
                <div className='p-4 grid grid-cols-2 lg:grid-cols-4 gap-6'>
                    {uniqueMeals.map(meal => (
                        <div key={meal.idMeal} className="product flex-shrink-0">
                            <div className="product-container">
                                <div className="mt-6 w-52 md:w-96 bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="relative h-56">
                                        <img
                                            src={meal.strMealThumb}
                                            alt={meal.strMeal}
                                            className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-xl font-semibold font-gilroy tracking-tighter text-gray-800 mb-2">{meal.strMeal}</h5>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <button className="bg-blue-500 transition-all font-gilroy font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600 duration-700 ease-in-out hover:scale-110">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default AllRecipes;
