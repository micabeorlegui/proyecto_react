import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <h1>Hola</h1>
      <Switch>
        {/* {Cuando cada uno cree su componente y lo exporte, saque las comillas en component} */}
        <Route path="/" exact component={'Home'}/> 
        <Route path="" exact component={'VerTodas'}/> 
        <Route path="" exact component={'Detalle'}/> 
        <Route path="" exact component={'Favoritos'}/> 
        <Route path="" exact component={'SearchResult'}/> 
        <Route component={'NotFound'}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;

