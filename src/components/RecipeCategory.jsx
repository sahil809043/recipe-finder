import React, { useState, useEffect } from 'react';
import { getRecipesByName, getRecipeByCategory } from '../services/services';
import LoadingComponent from '../components/LoadingComponent';

function RecipeCategory() {
    const [categories, setCategories] = useState({
        Indian: [],
        Breakfast: [],
        Vegetarian: [],
        Dessert: [],
    });

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const categoryDetails = [
        { title: 'Indian Desi Spices 👌', api: getRecipesByName, key: 'Indian' },
        { title: 'Healthy Breakfast 💪', api: getRecipeByCategory, key: 'Breakfast' },
        { title: 'Vegetarian Food 🥗', api: getRecipeByCategory, key: 'Vegetarian' },
        { title: 'Desserts 🤤', api: getRecipeByCategory, key: 'Dessert' },
    ];

    useEffect(() => {
        const fetchCategories = async () => {
            const updatedCategories = { ...categories };

            try {
                for (const { api, key } of categoryDetails) {
                    const result = await api(key);
                    if (result?.meals) {
                        updatedCategories[key] = result.meals;
                    }
                }
                setCategories(updatedCategories);
            } catch (err) {
                setError('Failed to fetch recipes. Please try again later.'); // Set error message
            } finally {
                setIsLoading(false); // Stop loading regardless of success or failure
            }
        };

        fetchCategories();
    }, []);

    const MealCard = ({ meal }) => (
        <div key={meal.idMeal} className="product flex-shrink-0">
            <div className="product-container">
                <div className="mt-6 w-96 bg-white rounded-lg shadow-lg overflow-hidden">
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
    );

    return (
        <section className="middleSection overflow-x-hidden mt-2 md:mt-10">
            {isLoading ? (
                <LoadingComponent />
            ) : error ? (
                <div className="flex items-center justify-center mt-10">
                    <h2 className="text-xl font-gilroy font-semibold text-red-500">
                        {error}
                    </h2>
                </div>
            ) : (
                categoryDetails.map(({ title, key }) => (
                    <div key={key} className="my-10 font-gilroy">
                        <h1 className="text-5xl px-4 md:px-10 font-gilroy tracking-tighter md:font-bold font-semibold mt-10">
                            {title}
                        </h1>
                        <div className="products pl-4 md:pl-10 w-full overflow-x-auto whitespace-nowrap flex gap-4">
                            {categories[key].map((meal) => (
                                <MealCard key={meal.idMeal} meal={meal} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </section>
    );
}

export default RecipeCategory;
