import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './header.css'

const Header = () => {

  const cart = useSelector((state) => state.cart)
  console.log(cart.length)
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/products/tv'>Tvs</Link>
        <Link to='/products/phone'>Phones</Link>
        <Link to='/products/laptop'>Laptops</Link>
        <Link to='/cart'>{cart.length}</Link>
    </div>
  )
}

export default Header