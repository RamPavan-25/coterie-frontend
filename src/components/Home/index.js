import {Navigate, useNavigate} from 'react-router-dom'
import Header from '../Header'
import Cookies from 'js-cookie'
import Footer from '../Footer'
import './index.css'
import Slider from '../HomeSlider'
const slideData = [
  {
    index: 0,
    headline: 'Fossil Watch',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png',
    ProductId: 17
  },
  {
    index: 1,
    headline: 'Podcast Microphone',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png',
    ProductId: 30
  },
  {
    index: 2,
    headline: 'Mens Jacket',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png',
    ProductId: 3
  },
  {
    index: 3,
    headline: 'Zari Design Kurta',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png',
    ProductId: 7
  },{
    index: 4,
    headline: 'Analog Mens Watch',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png',
    ProductId: 22
  },{
    index: 5,
    headline: 'PS5 Controller Charger',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png',
    ProductId: 32
  },
  {
    index: 6,
    headline: 'Knit Cream Sweater',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png',
    ProductId: 11
  },
  {
    index: 7,
    headline: 'Honey Teddy Bear',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png',
    ProductId: 52
  },
  {
    index: 8,
    headline: 'Slim Fit Jeans',
    button: 'Shop now',
    src: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png',
    ProductId: 9
  }
]
const Home = (props) => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Navigate to="/login" />
  }
  const GotoProductsWithcategory=(id)=>{
    const navigate=props.navigate
    navigate("/products")
  }
  return(<>
    <Header />
      {/* <div className="home-container">
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
      </div> */}
    <div className='New-home-container'>
      <div className="hero-banner">
      </div>
    </div>
    <div className='Our-categories'>
      <h1 className='Our-categories-heading'>Our Categories</h1>
      <div className='our-category-first-div'>
        <div className='category-card'>
          <img src="https://i.ibb.co/g93PJPN/shirt-mockup-concept-with-plain-clothing.jpg" className='categorie-images' alt='clothing'/>
          <div className='category-inside-container'>
              <h1 className='categories-inside-heading'>Clothing</h1>
              <button className='Shop-Now-Button' onClick={GotoProductsWithcategory}>Shop Now</button>
          </div>
        </div>
        <div className='category-card'>
          <img src="https://i.ibb.co/fxKS1qd/2106-q703-016-S-m004-c10-household-appliance-realistic.jpg" className='categorie-images' alt='Electronics'/>
          <div className='category-inside-container'>
              <h1 className='categories-inside-heading'>Electronics</h1>
              <button className='Shop-Now-Button' onClick={GotoProductsWithcategory}>Shop Now</button>
          </div>
        </div>
        <div className='category-card'>
          <img src="https://i.ibb.co/5MvSjPQ/modern-kitchen-equipment-shining-steel-appliances-gleam-generated-by-ai.jpg" className='categorie-images' alt='Appliances'/>
          <div className='category-inside-container'>
              <h1 className='categories-inside-heading'>Appliances</h1>
              <button className='Shop-Now-Button'onClick={GotoProductsWithcategory}>Shop Now</button>
          </div>
        </div>
      </div>
      <div className='our-category-first-div second-div-margin'>
        <div className='category-card'>
          <img src="https://i.ibb.co/cb4nFYF/close-up-woman-closing-jar-with-organic-pasta.jpg" className='categorie-images' alt='Grocery'/>
          <div className='category-inside-container'>
              <h1 className='categories-inside-heading'>Grocery</h1>
              <button className='Shop-Now-Button'onClick={GotoProductsWithcategory}>Shop Now</button>
          </div>
        </div>
        <div className='category-card'>
          <img src="https://i.ibb.co/Ch4Qmj8/front-view-kid-playing-with-wooden-toyds.jpg" className='categorie-images' alt='Toys'/>
          <div className='category-inside-container'>
              <h1 className='categories-inside-heading'>Toys</h1>
              <button className='Shop-Now-Button'onClick={GotoProductsWithcategory}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 className='Our-categories-heading'>Top Products</h1>
      <div className='home-carousel'>
        <Slider slides={slideData} heading="TopProducts Slider"/>
      </div>
    </div>
    <Footer/>
  </>)
}

export default (props)=>{
  const navigate=useNavigate();
  return(<Home {...props} navigate={navigate}/>)
}