import RecipeListItem from "./RecipeListItem";
import RecipeCategory from "./RecipeCategory";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipes, searchedQuery }) => {
    const navigate = useNavigate();

    return (
        <>
            {searchedQuery === null ? (
                <RecipeCategory />
            ) : (
                <div>
                    <div className="flex items-center justify-center mt-10">
                        <h1 className="text-3xl lg:text-5xl font-gilroy font-bold capitalize">
                            {`Showing results for ${searchedQuery}`}
                        </h1>
                    </div>
                    {recipes && recipes.length === 0 ? (
                        <div className="flex items-center justify-center mt-10">
                            <h2 className="text-xl font-gilroy font-semibold text-gray-500">
                                No results found for "{searchedQuery}"
                            </h2>
                        </div>
                    ) : (
                        <div className="mt-5 lg:mt-10 p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {recipes &&
                                recipes.map((recipe) => (
                                    <RecipeListItem key={recipe.id} recipe={recipe} />
                                ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default RecipeList;
