import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Slider from './component/Slider';
import HomeScreen from './screen/HomeScreen';



function App() {
  return (
    <div className="App">
     <Header/>
     <Slider></Slider>
     <HomeScreen></HomeScreen>

     <div>Body</div>




     <Footer/>
    </div>
  );
}

export default App;
