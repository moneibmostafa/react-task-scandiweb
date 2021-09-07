import { AppDispatch } from '../store'
import { navbarConstants } from '../constants';

export const navbarActions = {
    handleCartMenuToggle,
    handleCashMenuToggle,
};

  function handleCartMenuToggle() {
    return (dispatch: AppDispatch) => {
      dispatch({type: navbarConstants.CART_MENU_TOGGLE});
    };
  }

  function handleCashMenuToggle() {
    return (dispatch: AppDispatch) => {
      dispatch({type: navbarConstants.CASH_MENU_TOGGLE});
    };
  }