import {useSelector, useDispatch} from 'react-redux';
import { increaseQn, decreaseQn, removeProduct } from '../redux/CartSlice';
import './cart.css'
import { Link } from 'react-router-dom';

function Cart() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const ImagePath = '../../src/assets/';

  const count = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
  }, 0);

  const total = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
  }, 0);

  const discount = cart.reduce((acc, curr) => {
        return acc + curr.price * (curr.discount ? curr.discount/100 * curr.quantity : 0);
  }, 0);

  const finalPrice = cart.reduce((acc, curr) => {
    return acc + (curr.price * (curr.discount ? 1-curr.discount/100 : 1)) * curr.quantity;
}, 0);

  const showPrice = (number) => {
    return Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  console.log('cart', cart)
  return (
    <>
        <div className="container">
            <div className="cart">
                <div className="cart-list">
                    <h3>Your Shopping Cart</h3>
                    <div className="row header">
                        <div className="col">
                            <h5>Product</h5>
                        </div>
                        <div className="col">
                            <h5>Price</h5>
                        </div>
                        <div className="col">
                            <h5>Quantity</h5>
                        </div>
                        <div className="col">
                            <h5>total</h5>
                        </div>
                        <div className="col"></div>
                    </div>
                    {cart.map(item => {
                        return (
                            <div className="row">
                                <div className="col card-item-desc">
                                    <div className="card-item-image">
                                        <img src={`${ImagePath}${item.images[0]}`} alt="" />
                                    </div>
                                    <div className="card-item-info">
                                        <Link to={`/products/${item.Cat}/${item.id}`}>
                                            <h3>{`${item.Brand} ${item.Model}`}</h3>
                                        </Link>
                                        {Object.keys(item.feature).map((feat) => {
                                            return (
                                              <div className="feature">
                                                  {/* <h5>{`${opt} :`}</h5> */}
                                                  <h4>{feat} :</h4>
                                                  {item.feature[feat]}
                                              </div>
                                            )}
                                        )}
                                    </div>
                                </div>
                                <h5 className="col card-item-price">
                                    {item.discount ? showPrice(item.price * (1 - item.discount/100)) : showPrice(item.price)}
                                </h5>
                                <div className="col card-item-quantity">
                                    <button onClick={() => { 
                                        if(item.quantity > 1) dispatch(decreaseQn(item))
                                        // item.quantity > 1 
                                        // ? dispatch(decreaseQn(item))
                                        // : dispatch(removeProduct(item.id))
                                    }}>
                                        -
                                    </button>
                                    <h5>{item.quantity}</h5>
                                    <button onClick={() => dispatch(increaseQn(item))}>+</button>
                                </div>
                                <h5 className="col card-item-total">{item.discount ? showPrice(item.price * (1 - item.discount/100) * item.quantity) : showPrice(item.price * item.quantity)}</h5>
                                <div className="col">
                                    <button className="card-item-remove" onClick={()=> dispatch(removeProduct(item.id))}>&times;</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <div className="cart-summary-item">
                        <h4>Items</h4>
                        <div>{showPrice(count)}</div>
                    </div>
                    <div className="cart-summary-item">
                        <h4>Subtotal</h4>
                        <div>{showPrice(total)}</div>
                    </div>
                    <div className="cart-summary-item">
                        <h4>Discount</h4>
                        {discount > 0 ? <div>{showPrice(discount)}</div> : <div>0</div>}
                    </div>
                    <div className="cart-summary-item">
                        <h4>Total</h4>
                        <div>{showPrice(finalPrice)}</div>
                    </div>
                    <Link to="/cart" className='secondary-btn'>Purchase</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart