import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { db, fs } from './firebase'
import './AddEvent.css'
import events from "C:/Users/Adithya/Desktop/MERN Shopping Cart/frontend/src/screens/images/Events.jpg"

function AddEvent(props) {
  useEffect(() => {
    db.collection("cart")
      .onSnapshot((querySnapshot) => {
        var p = [];
        querySnapshot.forEach((doc) => {
          p.push(doc.data());
          products.map((i) => {
            if (i.id == doc.data().id) {
              i.cart = true
            }
          })
        });

        setCart(p)
      });

  }, []);
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([
    {
      id: "#001",
      name: "Cricket U-16",
      price: 350,
      url:
        "https://sport360.com/wp-content/uploads/2018/12/Sharjah.jpg",
      cart: false,
      quantity: 1,
    },,
    {
      id: "#002",
      name: "Hockey U-14",
      price: 450,
      url:
        "https://images.livemint.com/img/2021/08/05/1600x900/447c695b503344598cb4d30b23bd0632-447c695b503344598cb4d30b23bd0632-0_1628130197657_1628130267852.jpg",
      cart: false,
      quantity: 1,
    },
    {
      id: "#003",
      name: "Football U-14",
      price: 300,
      url:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      cart: false,
      quantity: 1,
    },
    {
      id: "#004",
      name: "Football U-16",
      price: 600,
      url:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      cart: false,
      quantity: 1,
    },
    {
      id: "#005",
      name: "Football U-18",
      price: 400,
      url:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80",
      cart: false,
      quantity: 1,
    },
    {
      id: "#006",
      name: "Tennis U-18",
      price: 500,
      url:
        "https://uofrathletics.com/images/2019/10/4/OutdoorTennis2019_2_WEB_.jpg",
      cart: false,
      quantity: 1,
    }
  ])
  function addtocart(item) {


    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })

    db.collection('cart').doc(`${item.id}`).set(item, { merge: true })

  }
  function removetocart(item) {

    products.map((i) => {
      if (i.id == item.id) {
        i.cart = false
      }
    })
    db.collection('cart').doc(`${item.id}`).delete()

  }
  function increase(item) {
    db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))

  }
  function decrease(item) {
    db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
  }
  function total() {
    let x = 0
    cart.map((i) => {
      x += i.price * i.quantity

    })
    return x
  }
  return (
    <div className='container3'>
      <img src={events}/>
      <h1>Please Select Events To Register</h1>
      <div className='row justify-content-center'>
        {products.map((item) => (
          <div className='col-3' key={item.id}>
            <div className="card"  >
              <img src={item.url} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  {item.name}
                  <br/>
                  Fee:  Rs. {item.price}
                  <br/>
                  Event Id: {item.id}
                </h5>
                {
                  item.cart == false
                  &&
                  <div>
                  <button className='btn btn-primary' onClick={() => addtocart(item)}><h2>Register</h2>
                </button>
                </div>
                }
                {
                  item.cart == true
                  &&
                  <button className='btn btn-success' onClick={() => addtocart(item)}>
                    <h2>Added</h2>
                </button>
                }
              </div>
            </div>
          </div>

        ))}

      </div>

      <div className='row'>
        
        <table className="table">
          <caption><h1>Events Registered</h1></caption>
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Id</th>
              <th scope="col">Event Name</th>
              <th scope="col">Registration Fee</th>
              <th scope="col">Remove</th>
              
            </tr>
          </thead>
          <tbody>
            {
              
              cart.map((i, index) => (

                < tr key={i.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>
                    {i.price}
                  </td>

                  <td>
                    <button onClick={() => removetocart(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL FEE: {total()}</h4>
        </div>
        <div className="finalBtn">
        <Link to="/form">
        Click to Complete Regitration!</Link>
        </div>
      </div>
    </div >
  );
}

export default AddEvent;