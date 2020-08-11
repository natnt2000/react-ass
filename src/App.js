import React, { useState, useEffect } from 'react';
import Routers from './routers'
import productApiRequest from './api/productApi';
import categoryApiRequest from './api/categoryApi';
import Swal from 'sweetalert2';

const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6)
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = pageNumber => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber)
  };

  const onHandleAddToCart = (_id) => {
    const product = products.find(product => product._id === _id)
    if(!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([{...product, quantity: 1}]))
      setCart([{...product, quantity: 1}]);
    }else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const existedProduct = cart.find(product => product._id === _id);
      if(existedProduct){
        const newCart = cart.map(pro => (pro._id === _id ? {...pro, quantity: pro.quantity+1}  : pro));
        console.log(newCart[0].quantity);
        localStorage.setItem('cart', JSON.stringify(newCart))
        setCart(newCart);
      }else{
        localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
        setCart([...cart, {...product, quantity: 1}]);
      }
    }
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add To Cart Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const onHandleRemoveItemInCart = _id => {
    Swal.fire({
      title: 'Do you want remove this item in cart ?',
      text: "Delete it forever",
      icon: 'warning',
      position: 'center',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if(result.value) {
        const newCart = cart.filter(item => item._id !== _id)
        localStorage.setItem('cart', JSON.stringify(newCart));
        setCart(newCart);
        if(JSON.parse(localStorage.getItem('cart')).length === 0) localStorage.removeItem('cart');
        Swal.fire({
          title: 'Deleted!',
          text: "Your item has been deleted.",
          icon: 'success',
          position: 'top-end',
        })
      }
    })
    
  }

  const onHandleRemoveAllItem = () => {
    Swal.fire({
      title: 'Do you want remove all item in cart ?',
      text: "Delete it forever",
      icon: 'warning',
      position: 'center',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if(result.value) {
        setCart([]);
        localStorage.removeItem('cart');
        Swal.fire({
          title: 'Deleted!',
          text: "All item has been removed.",
          icon: 'success',
          position: 'top-end',
        })
      }
    })
    
  }

  const onHandleUpdateItemInCart = (data) => {
    console.log(data);
    const newCart = cart.map((item, index) => ({...item, quantity: data[index]}));
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Updated Quantity Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const onHandleRemoveCartInLocalStorage = () => {
    setCart([]);
    localStorage.removeItem('cart');
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
        currentProducts={currentProducts}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        cart={cart}
        onAddToCart={onHandleAddToCart}
        onRemoveItemInCart={onHandleRemoveItemInCart}
        onRemoveAllItem={onHandleRemoveAllItem}
        onUpdateItemInCart={onHandleUpdateItemInCart}
        onRemoveCartInLocalStorage={onHandleRemoveCartInLocalStorage}
      />
    </div>
  )

}
export default App;