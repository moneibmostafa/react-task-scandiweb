import { AppDispatch } from '../store'
import { cartConstants } from '../constants';
import { history } from "../history";

export const cartActions = {
    addToCart,
    changeItemCount,
    goToCart,
};

  function addToCart(item: any, selectedAttribute: string) {
    return (dispatch: AppDispatch) => {
      dispatch({type: cartConstants.ADD_TO_CART, item, selectedAttribute});
    };
  }

  function changeItemCount(count: number, itemName: string, selectedAttribute: string) {
    return (dispatch: AppDispatch) => {
      dispatch({type: cartConstants.CHANGE_ITEM_COUNT, count, itemName, selectedAttribute});
    };
  }

  function goToCart() {
    return (dispatch: AppDispatch) => {
      history.push(`/cart`);
      dispatch({type: cartConstants.GO_TO_CART});
    };
  }