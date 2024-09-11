import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/pages/NotFound";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <h1>Hola</h1>
      <Switch>
        {/* {Cuando cada uno cree su componente y lo exporte, saque las comillas en component} */}
        <Route path="/" exact component={'Home'}/> 
        <Route path="/verTodas" exact component={'VerTodas'}/> 
        <Route path="/detalle" exact component={'Detalle'}/> 
        <Route path="/favoritos" exact component={'Favoritos'}/> 
        <Route path="/searchResult" exact component={'SearchResult'}/> 
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;

