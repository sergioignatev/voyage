import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import './App.css';
function Quebec(){
  return <h1>Quebec</h1>
}
function Montreal(){
  return <h1>Montreal</h1>
}

function App() {
  return (
    <div className="wrapper App">
      <BrowserRouter>
      <div>
        <h1>RESERV BRANCH
        </h1>
        <Link to='/quebec'><button>Quebec</button></Link>
        <Link to='/montreal'><button>Montreal</button></Link>
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
