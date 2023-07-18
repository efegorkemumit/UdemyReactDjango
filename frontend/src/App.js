import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Slider from './component/Slider';




function App() {
  return (
    <div className="App">
     <Header/>
     <Slider></Slider>

     <div>Body</div>




     <Footer/>
    </div>
  );
}

export default App;
