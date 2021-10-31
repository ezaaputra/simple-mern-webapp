import './products.css';
import axios from '../../axios';
import React, { useState, useEffect } from 'react';
import ProductItem from '../../components/productItem/ProductItem';

function Products() {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({})

  const noProducts = !products || (products && products.length === 0)

  // GET
  const getProduct = async () => {
    const response = await axios.get("/products")
      .catch((err) => { console.log(err) })

    if (response && response.data) {
      setProducts(response.data)
    }
  }

  // POST
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const addProduct = async () => {
    const response = await axios.post('/products', formData)
      .catch((err) => console.log(err))

    if (response) {
      getProduct()
    }
  }

  // DELETE
  const deleteProduct = async (id) => {
    const response = await axios.delete(`/products/${id}`)
      .catch((err) => console.log(err))
    
    if (response) {
      getProduct()
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className="container">
      <h3>Product</h3>
      {!noProducts && products.map((product, index) => (
        <ProductItem key={index} {...product} onDelete={deleteProduct} />
      ))}
      <h3>Add Product</h3>
      <form onSubmit={addProduct} >
        <label htmlFor="productName">Name</label>
        <input type="text" name="name" placeholder="Insert product name" onChange={handleChange} />
        <label htmlFor="qty">Quantity</label>
        <input type="text" name="qty" placeholder="Insert quantity" onChange={handleChange} />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" placeholder="Insert price" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Products;
