import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './menu/menu.css';
import Base from './Base';
import Dropdown from './Dropdown'
import Quebec from './content/Quebec'
import Montreal from './content/Montreal';
import Home from './content/Home'
import Form from './content/Form'

function App() {
  const w=window.innerWidth;
  if(w>700){return <Base/>}
  {return <Dropdown/>}
}

export default App;
