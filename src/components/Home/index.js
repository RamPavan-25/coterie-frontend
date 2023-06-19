import {Link,Navigate} from 'react-router-dom'
import Header from '../Header'
import Cookies from 'js-cookie'

import './index.css'

const Home = () => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return(<>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Where you need help choosing the best</h1>
        <img
          src="https://i.ibb.co/cwXRjDG/6505894.jpg"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
        Embrace the freedom of shopping from anywhere, at any time, while immersing yourself in a diverse array of 
        products that cater to your unique preferences. Let us be your trusted companion on this journey, 
        providing secure transactions, personalized attention, and rewarding experiences at every turn.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://i.ibb.co/cwXRjDG/6505894.jpg"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>)
}

export default Home
