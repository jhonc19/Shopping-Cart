import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import AplicationState from './context/AplicationState';
import Product from './pages/Product';

function App() {
  return (
    <AplicationState>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/products" component={ProductList} />
            <Redirect to="/products" />
          </Switch>
        </Router>
      </Layout>
    </AplicationState>
  );
}

export default App;
