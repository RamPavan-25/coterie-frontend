import {Component} from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import CartContext from './context/CartContext'
import LoginForm from './components/Loginform'
import Gateway from './components/Gateway'
import axios from 'axios'
import './App.css'
import SignUpForm from './components/SignUpForm'

class App extends Component {
  state = {
    len:0,
  }

  componentDidMount(){
    this.fixLength()
  }

  fixLength=async()=>{
    const username=localStorage.getItem("username")
    const userObj={username:username}
    const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}CartHeaderLength`,userObj);
    this.setState({len:x.data})
  }
  removeAllCartItems = () => {
    this.setState({len:0})
  }

  // incrementCartItemQuantity = id => {
  //   this.setState(prevState => ({
  //     cartList: prevState.cartList.map(eachCartItem => {
  //       if (id === eachCartItem.id) {
  //         const updatedQuantity = eachCartItem.quantity + 1
  //         return {...eachCartItem, quantity: updatedQuantity}
  //       }
  //       return eachCartItem
  //     }),
  //   }))
  // }

  // decrementCartItemQuantity = id => {
  //   const {cartList} = this.state
  //   const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
  //   if (productObject.quantity > 1) {
  //     this.setState(prevState => ({
  //       cartList: prevState.cartList.map(eachCartItem => {
  //         if (id === eachCartItem.id) {
  //           const updatedQuantity = eachCartItem.quantity - 1
  //           return {...eachCartItem, quantity: updatedQuantity}
  //         }
  //         return eachCartItem
  //       }),
  //     }))
  //   } else {
  //     this.removeCartItem(id)
  //   }
  // }

  // removeCartItem = id => {
  //   const {cartList} = this.state
  //   const updatedCartList = cartList.filter(
  //     eachCartItem => eachCartItem.id !== id,
  //   )

  //   this.setState({cartList: updatedCartList})
  // }

  addCartItem = length => {
    const {len} = this.state
    this.setState({len:length})
    // const productObject = cartList.find(
    //   eachCartItem => eachCartItem.id === product.id,
    // )

    // if (productObject) {
    //   this.setState(prevState => ({
    //     cartList: prevState.cartList.map(eachCartItem => {
    //       if (productObject.id === eachCartItem.id) {
    //         const updatedQuantity = eachCartItem.quantity + product.quantity

    //         return {...eachCartItem, quantity: updatedQuantity}
    //       }

    //       return eachCartItem
    //     }),
    //   }))
    // } else {
    //   const updatedCartList = [...cartList, product]

    // }
  }

  render() {
    const {len} = this.state
    localStorage.setItem('dataKey', JSON.stringify("NO"));
    return (
      <CartContext.Provider
        value={{
          len,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <BrowserRouter>
          <Routes>
          <Route exact path="/login" element={<LoginForm/>} />
          <Route exact path="/sign-up" element={<SignUpForm/>} />
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>} />
            <Route
              exact
              path="/products/:id"
              render={(props) => (
                <ProductItemDetails key={props.match.params.pageid} {...props} />)
               }
               element={<ProductItemDetails/>}
            />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path='/gateway' element={<Gateway/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App
