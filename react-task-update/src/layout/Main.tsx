import { Component } from 'react'
import { connect } from 'react-redux'
// import { homepageActions } from '../actions'
import { NavigationBar } from './Header'
import { FullPageLoader } from './FullPageLoader'
import { navbarState } from '../interfaces'
import CashMenu from './DropDownMenus/CashMenu'
import CartMenu from './DropDownMenus/CartMenu'
import './Main.css'

interface IMainLayoutProps {
  navbar: navbarState
  children: any
  // getCurrencies: any
  // getProductsTable: any
  // restoreCart: any
}

class MainLayout extends Component<IMainLayoutProps> {
  // async componentDidMount() {
  //   await this.props.getCurrencies()
  //   await this.props.getProductsTable('')
  //   await this.props.restoreCart()
  // }

  render(): JSX.Element {
    const { cartMenuToggle } = this.props.navbar
    const childrenClassName = cartMenuToggle ? 'children disabled' : 'children';
    const footerClassName = cartMenuToggle ? 'footer disabled' : 'footer'
    return (
      <div className="page-layout">
        <FullPageLoader />
        <NavigationBar />
        <CashMenu />
        <CartMenu />
        <div className={childrenClassName}>{this.props.children}</div>
        <footer className={footerClassName} />
      </div>
    )
  }
}

function mapState(state: any) {
  const { navbar } = state
  return { navbar }
}

const actionCreators = {
  // getCurrencies: homepageActions.getCurrencies,
  // getProductsTable: homepageActions.getProductsTable,
  // restoreCart: homepageActions.restoreCart,
}

const connectedMainLayout = connect(mapState, actionCreators)(MainLayout)
export { connectedMainLayout as MainLayout }
