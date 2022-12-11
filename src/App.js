import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

        <div> 
          Routerlar buraya render olacak
          <Outlet />
        </div>
 
    </div>
  );
}

export default App;
