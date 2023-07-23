import './App.css';
import './bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;