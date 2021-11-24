import { Component } from 'react';
import { Router, Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../history';
import { homepageActions } from '../../actions'
import { AppState } from '../../reducers';
import { routeConstants } from '../../constants';
import { ErrorBoundary } from '../../errorBoundary';

import ProductsTablePage from '../ProductsPage';
import ProductPage from '../ProductPage';
import CartPage from '../CartPage';

interface AppProps {
  getCurrencies: any
  getProductsTable: any
  restoreCart: any
}

export class AppComponent extends Component<AppProps> {
  constructor(props: any) {
    super(props);
    history.listen((location: any, action: any) => {});
  }

  async componentDidMount() {
    await this.props.getCurrencies()
    await this.props.getProductsTable('')
    await this.props.restoreCart()
  }

  render(): JSX.Element {
    return (
      <div id='page-wrapper' className='gray-bg'>
        <ErrorBoundary>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path={routeConstants.HOMEPAGE}
                component={ProductsTablePage}
              />
              <Route
                exact
                path={routeConstants.PRODUCT_PAGE}
                component={ProductPage}
              />
              <Route
                exact
                path={routeConstants.CART_PAGE}
                component={CartPage}
              />
              <Redirect from='*' to={routeConstants.HOMEPAGE} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </div>
    );
  }
}

function mapState(state: AppState) {
  return state;
}

const actionCreators = {
  getCurrencies: homepageActions.getCurrencies,
  getProductsTable: homepageActions.getProductsTable,
  restoreCart: homepageActions.restoreCart,
};

const connectedApp = connect(mapState, actionCreators)(AppComponent);
export { connectedApp as App };
