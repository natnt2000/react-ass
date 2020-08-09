import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import ProductForm from '../pages/views/Admin/Products/ProductForm';
import CategoryList from '../pages/views/Admin/Categories';
import CategoryForm from '../pages/views/Admin/Categories/CategoryForm';

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import ProductDetail from '../pages/views/Main/Product/ProductDetail';
import Shop from '../pages/views/Main/Shop';
import ProductInCategory from '../pages/views/Main/Category';


const Routers = ({ products, onRemove, onAdd, onUpdate, categories, onAddCategory, onRemoveCategory, onUpdateCategory  }) => {
    const onHandleRemove = (_id) => {
        onRemove(_id)
    }
    const onHandleAdd = (product) => {
        onAdd(product);
    }
    const onHandleUpdate = (_id, product) => {
        onUpdate(_id, product);
    }
    const onHandleAddCategory = (category) => {
        onAddCategory(category);
    }
    const onHandleRemoveCategory = _id => {
        onRemoveCategory(_id);
    }

    const onHandleUpdateCategory = (_id, category) => {
        onUpdateCategory(_id, category);
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories}/>
                            </Route>
                            <Route path='/admin/products' exact>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/products/add'>
                                <ProductForm title="Add New Product" onAdd={onHandleAdd}/>
                            </Route>
                            <Route path='/admin/products/:_id/edit'>
                                <ProductForm title="Edit Product" products={products} onUpdate={onHandleUpdate}/>
                            </Route>
                            <Route path='/admin/categories' exact>
                                <CategoryList categories={categories} onRemoveCategory={onHandleRemoveCategory}/>
                            </Route>
                            <Route path='/admin/categories/add' >
                                <CategoryForm onAddCategory={onHandleAddCategory}/>
                            </Route>
                            <Route path="/admin/categories/:_id/edit">
                            <CategoryForm onUpdateCategory={onHandleUpdateCategory}/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/">
                    <LayoutMain categories={categories}>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}/>
                            </Route>
                            <Route path="/shop">
                                <Shop products={products} categories={categories}/>
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/products/:_id" >
                                <ProductDetail products={products}/>
                            </Route>
                            <Route path="/categories/:_id" >
                                <ProductInCategory categories={categories}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>

        
    )
}

Routers.propTypes = {

}

export default Routers
