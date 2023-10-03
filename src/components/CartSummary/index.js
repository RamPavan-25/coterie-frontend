import CartContext from '../../context/CartContext'
import { useNavigate,useSearchParams } from 'react-router-dom'
import './index.css'
import axios from 'axios'

const CartSummary = (props) => (
  <CartContext.Consumer>
    {value => {
      let cartList =props.cartList
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.count
      })
      function GatewayFun(){
        localStorage.setItem('dataKey', JSON.stringify("YES"));
        const navigate = props.navigate
        navigate('/gateway')
      }
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button d-sm-none" onClick={GatewayFun}>
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none" onClick={GatewayFun}>
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default (props)=>{
  const navigate=useNavigate();
  return(<CartSummary {...props} navigate={navigate}/>)
}