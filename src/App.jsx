import Navbar from './components/Navbar';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AllRecipes from './pages/AllRecipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipes/all" element={<AllRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
