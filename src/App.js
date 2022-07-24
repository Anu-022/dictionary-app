import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className='mt-3'>Dictionary App</h1>
      <Dictionary defaultKeyword = "Dawn" />     
  </div>
  );
}

export default App;
