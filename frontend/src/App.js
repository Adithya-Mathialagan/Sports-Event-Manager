
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen.js';
import Details from './screens/Details.js';
import CartScreen from './screens/CartScreen.js';
import AboutUs from './screens/AboutUs.js';
import ContactUs from './screens/ContactUs.js';
import AddEvent from './screens/AddEvent.js';
import Form from './screens/Form.js';


//import Home from "./screens/Home.js";
//import Product from "./screens/Product.js";
//import Cart from "./screens/Cart.js";
//import Login from './screens/Login/Login.js';


//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';




function App() {

const[sideToggle,setSideToggle] = useState(false);

  return (
    

    
    <Router>

      <div>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route exact path="/form" element={<Form/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/contactus" element={<ContactUs/>}/>
          <Route exact path="/addevent" element={<AddEvent/>}/>
          <Route exact path="/viewevent" element={<Details/>}/>
        </Routes>
      </main>
      
      </div>
    

      </Router>
  );
}

export default App;
