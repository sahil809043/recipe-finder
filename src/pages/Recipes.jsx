import { useEffect, useState } from "react";
import Search from "../components/SearchBar.jsx";
import RecipeList from "../components/RecipeList.jsx";
import { getRecipes } from "../services/services.js";

const Recipes = () => {
    const [searchedQuery, setSearchedQuery] = useState(null);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getSearchedResult();
    }, [searchedQuery])

    const getSearchedResult = async () => {
        let result = await getRecipes(searchedQuery);
        if (result && result.recipes) {
            setRecipes(result.recipes);
        } else {
            setRecipes([]);
        }
    }

    return (
        <>
            <Search setSearchedQuery={setSearchedQuery} />
            <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </>
    )
}

export default Recipes;