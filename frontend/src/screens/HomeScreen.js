import './HomeScreen.css';
import {Link} from "react-router-dom"
import Product from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/components/Product.js";


const HomeScreen = ()=> {
    return <div className=''>
        <div className="container100">
        <img src="https://wallpaperaccess.com/full/1102493.jpg"/>
        </div>
        <header>
			
		</header>

		<main>
			<section class="presentation">
				<div class="introduction">
					<div class="intro-text">
						<h1>Manage Events <br/>At Your Fingertips</h1>
					</div>
					<div class="cta">
						<Link to="/addevent" class="cta-select">Get Started</Link>
						<Link to="/contactus" class="cta-add">Contact Us</Link>
					</div>
				</div>
				<div class="cover">
					<img src="https://www.wallpaperup.com/uploads/wallpapers/2017/12/28/1178889/99b1bb2e8aadcc07bd5fd31b5bcba825-700.jpg" alt="matebook" />
					</div>
				<br/>
				
			</section>

			
			
		</main>
		<div className="Links">
			<div className="Events">
				<br/><br/>
					<h1>Get Details Of All Upcoming Events</h1>
					<Link to="/viewevent" className="eventBtn">Get Info</Link>	
			</div>
			<div className="Register">
				<br/><br/>
					<h1>Easy Registration for Events</h1>
					<Link to="/addevent" className="registertBtn">Register Now</Link>	
			</div>
			<div className="Shop">
				<br/><br/>
					<h1>Also Check Out The Shop</h1>
					<Link to="/cart" className="shopBtn">Store</Link>	
			</div>
		</div>
        </div>
		

};

export default HomeScreen
