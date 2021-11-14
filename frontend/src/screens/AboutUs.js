import './AboutUs.css';
//import Product from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/components/Product.js";


//import CartItem from "../components/CartItem"

const AboutUs = () => {
    return (
        <div className="aboutusscreen">

            <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Lorem Impsum consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					condues.</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="https://static1.bigstockphoto.com/0/6/8/large1500/86049506.jpg"/>
			</div>
		</div>
	</div>

</div>
    );
}

export default AboutUs;