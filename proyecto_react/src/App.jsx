import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound";
import {Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import PeliculasPopulares from "./components/pages/PeliculasPopulares";
import PeliculasRecomendadas from "./components/pages/PeliculasRecomendadas";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        {/* {Cuando cada uno cree su componente y lo exporte, saque las comillas en component} */}
        <Route path="/" exact component={Home}/> 
        <Route path="/detalle" exact component={'Detalle'}/> 
        <Route path="/favoritos" exact component={'Favoritos'}/> 
        <Route path="/search" exact component={'SearchResult'}/> 
        <Route path="/peliculasPopulares" exact component={PeliculasPopulares}/> 
        <Route path="/peliculasRecomendadas" exact component={PeliculasRecomendadas}/> 
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;

