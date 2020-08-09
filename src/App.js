import React, { useState, useEffect } from 'react';
import Routers from './routers'
import productApiRequest from './api/productApi';
import categoryApiRequest from './api/categoryApi';
import Swal from 'sweetalert2';

const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  

  const getProducts = async () => {
    try {
      const { data } = await productApiRequest.getAll();
      setProducts(data);
      localStorage.setItem('products', JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getCategories = async () => {
    const { data } = await categoryApiRequest.getAll();
    setCategories(data);
    localStorage.setItem('categories', JSON.stringify(data));
    console.log(data);
  }


  const onHandleRemove = (_id) => {
    Swal.fire({
      title: 'Do you want delete this product ?',
      text: "Delete it forever",
      icon: 'warning',
      position: 'center',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        const { data } = await productApiRequest.remove(_id);
        console.log(data);
        if (data) {
          const newProducts = products.filter(product => product._id !== _id)
          setProducts(newProducts);
          Swal.fire({
            title: 'Deleted!',
            text: "Your product has been deleted.",
            icon: 'success',
            position: 'bottom-end',

          })
        }
      }
    })
  }

  const onHandleAdd = async (product) => {
    const { data } = await productApiRequest.create(product);
    const newProduct = await productApiRequest.getProductById(data._id);
    console.log(newProduct);
    if (newProduct.data) {
      setProducts([
        ...products,
        newProduct.data
      ]);
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const onHandleUpdate = async (_id, product) => {
    const { data } = await productApiRequest.update(_id, product);
    console.log(data);
    if (data) {
      const newProducts = products.map(pro => (pro._id === _id ? { ...data } : pro));
      setProducts(newProducts);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const onHandleAddCategory = async (category) => {
    const newCategory = await categoryApiRequest.create(category);
    console.log(newCategory)
    const {data} = await categoryApiRequest.getCategoryById(newCategory.data._id);
    if (data) {
      localStorage.setItem('categories', JSON.stringify([
        ...categories,
        data
      ]))
      setCategories([
        ...categories,
        data
      ]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Category Created Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const onHandleRemoveCategory = _id => {
    Swal.fire({
      title: 'Do you want delete this category ?',
      text: "Delete it forever",
      icon: 'warning',
      position: 'center',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        const {data} = await categoryApiRequest.remove(_id);
        
        if (data) {
          const newCategories = categories.filter(category => category._id !== _id);
          const newProducts = products.filter(product => product.category._id !== _id );
          setCategories(newCategories);
          setProducts(newProducts)
          console.log(data);
          Swal.fire({
            title: 'Deleted!',
            text: "Your category has been deleted.",
            icon: 'success',
            position: 'bottom-end',
          })
        }
      }
    })
  }

  const onHandleUpdateCategory = async (_id, category) => {
    const {data} = await categoryApiRequest.update(_id, category);
    console.log(data);
    if(data){
      const newCategories = categories.map(cate => (cate._id === _id ? data : cate))
      setCategories(newCategories);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Category Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className="App">
      <Routers
        products={products}
        categories={categories}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}
        onAddCategory={onHandleAddCategory}
        onRemoveCategory={onHandleRemoveCategory}
        onUpdateCategory={onHandleUpdateCategory}
      />
    </div>
  )

}
export default App;