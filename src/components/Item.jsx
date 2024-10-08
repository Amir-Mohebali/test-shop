import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/CartSlice';
import './item.css'

const Item = ({ data }) => {
  const { Cat, id, Brand, Model, Options, Specs, price, discount, isNew, images } = data;
  const ImagePath = '../../src/assets/';

  const dispatch = useDispatch()

  const showPrice = (number) => {
    return Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const addToCart = () => {
    let productOptions = {};
    let feature = Object.keys(Specs)

    Options 
    ? Object.keys(Options).map((opt) => {
        productOptions = {
            ...productOptions,
            [opt.toString()]: Object.keys(Options[opt][0])
        }
    })
    : productOptions = {
        ...productOptions,
        [feature[0].toString()]: Specs[feature[0]]           
    }
    dispatch(addProduct({...data, feature: productOptions, quantity: 1}))
  }

  return (
    <div className="item-box">
        <div className="item-image">
            <Link to={`/products/${Cat}/${id}`}>
                <img src={`${ImagePath}${images[0]}`} alt="" />
            </Link>
            <div className="labels">
                {isNew ? <span className="new">new</span> : null}
                {discount ? <span className="percent">{`${discount}%`}</span> : null}
            </div>
        </div>
        <div>
            <div className="item-body">
                <span className="brand">{Brand}</span>
                <h3 className="name">{Model}</h3>
            </div>
            <div className="item-price">
                <div>
                    <span className='final-price'>{discount ? `$${showPrice(price*(1-discount/100))}` : `$${showPrice(price)}`}</span>
                    {discount ? <span className='old-price'><del>{`$${showPrice(price)}`}</del></span> : null}
                </div>
                <Link className='primary-btn' onClick={addToCart}>Buy</Link>
            </div>
        </div>
    </div>
  )
}

export default Item