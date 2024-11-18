import axios from 'axios';
import { API_URL, API_URL_BY_AREA, API_URL_BY_CATEGORY} from '../constants/constants';

export const getRecipes = async (searchedQuery) => {
    try {
        let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const getRecipe = async (searchedQuery) => {
    try {
        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const getRecipesByName = async (query) => {
    try {
        let response = await axios.get(`${API_URL_BY_AREA}?a=${query}`);
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const getRecipeByCategory = async (query) => {
    try {
        let response = await axios.get(`${API_URL_BY_CATEGORY}?c=${query}`);
        return response.data;
    } catch (error) {
        return error.response
    }
}