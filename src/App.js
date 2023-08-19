import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Application from './Components/Application';
import Barchart from './Components/Barchart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Application />
      {/* <Barchart className = 'conatiner' /> */}
    </div>
  );
}

export default App;
