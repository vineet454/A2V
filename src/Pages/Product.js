import React from 'react'
import { ProductList } from "../heplers/ProductList"
import ProductItem from "../components/ProductItem";
import '../Styles/Product.css';

function Product() {
  return (
    <div className='product'>
      <h1 className='productTitle'>Our Products</h1>
      <div className='productList'>
        {ProductList.map((productList, key) => {
          return <ProductItem 
          key={key}
          image={productList.image} 
          name={productList.name} 
          price={productList.price} />
        })}
      </div>
    </div>
  )
}

export default Product