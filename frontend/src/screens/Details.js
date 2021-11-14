import './Details.css';
import { useEffect, useState } from "react";
//import Product from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/components/Product.js";


//import CartItem from "../components/CartItem"

const Details = () => {
  const [products, setProducts] = useState([
    {
      id: "#001",
      name: "Cricket U-16",
      price: 350,
      date: "10-12-2021",
      url:
        "https://sport360.com/wp-content/uploads/2018/12/Sharjah.jpg",
      cart: false,
      venue:"Karnataka Youth Cricket Academy,Haralur Main Rd,Karnataka 560068",
      format:"50 overs",
      level:"State Level"

    },
    {
      id: "#002",
      name: "Hockey U-14",
      date: "10-12-2021",
      price: 450,
      url:
        "https://images.livemint.com/img/2021/08/05/1600x900/447c695b503344598cb4d30b23bd0632-447c695b503344598cb4d30b23bd0632-0_1628130197657_1628130267852.jpg",
      cart: false,
      venue:"Jude Felix Hockey Academy,Cooke Town, Bengaluru, Karnataka 560084",
      format:"Knockouts",
      level:"State Level"
    },
    {
      id: "#003",
      name: "Football U-14",
      date: "10-12-2021",
      price: 300,
      url:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      cart: false,
      venue:"Falcons Football Academy,HSR Layout, Bengaluru, Karnataka 560102",
      format:"Knockouts",
      level:"State Level"
    },
    {
      id: "#004",
      name: "Football U-16",
      date: "10-12-2021",
      price: 600,
      url:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      cart: false,
      venue:"Roots Football School,Jayanagar, Bengaluru, Karnataka 560070",
      format:"Round Robin- 45min game",
      level:"District Level"
    },
    {
      id: "#005",
      name: "Football U-18",
      date: "10-12-2021",
      price: 400,
      url:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      cart: false,
      venue:"Bangalore Soccer Academy, Off Sarjapur road, Bengaluru, Karnataka 560035",
      format:"Round Robin- 40min game",
      level:"State Level"
    },
    {
      id: "#006",
      name: "Tennis U-18",
      date: "10-12-2021",
      price: 500,
      url:
        "https://uofrathletics.com/images/2019/10/4/OutdoorTennis2019_2_WEB_.jpg",
      cart: false,
      venue:"True Bounce Tennis Academy,Kaggadasapura, Bengaluru, Karnataka 560093",
      format:"Knockouts- 3 Set match",
      level:"National Level"
    }
  ])
  return (



<div className="productscreen">
    <h1>Upcoming Events</h1>
  {products.map((item) => (
    <div className='col-3' key={item.id}>
      <div className="productscreen__left">
        <div className="left__image"></div>
        <img src={item.url} className="card-img-top" />
      </div>
      <div className="left__info">
        <p className="left__name">{item.name}</p>
        <p>Registration Fee: Rs.{item.price}</p>
        <p>Event Date: {item.date}</p>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            <h3>Description:</h3><br/>
            <span><b>Event Id:</b> {item.id}<br/><b>Venue:</b> {item.venue}<br/> <b>Format:</b> {item.format}<br/><b>Tournament Level:</b> {item.level}</span>
          </p>
        </div>
      </div>
    </div>
))}
</div>
  )
  }
export default Details;