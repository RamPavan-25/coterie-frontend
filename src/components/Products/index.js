import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import Header from '../Header'

import './index.css'

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
  </>
)
}

export default Products
