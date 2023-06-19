import {Component} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import './index.css'

class Gateway extends Component {
  state = {
    netbanking:false,
    creditcard:false,
    debitcard:false,
    upi:false,
    isSubmitted: false
  }

  submitForm = async event => {
    event.preventDefault()
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    this.setState({isSubmitted:true});
  }

  changeNetBanking=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    this.setState({netbanking:true,
      creditcard:false,
      debitcard:false,
      upi:false,});
  }

  changeCreditCard=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    this.setState({netbanking:false,
      creditcard:true,
      debitcard:false,
      upi:false,});
  }

  changeDebitCard=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    this.setState({netbanking:false,
      creditcard:false,
      debitcard:true,
      upi:false,});
  }

  changeUPI=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    this.setState({netbanking:false,
      creditcard:false,
      debitcard:false,
      upi:true,});
  }

  render() {
    const {netbanking,creditcard,debitcard,upi,isSubmitted} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Navigate to={"/login"} />
    }
    let x=localStorage.getItem('dataKey')
    x=JSON.parse(x);
    if(x==="NO")
    {
      return <Navigate to={"/"} />
    }
    localStorage.setItem('dataKey', JSON.stringify("NO"));
    return (
      <div className='gateway-Container'>
        <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://i.ibb.co/wQrBW59/icon.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className='Gateway-div' onClick={this.changeNetBanking}>
            <h1 className='Gateway-heading'>. Net Banking</h1>
          </div>
          {netbanking &&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="NetBank">
              Enter Bank Name
            </label>
            <input
              type="text"
              id="NetBank"
              className="username-input-field"
              placeholder="Bank Name"
            />
            <label className="gateway-input-label" htmlFor="NetUserName">
              Username
            </label>
            <input
              type="text"
              id="NetUserName"
              className="username-input-field"
              placeholder="Username"
            />
            <label className="gateway-input-label" htmlFor="NetPassword">
              password
            </label>
            <input
              type="password"
              id="NetPassword"
              className="username-input-field"
              placeholder="password"
            />
          </div>}
          <div className='Gateway-div' onClick={this.changeCreditCard}>
            <h1 className='Gateway-heading'>. Credit Card</h1>
          </div>
          {creditcard&&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="creditcardnumber">
              CARD NUMBER
            </label>
            <input
              type="text"
              id="creditcardnumber"
              className="username-input-field"
              placeholder="Card Number"
            />
            <label className="gateway-input-label" htmlFor="creditValid Thru">
              Valid Thru
            </label>
            <input
              type="text"
              id="creditValid Thru"
              className="username-input-field"
              placeholder="MM/YY"
            />
            <label className="gateway-input-label" htmlFor="creditCVV">
              CVV
            </label>
            <input
              type="password"
              id="creditCVV"
              className="username-input-field"
              placeholder="CVV"
            />
            <label className="gateway-input-label" htmlFor="creditName">
              Name On Card
            </label>
            <input
              type="text"
              id="creditName"
              className="username-input-field"
              placeholder="Name on Card"
            />
          </div>}
          <div className='Gateway-div' onClick={this.changeDebitCard}>
            <h1 className='Gateway-heading'>. Debit Card</h1>
          </div>
          {debitcard&&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="debitcardnumber">
              CARD NUMBER
            </label>
            <input
              type="text"
              id="debitcardnumber"
              className="username-input-field"
              placeholder="Card Number"
            />
            <label className="gateway-input-label" htmlFor="debitValid Thru">
              Valid Thru
            </label>
            <input
              type="text"
              id="debitValid Thru"
              className="username-input-field"
              placeholder="MM/YY"
            />
            <label className="gateway-input-label" htmlFor="debitCVV">
              CVV
            </label>
            <input
              type="password"
              id="debitCVV"
              className="username-input-field"
              placeholder="CVV"
            />
            <label className="gateway-input-label" htmlFor="debitName">
              Name On Card
            </label>
            <input
              type="text"
              id="debitName"
              className="username-input-field"
              placeholder="Name on Card"
            />
          </div>}
          <div className='Gateway-div'onClick={this.changeUPI} >
            <h1 className='Gateway-heading'>. UPI</h1>
          </div>
          {upi&&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="UpiId">
              Enter UPI ID
            </label>
            <input
              type="text"
              id="UpiId"
              className="username-input-field"
              placeholder="Upi id"
            />
            </div>}
            <button type="submit" className="login-button">
              PayNow
            </button>
          {isSubmitted && <p className="error-message">This Payment section is under development for Now</p>}
        </form>
        </div>
      </div>
    )
  }
}

export default Gateway
