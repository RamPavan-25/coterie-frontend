import CartContext from '../../context/CartContext'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import axios from 'axios'
import './index.css'
import Footer from '../Footer'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {len, addCartItem} = value
      const showEmptyView = len === 0
      const onClickRemoveAllBtn = async() => {
        const username=localStorage.getItem("username")
        const userObj={username:username}
        const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartAll`,userObj);
        addCartItem(0);
      }
      const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Navigate to="/login" />
  }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <CartListView />
              </div>
            )}
          </div>
          <Footer/>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
