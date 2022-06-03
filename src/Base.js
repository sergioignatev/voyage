import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Quebec from './content/Quebec'
import Montreal from './content/Montreal';
import Home from './content/Home'
import Form from './content/Form'
function Base(){
    return (
        <div className="wrapper ">
          <HashRouter>
          <h1 id="top" className='p-5 rounded '>Quebec</h1>
          <div className="stick">
              
              <nav id="nav">
                
              <Link to='/quebec'><button class="btn">Квебек Сити</button></Link>
              <Link to='/montreal'><button class="btn">Монреаль</button></Link>
              <Link to='/order'><button class="btn">Заказать</button></Link>
              <Link to='/'><button class="btn">Home</button></Link>
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
          </HashRouter>
    
        </div>
      );
}
export default Base;