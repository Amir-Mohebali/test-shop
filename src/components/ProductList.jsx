import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

const ProductList = () => {
  const { type } = useParams()

  const [data, setData] = useState()
  const [error, setError] = useState('')
  const ImagePath = '../../src/assets/'

  useEffect(()=> {
    fetch(`https://my-json-server.typicode.com/Amir-Mohebali/shop-api/products?Cat=${type}`)
      .then((res) => {return res.json()})
      .then((resp) => setData(resp))
      .catch((err) => setError(err))
  }, [type])
  // return (
  //   <>
  //     {type === 'tv'
  //     ?<div>
  //       {items
  //         .filter(item => item.Cat === 'tv')
  //         .map(item => { 
  //           console.log(item)
  //           const {Cat, id, Brand, Model, ['Screen Size']: size, ['Display Technology']: display, Resolution, images} = item;
  //           const [key1, key2, key3, key4, key5, key6, key7] = Object.keys(item);
        
  //           return (
  //             <div>
  //               <h3>{key3}: {Brand}</h3>
  //               <h2>{key4}: {Model}</h2>
  //               <span style={{display: 'block'}}>{key5}: {size}</span>
  //               <span style={{display: 'block'}}>{key6}: {display}</span>
  //               <span style={{display: 'block'}}>{key7}: {Resolution}</span>
  //               <div style={{display: 'flex', gap:'10px', flexWrap: 'wrap'}}>
  //                 {
  //                   images.map(image => { 
  //                     return <img src={`${ImagePath}${image}`} alt="" />
  //                   })
  //                 }
  //               </div>
  //             </div>
  //           )})
  //       }
  //     </div>
  //     :null}
      
  //     {type === 'phone'
  //     ?<div>
  //       {items
  //         .filter(item => item.Cat === 'phone')
  //         .map(item => { 
  //           const {Cat, id, Brand, Model, OS, RAM, Storage, ['Rear Camera']:RCamera, ['Front Camera']:FCamera, images} = item;
  //           const [key1, key2, key3, key4, key5, key6, key7, key8, key9, key10] = Object.keys(item);

  //           return (
  //             <div>
  //               <h3>{key3}: {Brand}</h3>
  //               <h2>{key4}: {Model}</h2>
  //               <span style={{display: 'block'}}>{key5}: {OS}</span>
  //               <span style={{display: 'block'}}>{key6}: {RAM}</span>
  //               <span style={{display: 'block'}}>{key7}: {Storage}</span>
  //               <span style={{display: 'block'}}>{key8}: {RCamera}</span>
  //               <span style={{display: 'block'}}>{key9}: {FCamera}</span>
  //               <div style={{display: 'flex', gap:'10px', flexWrap: 'wrap'}}>
  //                 {
  //                   images.map(image => { 
  //                     return <img src={`${ImagePath}${image}`} alt="" />
  //                   })
  //                 }
  //               </div>
  //             </div>
  //           )})
  //       }
  //     </div>
  //     :null}
  //   </>
  // )
  console.log(data)
  return (
    <div>
      <h2>List of {type}</h2>
      <div>
        {
          data 
          ? data
            .filter(item => item.Cat === type)
            .map(({ Cat, Brand, Model, id }) => {
              return (
                <div key={id}>
                    <h3>Brand: {Brand}</h3>
                    <span>Model: {Model}</span>
                    <Link to={`/products/${Cat}/${id}`}>see details</Link>
                </div>
              )}
            )
          :<h3>{error}</h3>
          }
      </div>
    </div>
  )
}
// <div>
  /* <h2>List of {type}</h2>
  <div>
    {
      items.filter(item => {item.cat === type; console.log(item)})
        .map(({ cat, brand, model, id }) => {
          return (
            <div key={id}>
                <h3>Brand: {brand}</h3>
                <span>Model: {model}</span>
                <Link to={`/products/${cat}/${id}`}>see details</Link>
            </div>
          )}
        )}
  </div> */
// </div>

export default ProductList