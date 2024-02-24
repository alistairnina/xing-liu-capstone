import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Calculator } from "./components/Calculator";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BenefitCalculator } from './components/BenefitCalculator';






function App() {
 
  
  return (
    <div className="App">
      

       <NavBar />
      <Banner />
      <Calculator />
      <BenefitCalculator/>
      <Benefits />
      <Contact />
      <Footer />
   
      
      
     
    </div>
  );
}

export default App;
