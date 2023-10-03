import {Link,useNavigate} from 'react-router-dom'
import { Component } from "react";
import './index.css'


class Footer extends Component{
    nav=()=>{
        const navigate=this.props.navigate
        navigate("/")
    }
    render(){
        return(<div className="Footer-container">
            <div>
                <h1 className="Footer-heading">Let's Keep In Touch</h1>
                <p className="Footer-heading">Find us on any of these platforms, we respond 1-2 business days.</p>
                <div className="Icons-div">
                    <div className="footer-anchor-dec">
                        <a href = "mailto: btech10307.20@bitmesra.ac.in"><img src="https://i.ibb.co/GdpyrP2/new.png" className="footer-icons"/></a>
                    </div>
                    <div className="footer-anchor-dec">
                        <a href="https://github.com/kapish099"><img src="https://i.postimg.cc/7hyPMPVq/github.png" className="footer-icons"/></a>
                    </div>
                    <div className="footer-anchor-dec">
                        <a href="https://www.instagram.com/kapish_099/"><img src="https://i.postimg.cc/vHFx3bBg/instagram.png" className="footer-icons"/></a>
                    </div>
                    <div className="footer-anchor-dec">
                        <a href="https://www.linkedin.com/in/gkapish/"><img src="https://i.ibb.co/51FMF5X/linkedin-5.png" className="footer-icons"/></a>
                    </div>
                </div>
            </div>
            <div className="Footer-links-dev">
                <div>
                    <h1 className="Footer-heading">Useful Links</h1>
                    <p className="Footer-first-heading">
                    <Link to="/" className="nav-link cc-footer">
                        Home
                    </Link>
                    </p>
                    <p className="Footer-first-heading">
                    <Link to="/products" className="nav-link cc-footer">
                        Products
                    </Link>
                    </p>
                    <p className="Footer-first-heading">
                    <Link to="/cart" className="nav-link cc-footer">
                        Cart
                    </Link>
                    </p>
                </div>
                <div>
                    <h1 className="Footer-heading">Other Resources</h1>
                    <p className="Footer-first-heading">Terms and Conditions</p>
                    <p className="Footer-first-heading">Privacy Policy</p>
                    <p className="Footer-first-heading">Contact</p>
                </div>
            </div>
        </div>)
    }
}

export default (props)=>{
    const navigate=useNavigate();
    return(<Footer {...props} navigate={navigate}/>)
  }
  