import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound";
import {Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Detalle from "./components/pages/Detalle"
import PeliculasPopulares from "./components/pages/PeliculasPopulares";
import PeliculasRecomendadas from "./components/pages/PeliculasRecomendadas";
import SearchResults from "./components/pages/SearchResults";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        {/* {Cuando cada uno cree su componente y lo exporte, saque las comillas en component} */}
        <Route path="/" exact component={Home}/> 
        <Route path="/detalle/id/:id" component={Detalle}/> 
        <Route path="/favoritos" component={'Favoritos'}/> 
        <Route path="/search" component={SearchResults}/> 
        <Route path="/populares" component={PeliculasPopulares}/> 
        <Route path="/recomendadas" component={PeliculasRecomendadas}/> 
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;

