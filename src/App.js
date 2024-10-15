import SearchBar from './components/SearchBar/SearchBar';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Docs from './components/Docs/Docs';


function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Docs/>} exact/>
          <Route path="/browse" element={<SearchBar/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
