import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound";
import VerTodas from "./components/pages/VerTodas";
import {Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Header/>
      <Switch>
        {/* {Cuando cada uno cree su componente y lo exporte, saque las comillas en component} */}
        <Route path="/" exact component={Home}/> 
        <Route path="/verTodas" exact component={VerTodas}/> 
        <Route path="/detalle" exact component={'Detalle'}/> 
        <Route path="/favoritos" exact component={'Favoritos'}/> 
        <Route path="/search" exact component={'SearchResult'}/> 
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;

