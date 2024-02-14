import './App.css';
import Navbar from './Navbar'
import Slider from './Slider';
import Footer from './Footer';
import Coursel from './Coursel';
import ServiceInfo from './ServiceInfo';
import WelcomeModal from "./Modal"
function App() {
  return (
    <div className="App">
      <WelcomeModal />
      <Navbar />
      <Slider />
      <ServiceInfo />
      <Coursel />
      <Footer />
    </div>
  );
}

export default App;
