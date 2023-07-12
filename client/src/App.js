import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/views/LandingPage/Landing';
import NavBar from "./components/NavBar/NavBar"
import RecipeCards from './components/RecipeCards/RecipeCards';
import Filters from './components/NavBar/Filters/Filters';
import Detail from './components/RecipeCards/Detail/Detail';
import CreateRecipe from './components/views/CreateRecipe/CreateRecipe';
import data from './data';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !=="/" && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<RecipeCards data={data}/>} />
        <Route path='/home' element={<Filters/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/createrecipe' element={<CreateRecipe/>} />
      </Routes>
    </div>
  );
}

export default App;
