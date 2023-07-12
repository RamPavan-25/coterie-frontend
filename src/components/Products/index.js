import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'
import Cookies from 'js-cookie'
import { Navigate,useLocation } from 'react-router-dom'
import Header from '../Header'

import './index.css'
import Footer from '../Footer'

const Products = () =>{
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return(
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealsSection />
      <AllProductsSection />
    </div>
    <Footer/>
  </>
)
}

export default Products
