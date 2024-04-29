import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Moment from './components/Moment';
import Get from './components/Get'
import Target from './components/Target'
import Mindset from './components/Mindset';
import Over from './components/Over';
import Footer from './components/Footer';
import About from './components/About';
import Request from './components/Request';


function App() {
  return (
    <>
      <Header />
      <Moment />
      <Get />
      <Target />
      <Mindset />
      <Over />
      <About />
      <Request />
      <Footer />
    </>
  );
}

export default App;
