import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">

        <div> 
          {a.toUpperCase()}
          Routerlar buraya render olacak
          <Outlet />
        </div>
 
    </div>
  );
}

export default App;
