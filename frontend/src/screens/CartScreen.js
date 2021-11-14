import './CartScreen.css'
//import Product from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/components/Product.js";


import CartItem from "../components/CartItem"
import cricket from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/screens/images/cricket.png"
import badminton from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/screens/images/badminton.png"
import basketball from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/screens/images/basketball.png"
import athletics from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/screens/images/atletics.jpg"
import football from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/screens/images/football.png"

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <h1 className="cartheader">Buy Sporting Goods</h1>
        <div className="popular">
        </div>
        <div className="container5">
        <a href="https://www.amazon.in/gp/browse.html?node=3403628031&ref_=nav_em_sbc_sportslugg_cricket_0_2_14_2" target="_blank" ><img src={cricket}/></a>
        <br/>
        <a href="https://www.amazon.in/Badminton/b/?ie=UTF8&node=3403619031&ref_=sv_sg_3" target="_blank" ><img src={badminton}/></a>  
        <br/>
        <a href="https://www.amazon.com/s?k=basketball&rh=n%3A3396541&dc&crid=1646R16184VX7&qid=1636595142&rnid=2941120011&sprefix=basket%2Caps%2C412&ref=sr_nr_n_1" target="_blank" ><img src={basketball}/></a>
        <br/>
        <a href="https://www.amazon.in/Running-Clothing-Accessories/b/?ie=UTF8&node=3403659031&ref_=sv_sg_6" target="_blank" ><img src={athletics}/></a>
        <br/>
        <a href="https://www.amazon.in/gp/browse.html?node=3403640031&ref_=nav_em_sbc_sportslugg_football_0_2_14_5" target="_blank" ><img src={football}/></a>
        <br/>
        </div>


</div>
    );
}

export default CartScreen
