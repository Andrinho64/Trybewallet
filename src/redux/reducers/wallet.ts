// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCY_SUCCESS, EXPENSE_CONSTRUCTOR } from '../actions';
import { IExpensive, State } from '../types';

const INITIAL_STATE: State = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

interface IWalletData {
  type: string,
  payload: any,
}

const walletReducer = (state = INITIAL_STATE, { type, payload }: IWalletData) => {
  switch (type) {
    case CURRENCY_SUCCESS:
      return {
        ...state, currencies: payload,
      };
    case EXPENSE_CONSTRUCTOR:
      return {
        ...state, expenses: [...state.expenses, payload],
      };
    default:
      return state;
  }
};

export default walletReducer;
