import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Product';
import Category from './components/category/Category';
import Order from './components/order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
