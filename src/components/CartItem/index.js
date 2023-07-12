import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import axios from 'axios'
import CartContext from '../../context/CartContext'

import './index.css'
import { Component } from 'react'

// class CartItem extends Component{
//     state={
//       cartItemDetails:this.props
//     }
//     onClickDecrement = async() => {
//       // decrementCartItemQuantity(id)
//       const quantity=this.props.cartItemDetails.count
//       const id=this.props.cartItemDetails.id
//       const username=localStorage.getItem("username")
//       const userObj={username:username,id:id,quantity:quantity-1}
//       const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartItemIncreament`,userObj);
//       if(quantity===1)
//       {
//         console.log("Hi");
//       }
//       this.props.getCartListFun();
//     }
//     onClickIncrement = async() => {
//       // incrementCartItemQuantity(id)
//       let quantity=this.props.cartItemDetails.count
//       const id=this.props.cartItemDetails.id
//       const username=localStorage.getItem("username")
//       const userObj={username:username,id:id,quantity:quantity+1}
//       const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartItemIncreament`,userObj);
//       console.log(x);
//       this.props.getCartListFun();
//     }
//     onRemoveCartItem = () => {
//       // removeCartItem(id)
//     }
//     render(){
//       const {id, title, brand,price, imageUrl} = this.props.cartItemDetails
//       const quantity=this.props.cartItemDetails.count;
//       const totalPrice = price * quantity
//        return (
//         <li className="cart-item">
//                <img className="cart-product-image" src={imageUrl} alt={title} />
//                <div className="cart-item-details-container">
//                <div className="cart-product-title-brand-container">
//                 <p className="cart-product-title">{title}</p>
//                 <p className="cart-product-brand">by {brand}</p>
//                </div>
//                <div className="cart-quantity-container">
//                    <button
//                      type="button"
//                      className="quantity-controller-button"
//                      testid="minus"
//                      onClick={this.onClickDecrement}
//                     >
//                       <BsDashSquare color="#52606D" size={12} />
//                     </button>
//                     <p className="cart-quantity">{quantity}</p>
//                     <button
//                       type="button"
//                       className="quantity-controller-button"
//                       testid="plus"
//                       onClick={this.onClickIncrement}
//                     >
//                         <BsPlusSquare color="#52606D" size={12} />
//                     </button>
//               </div>
//               <div className="total-price-remove-container">
//                   <p className="cart-total-price">Rs {totalPrice}/-</p>
//                   <button
//                     className="remove-button"
//                     type="button"
//                     onClick={this.onRemoveCartItem}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//               <button
//                 className="delete-button"
//                 type="button"
//                 onClick={this.onRemoveCartItem}
//                 testid="remove"
//               >
//                 <AiFillCloseCircle color="#616E7C" size={20} />
//               </button>
//           </li>
//        ) 
//     }
// }

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        len,
        addCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand,price, imageUrl} = cartItemDetails
      const quantity=cartItemDetails.count;
      const onClickDecrement = async() => {
        // decrementCartItemQuantity(id)
        const username=localStorage.getItem("username")
        const userObj={username:username,id:id,quantity:quantity-1}
        const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartItemIncreament`,userObj);
        if(quantity===1)
        {
            addCartItem(len-1);
        }
        props.getCartListFun();
      }
      const onClickIncrement = async() => {
        // incrementCartItemQuantity(id)
        const username=localStorage.getItem("username")
        const userObj={username:username,id:id,quantity:quantity+1}
        const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartItemIncreament`,userObj);
        props.getCartListFun();
      }
      const onRemoveCartItem = async() => {
        // removeCartItem(id)
        const username=localStorage.getItem("username")
        const userObj={username:username,id:id,quantity:0}
        const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartItemIncreament`,userObj);
        addCartItem(len-1);
        props.getCartListFun();
      }
      const totalPrice = price * quantity

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                testid="minus"
                onClick={onClickDecrement}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                testid="plus"
                onClick={onClickIncrement}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {totalPrice}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
            testid="remove"
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
