import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Quebec from './content/Quebec'
import Montreal from './content/Montreal'
function App() {
  return (
    <div className="wrapper ">
      <BrowserRouter>
      <h1>Tourist's site</h1>
        
        <div className="stick">
        <nav>
        <Link to='/quebec'><button class="btn">Quebec</button></Link>
        <Link to='/montreal'><button class="btn">Montreal</button></Link>
        </nav>
        </div>
      
      <Switch>
        <Route path='/quebec'>
          <Quebec/>
        </Route>
        <Route path='/montreal'>
          <Montreal/>
        </Route>

      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
