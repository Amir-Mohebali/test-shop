import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item';
import './home.css'

const categories = document.getElementsByClassName("items");
const tablinks = document.getElementsByClassName("tablink");

const Home = () => {
  const [data, setData] = useState()
  const [error, setError] = useState('')

  useEffect(()=> {
    fetch("https://my-json-server.typicode.com/Amir-Mohebali/shop-api/products")
      .then((res) => {return res.json()})
      .then((resp) => setData(resp))
      .catch((err) => setError(err))
  }, [])

  const openProductCategory = (event, category) => {
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = "none";
    }
    for (let i = 0; i < categories.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(category).style.display = "flex";
    event.target.classList.add("active");
  }

  return (
    <div className='container'>
        <h1>Home</h1>
        <div className="products">
            <h2 className="title">Our Products</h2>
            <div className="products-container">
                <div className="bar">
                  <button className="tablink active" onClick={(e)=> openProductCategory(e,'Phones')}>Phones</button>
                  <button className="tablink" onClick={(e)=> openProductCategory(e,'Laptops')}>Laptops</button>
                  <button className="tablink" onClick={(e)=> openProductCategory(e,'TVs')}>TVs</button>
                </div>
                <div id="Phones" className="items active">
                  {data 
                    ? data
                        .filter(item => item.Cat === 'phone')
                        .map(item => <Item data={item} />)
                    : <h3>{error}</h3>
                  }
                </div>

                <div id="Laptops" className="items">
                  {data 
                    ? data
                        .filter(item => item.Cat === 'laptop')
                        .map(item => <Item data={item} />)
                    : <h3>{error}</h3>
                  }
                </div>
                
                <div id="TVs" className="items">
                  {data 
                    ? data
                        .filter(item => item.Cat === 'tv')
                        .map(item => <Item data={item} />)
                    : <h3>{error}</h3>
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home