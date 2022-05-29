import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import React, { useState } from "react";
import Quebec from './content/Quebec'
import Montreal from './content/Montreal';
import Home from './content/Home'
import Form from './content/Form';


function Dropdown(){
  let i=1;
  function myF(){
    i++;
    if(i%2==0){
      document.getElementById("navd").style.display="none";
    }
    else{document.getElementById("navd").style.display="block";
    document.getElementById("navd").style.position="fixed";
  }
  }
  function Diss(){
    i--
    document.getElementById("navd").style.display="none"
  }

    return (

        <div class="wrapper">
           
          <BrowserRouter>
 
          <h1 id="top" className='p-5 rounded '>Quebec</h1>
          <button onClick={myF} className="btn">+</button>
          <div className="stick">
              
              <nav  id="navd" onClick={Diss}>
                
              <Link to='/quebec'><button class="btn q"><h3>Квебек Сити</h3></button></Link><hr/>
              <Link to='/montreal'><button class="btn q">Монреаль</button></Link><hr/>
              <Link to='/order'><button class="btn q">Заказать</button></Link><hr/>
              <Link to='/'><button class="btn q">Home</button></Link><hr/>
              </nav>
              </div>
    
          
          <Switch>
            <Route path='/quebec'>
              <Quebec/>
            </Route>
            <Route path='/montreal'>
              <Montreal/>
            </Route>
            <Route path='/order'>
               <Form/>
            </Route>
            <Route path='/'>
              <Home/>
    
            </Route>
    
          </Switch>
          </BrowserRouter>
    
        </div>


      );

}
export default Dropdown;