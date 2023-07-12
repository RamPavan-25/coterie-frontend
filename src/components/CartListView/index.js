import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import axios from 'axios'
import './index.css'
import { Component } from 'react'
import EmptyCartView from '../EmptyCartView/'
import CartSummary from '../CartSummary'

class CartListView extends Component{
    state={
      cartList:[]
    }

    getCartListFun=async()=>{
      const username=localStorage.getItem("username")
      const userObj={username:username}
      const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartList`,userObj);
      this.setState({cartList:x.data})
    }

    componentDidMount(){
      this.getCartListFun();
    }
    render(){
      const cartList=this.state.cartList
      if(cartList.length===0)
      return <EmptyCartView/>
      return(
        <>
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} getCartListFun={this.getCartListFun}/>
          ))}
        </ul>
        <CartSummary cartList={cartList}/>
        </>
      )
    }
}

// const CartListView = () => (
//   <CartContext.Consumer>
//     {value => {
//       // const {cartList} = value
//       let cartList=[];
//       const getCartListFun=async()=>{
//         const username=localStorage.getItem("username")
//         const userObj={username:username}
//         const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}cartList`,userObj);
//         cartList=x.data;
//         console.log(cartList)
//       }
//       {getCartListFun()}
//       return (
//         <ul className="cart-list">
//           {cartList.map(eachCartItem => (
//             <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
//           ))}
//         </ul>
//       )
//     }}
//   </CartContext.Consumer>
// )

export default CartListView
