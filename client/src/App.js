import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './components/views/LandingPage/Landing';
import NavBar from "./components/NavBar/NavBar"
import RecipeCards from './components/RecipeCards/RecipeCards';
import Detail from './components/RecipeCards/Detail/Detail';
import CreateRecipe from './components/views/CreateRecipe/CreateRecipe';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTypeDiets, getAllRecipes } from './redux/actions';


// import data from './data';
// import dataDiets from './dataDiets';
// const fakeRecipes = data
// const fakeDiets = dataDiets


// const ITEMS_PER_PAGE = 3

function App() {

  const location = useLocation()
  // const dispatch = useDispatch()
  // const { 
  //   allRecipes,
  //   recipes, 
  //   allDiets } = useSelector((state) => state)
  
  
  // useEffect(() => {
  //   dispatch(getAllRecipes())
  //   dispatch(getTypeDiets())
  //   console.log("dispatch de app.js");
  // }, [dispatch])
  

  //fakedatas
  // const allRecipes = fakeRecipes
  // const allDiets = fakeDiets

  // const [ recipesCards, setRecipesCards ] = useState(recipes)
  // const [ items, setItems ] = useState( [...recipes].splice(0, ITEMS_PER_PAGE))
  // const [ currentPage, setcurrentPage] = useState(0)

  // const nextHandler = () => {
  //   const totalElements = recipesCards.length
  //   const nextPage = currentPage + 1
  //   const firstIndex = nextPage * ITEMS_PER_PAGE
  //   if (firstIndex > totalElements) return

  //   setItems([...recipesCards].splice(firstIndex, ITEMS_PER_PAGE))
  //   setcurrentPage(nextPage)
  // }

  // const prevHandler = () => {
  //   const prevPage = currentPage - 1
  //   if ( prevPage < 0) return
  //   const firstIndex = prevPage * ITEMS_PER_PAGE

  //   setItems([...recipesCards].splice(firstIndex, ITEMS_PER_PAGE))
  //   setcurrentPage(prevPage)
    
  // }

  return (
    <div className="App">
      {location.pathname !=="/" && <NavBar/>}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/recipes' element={<RecipeCards 
          // allRecipes={allRecipes}
          // recipes={recipes}
          // allDiets={allDiets}
          // // prevHandler={prevHandler} 
          // // nextHandler={nextHandler} 
          // // currentPage={currentPage}
          // totalPages={totalPages} //totalPages = total de paginas con 9 recetas
          // numPage={numPage} //numPage = pagina actual
        />}/>
        <Route path='/recipes/detail/:id' element={<Detail/>} />
        <Route path='/recipes/createrecipe' element={<CreateRecipe/>} /> 
        {/* { allDiets={allDiets}} */}
      </Routes>
    </div>
  );
}

export default App;
