import {
  ADD_TO_CART,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  REMOVE_ITEM,
  CLEAR_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  TOTAL_PRICE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  products: [],
  cartArr: [],
  isError: false,
  totalPrice: 0,
  totalQuantity:0   // I didn't use yet
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case PRODUCT_SUCCESS: {
      console.log(payload);
      return { ...state, isLoading: false, products: payload };
    }
    case ADD_TO_CART: {
      console.log(typeof payload);
      const item = state.products.filter((el) => el.id === payload);
      console.log(item, "is single item for addTocart");
      const newCartArr = [...state.cartArr, item[0]];
      console.log(newCartArr);
      return { ...state, isLoading: false, cartArr: newCartArr };
    }
    case REMOVE_ITEM: {
      const newArr = [...state.cartArr];
      const afterRemove = newArr.filter((el) => el.id !== payload);
      return { ...state, isLoading: false, cartArr: afterRemove };
    }
    case CLEAR_CART: {
      return { ...state, isLoading: false, cartArr: [] };
    }
    case INCREMENT_QUANTITY: {
      const updatedQuan = state.cartArr.map((el) =>
        el.id === payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      return { ...state, isLoading: false, cartArr: updatedQuan };
    }
    case DECREMENT_QUANTITY: {
      const updatedQuan = state.cartArr
        .map((el) =>
          el.id === payload ? { ...el, quantity: el.quantity - 1 } : el
        )
        .filter((el) => el.quantity !== 0);
      return { ...state, isLoading: false, cartArr: updatedQuan };
    }
    case TOTAL_PRICE: {
      const {total_price,total_Quantity} = state.cartArr.reduce(
        (accum, curr) =>{ accum.total_price += curr.quantity * curr.price
          accum.total_Quantity+=curr.quantity
          return accum
        },
        {total_price:0,
          total_Quantity:0
        }
      );
      return { ...state, isLoading: false, totalPrice: total_price,totalQuantity:total_Quantity };
    }
    default: {
      return state;
    }
  }
};
