import {Component} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Navigate, useLocation,useNavigate } from 'react-router-dom'
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
    let {netbanking}=this.state;
    let f;
    if(netbanking===true)
    f=false;
    else
    f=true;
    this.setState({netbanking:f,
      creditcard:false,
      debitcard:false,
      upi:false});
  }

  changeCreditCard=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    let {creditcard}=this.state;
    let f;
    if(creditcard===true)
    f=false;
    else
    f=true;
    this.setState({netbanking:false,
      creditcard:f,
      debitcard:false,
      upi:false});
  }

  changeDebitCard=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    let {debitcard}=this.state;
    let f;
    if(debitcard===true)
    f=false;
    else
    f=true;
    this.setState({netbanking:false,
      creditcard:false,
      debitcard:f,
      upi:false});
  }

  changeUPI=()=>{
    localStorage.setItem('dataKey', JSON.stringify("YES"));
    let {upi}=this.state;
    let f;
    if(upi===true)
    f=false;
    else
    f=true;
    this.setState({netbanking:false,
      creditcard:false,
      debitcard:false,
      upi:f});
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
            src="https://i.ibb.co/59LxL70/Whats-App-Image-2023-10-10-at-10-40-33-PM-removebg-preview.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className='Gateway-div' onClick={this.changeNetBanking}>
            <img src='https://i.ibb.co/sqvjDjk/internet-banking.png' className='gateway-icon'/>
            <h1 className='Gateway-heading'>Net Banking</h1>
          </div>
          {netbanking &&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="NetBank">
              Enter Bank Name
            </label>
            <input
              type="text"
              id="NetBank"
              className="Gateway-input-field"
              placeholder="Bank Name"
            />
            <label className="gateway-input-label" htmlFor="NetUserName">
              Username
            </label>
            <input
              type="text"
              id="NetUserName"
              className="Gateway-input-field"
              placeholder="Username"
            />
            <label className="gateway-input-label" htmlFor="NetPassword">
              Password
            </label>
            <input
              type="password"
              id="NetPassword"
              className="Gateway-input-field"
              placeholder="Password"
            />
          </div>}
          <div className='Gateway-div' onClick={this.changeCreditCard}>
            <img src='https://i.ibb.co/4s7m4Rd/credit-card.png' className='gateway-icon'/>
            <h1 className='Gateway-heading'>Credit Card</h1>
          </div>
          {creditcard&&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="creditcardnumber">
              CARD NUMBER
            </label>
            <input
              type="text"
              id="creditcardnumber"
              className="Gateway-input-field"
              placeholder="Card Number"
            />
            <label className="gateway-input-label" htmlFor="creditValid Thru">
              Valid Thru
            </label>
            <input
              type="text"
              id="creditValid Thru"
              className="Gateway-input-field"
              placeholder="MM/YY"
            />
            <label className="gateway-input-label" htmlFor="creditCVV">
              CVV
            </label>
            <input
              type="password"
              id="creditCVV"
              className="Gateway-input-field"
              placeholder="CVV"
            />
            <label className="gateway-input-label" htmlFor="creditName">
              Name On Card
            </label>
            <input
              type="text"
              id="creditName"
              className="Gateway-input-field"
              placeholder="Name on Card"
            />
          </div>}
          <div className='Gateway-div' onClick={this.changeDebitCard}>
          <img src='https://i.ibb.co/s1nrRDf/credit-card-1.png' className='gateway-icon'/>
            <h1 className='Gateway-heading'>Debit Card</h1>
          </div>
          {debitcard&&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="debitcardnumber">
              CARD NUMBER
            </label>
            <input
              type="text"
              id="debitcardnumber"
              className="Gateway-input-field"
              placeholder="Card Number"
            />
            <label className="gateway-input-label" htmlFor="debitValid Thru">
              Valid Thru
            </label>
            <input
              type="text"
              id="debitValid Thru"
              className="Gateway-input-field"
              placeholder="MM/YY"
            />
            <label className="gateway-input-label" htmlFor="debitCVV">
              CVV
            </label>
            <input
              type="password"
              id="debitCVV"
              className="Gateway-input-field"
              placeholder="CVV"
            />
            <label className="gateway-input-label" htmlFor="debitName">
              Name On Card
            </label>
            <input
              type="text"
              id="debitName"
              className="Gateway-input-field"
              placeholder="Name on Card"
            />
          </div>}
          <div className='Gateway-div'onClick={this.changeUPI} >
          <img src='https://i.ibb.co/fqpd8YW/operation.png' className='gateway-icon'/>
            <h1 className='Gateway-heading'>UPI</h1>
          </div>
          {upi&&<div className='debit-container'>
            <label className="gateway-input-label" htmlFor="UpiId">
              Enter UPI ID
            </label>
            <input
              type="text"
              id="UpiId"
              className="Gateway-input-field"
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

export default (props)=>{
  const navigate=useNavigate();
  return(<Gateway {...props} navigate={navigate}/>)
}
