import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import HomePage from './customers/pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
