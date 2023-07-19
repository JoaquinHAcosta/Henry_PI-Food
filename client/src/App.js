import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/views/LandingPage/Landing';
import NavBar from "./components/NavBar/NavBar"
import RecipeCards from './components/RecipeCards/RecipeCards';
import Detail from './components/RecipeCards/Detail/Detail';
import CreateRecipe from './components/views/CreateRecipe/CreateRecipe';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !=="/" && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/recipes' element={<RecipeCards/>}/>
        <Route path='/recipes/detail/:id' element={<Detail/>} />
        <Route path='/recipes/createrecipe' element={<CreateRecipe/>} /> 
      </Routes>
    </div>
  );
}

export default App;
