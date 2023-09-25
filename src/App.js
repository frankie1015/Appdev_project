import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Login />
        <Signup />
      </div>
      
    </div>
  );
}

export default App;
