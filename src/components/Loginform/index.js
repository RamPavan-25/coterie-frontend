import {Component} from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import './index.css'
import { Link,useNavigate,Navigate} from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    });
    const navigate = this.props.navigate
    navigate('/', { replace: true })
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username:username, password:password}
    try{
      const x=await axios.post(`${process.env.REACT_APP_BACKEND_URL}`,userDetails);
      const data=x.data;
      if(data.isuservalid===false)
      {
        this.onSubmitFailure("Username is not Valid");
      }
      else if(data.ispasswordvalid===false)
      {
        this.onSubmitFailure("Password is not Valid");
      }
      else
      {
        this.onSubmitSuccess(data.jwt_token);
      }
    }
    catch(e){
      console.log(e);
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
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
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
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
        <img src="https://i.ibb.co/bzpzx0p/login-img.png" className="login-img"
          alt="website login" border="0" />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://i.ibb.co/wQrBW59/icon.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <p className='login-or'>OR</p>
          <Link to="/sign-up" className="Sign-up-Link">
            <button type="button" className="login-button sign-up-mar">
                Sign Up
            </button>
          </Link>
        </form>
        </div>
      </div>
    )
  }
}

export default (props)=>{
  const navigate=useNavigate();
  return(<LoginForm {...props} navigate={navigate}/>)
}