import './App.scss';
import './index.css';
<<<<<<< HEAD
import Home from './pages/Home';

function App() {
  return (
    <div className='main-wrapper'>
      <Home style={{width:"inherit"}}/>
    </div>
=======
import Home from './pages/Home/index';
function App() {
  return (
    <>
      <div className="main-wrapper">
        <Home />
      </div>
    </>
>>>>>>> master
  );
}

export default App;
