import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Quebec from './content/Quebec'
import Montreal from './content/Montreal';
import Home from './content/Home'
import Form from './content/Form'
function App() {
  return (
    <div className="wrapper ">
      <BrowserRouter>
      <h1 id="top" className='p-5 rounded '>Туристический сайт по Квебеку</h1>
        
        <div className="stick">
        <nav>
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
      </BrowserRouter>

    </div>
  );
}

export default App;
