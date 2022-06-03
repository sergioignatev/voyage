import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import React, { useState } from "react";
import Quebec from './content/Quebec'
import Montreal from './content/Montreal';
import Home from './content/Home'
import Form from './content/Form';


function Dropdown(){
 
  let i=4;
  function myF(){
    i++;
    if(i%2==0){
      document.getElementById("navd").style.display="none";
    }
    else{document.getElementById("navd").style.display="block";
    
  }
  }
  function Diss(){
    i--
    document.getElementById("navd").style.display="none"
  }

    return (

        <div class="wrapper">
           
          <HashRouter>
          
          <h1 id="top" className='p-5 rounded container-fluid'>Quebec</h1>
          
          <div className="stick">
           
          <div><button onClick={myF} className="btn le">+МЕНЮ</button></div>
          
         
              <nav  id="navd" onClick={Diss}>
              
              <Link to='#/quebec'><h3 class="btn q">Квебек Сити</h3></Link><hr/>
              <Link to='#/montreal'><button class="btn q">Монреаль</button></Link><hr/>
              <Link to='#/order'><button class="btn q">Заказать</button></Link><hr/>
              <Link to='#/'><button class="btn q">Home</button></Link><hr/>
              </nav>
              </div>
    
          
          <Switch>
            <Route path='#/quebec'>
              <Quebec/>
            </Route>
            <Route path='#/montreal'>
              <Montreal/>
            </Route>
            <Route path='#/order'>
               <Form/>
            </Route>
            <Route path='#/'>
              <Home/>
    
            </Route>
    
          </Switch>
          </HashRouter>
    
        </div>


      );

}
export default Dropdown;