import logo from './logo.svg';
import './App.css';
import Navigation from './Navbar';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header/>
     <Navigation/>
     <Section1></Section1>
     <Section2/>
     <Section3/>
  
    </div>
  );
}

export default App;
