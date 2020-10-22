import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Auth from './pages/Auth/index'
import ForgotPassword from './pages/ForgotPassword/index'
import ResetPassword from './pages/ResetPassword/index'
import Cart from './pages/Cart/index'
import Product from './pages/Product/index'
import UpdateProduct from './pages/UpdateProduct/index'
import UserProfile from './pages/UserProfile/index'
import AddProduct from './pages/AddProduct/index'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/newin" component={Home} />
    <Route exact path="/women" component={Home} />
    <Route exact path="/men" component={Home} />
    <Route exact path="/kids" component={Home} />
    <Route exact path="/auth" component={Auth} />
    <Route exact path="/auth/forgot-password" component={ForgotPassword} />
    <Route exact path="/auth/reset-password/:token" component={ResetPassword} />
    <Route exact path="/checkout/cart" component={Cart} />
    <Route exact path="/products/:productId" component={Product} />
    <Route exact path="/products/update/:productId" component={UpdateProduct} />
    <Route exact path="/user/:userId" component={UserProfile} />
    <Route exact path="/admin/addnewproduct" component={AddProduct} />
  </Switch>
)
export default Routes