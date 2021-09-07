import { AnyAction } from 'redux'
import { navbarConstants } from '../constants';
import { navbarState } from '../interfaces';
  
  const initialState: navbarState = {
    cartMenuToggle: false,

    cashMenuToggle: false,
    cashItems: [],

    errors: {},
  }

  export function navbar(state = initialState, action: AnyAction) {
    switch (action.type) {   
        ///////////////////// CART VIEW ////////////////////
        case navbarConstants.CART_MENU_TOGGLE:
            return { ...state, cartMenuToggle: !state.cartMenuToggle, cashMenuToggle: false }   
            
        ///////////////////// CASH VIEW ////////////////////
        case navbarConstants.CASH_MENU_TOGGLE:
            return { ...state, cashMenuToggle: !state.cashMenuToggle, cartMenuToggle: false }             
        
        ///////////////////// CLEAR STATE ///////////////////
        case navbarConstants.CLEAR:
          return { ...initialState };                  
        default:
          return state;
    }
  }
  