import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/services.js";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let result = await getRecipe(recipeId)
            if (result && result.recipe) {
                setRecipe(result.recipe);
            }
        }
        getData();
    }, [])

    return (
        Object.keys(recipe).length > 0 ?
            <>
                <div className="p-4 md:p-12 flex-1 md:flex gap-10">
                    <div className="left md:w-1/2">
                        <Link
                            className="hidden md:flex items-center justify-center w-20 h-20 text-4xl bg-red-700 rounded-full transition-all duration-300 ease-in-out font-semibold hover:scale-105 hover:text-black"
                            to={`/recipes`}>
                            <i class="ri-arrow-left-line"></i>
                        </Link>

                        <h1 className="block md:hidden text-3xl font-gilroy font-bold underline">
                            Recipe Details
                        </h1>

                        <img
                            className="mt-10 w-full h-96 object-cover"
                            alt="Recipe"
                            src={recipe.image_url} />

                        <h3 className="mt-2 w-full flex items-center justify-center bg-black text-white font-ultra font-bold text-2xl p-4 rounded-full">{recipe.title}</h3>

                        <div className="mt-12 flex items-center justify-evenly">
                            <button className="bg-gray-700 hover:bg-black lg:w-1/3 flex items-center justify-center transition duration-500 ease-in-out text-sm font-gilroy font-semibold text-white hover:text-white px-2 py-2 tracking-wide rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
                                <a href={recipe.publisher_url} target="_blank">Publisher Webpage</a>
                            </button>
                            <button className="bg-gray-700 hover:bg-black lg:w-1/3 flex items-center justify-center transition duration-500 ease-in-out text-sm font-gilroy font-semibold text-white hover:text-white px-2 py-2 tracking-wide rounded-lg shadow-md hover:shadow-lg transform hover:scale-105">
                                <a href={recipe.source_url} target="_blank">Recipe URL</a>
                            </button>
                        </div>
                    </div>

                    <div className="right mt-10 md:w-1/2">

                        <h1 className="text-3xl font-gilroy font-bold flex items-center justify-center mb-5 md:mb-10">Ingredients Required</h1>
                        <div className="bg-white rounded-lg shadow-md p-4 mt-2 md:mt-4">
                            <ul className="divide-y divide-gray-200">
                                {recipe && recipe.ingredients.map((data, index) => (
                                    <li
                                        key={index}
                                        className="py-4 px-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
                                    >
                                        <h5 className="text-sm font-medium text-gray-700">{data}</h5>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>
            </> : null
    )
}

export default RecipeDetails;