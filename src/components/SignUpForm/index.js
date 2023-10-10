import {Component} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Navigate,useNavigate } from 'react-router-dom'
import './index.css'

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    ComfirmPassword: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }
  
  onChangeConfirmpassword = event => {
    this.setState({ComfirmPassword: event.target.value})
  }
  

  onSubmitSuccess = () => {
    const navigate = this.props.navigate
    navigate('/login', { replace: true })
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password,ComfirmPassword} = this.state
    if(password!==ComfirmPassword||username===""||password==="")
    this.onSubmitFailure("Invalid username or password not matched");
    else
    {
        const name=username.toString();
        const userDetails = {username:name,password:password}
        try{
        const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}sign-up`,userDetails);
        const data=x.data;
        if(data.isuservalid===false)
        {
            this.onSubmitFailure("Username Already exists");
        }
        else
        {
            this.onSubmitSuccess();
        }
        }
        catch(e){
        console.log(e);
        }
    }
  }

  renderConfirmPasswordField = () => {
    const {ComfirmPassword} = this.state

    return (
      <>
        <label className="input-label" htmlFor="Confirmpassword">
          CONFIRM PASSWORD
        </label>
        {/* <input
          type="password"
          id="Confirmpassword"
          className="password-input-field"
          value={ComfirmPassword}
          onChange={this.onChangeConfirmpassword}
          placeholder="Confirm Password"
        /> */}
        <div className='login-user-div'>
          <img src='https://i.ibb.co/mX9wbm4/padlock.png' className="password-user-img" alt='person-icon'/>
          <input type='password' id="Confirmpassword" className='password-input-field' value={ComfirmPassword} onChange={this.onChangeConfirmpassword} placeholder='Confirm Password'/>
        </div>
      </>
    )
  }
  
  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        {/* <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        /> */}
        <div className='login-user-div'>
          <img src='https://i.ibb.co/bW7jygk/lock.png' className="password-user-img" alt='lock-icon'/>
          <input type='password' id="password" className='password-input-field' value={password} onChange={this.onChangePassword} placeholder='Password'/>
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        {/* <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        /> */}
        <div className='login-user-div'>
          <img src='https://i.ibb.co/D4BWfC0/person.png' className="login-user-img" alt='lock-icon-2'/>
          <input type='text' id="username" className='username-input-field' value={username} onChange={this.onChangeUsername} placeholder='Username'/>
      </div>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to={"/"} />
    }
    return (
      <div className='login-Container'>
        <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://i.ibb.co/59LxL70/Whats-App-Image-2023-10-10-at-10-40-33-PM-removebg-preview.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderConfirmPasswordField()}</div>
            <button type="submit" className="login-button login-btn-mt">
              Sign Up
            </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
        </div>
      </div>
    )
  }
}

export default (props)=>{
  const navigate=useNavigate();
  return(<SignUpForm {...props} navigate={navigate}/>)
}
