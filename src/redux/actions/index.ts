import { fetchAPI } from '../../services/awesomeapi';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const CURRENCY_ERROR = 'CURRENCY_ERROR';
export const EXPENSE_CONSTRUCTOR = 'EXPENSE_CONSTRUCTOR';

export const saveEmail = (currentEmail: any) => ({
  type: SAVE_EMAIL,
  payload: currentEmail,
});

export const currencySuccess = (payload: any) => ({
  type: CURRENCY_SUCCESS,
  payload,
});

export const currencyError = (payload: any) => ({
  type: CURRENCY_ERROR,
  payload,
});

export const expenseConstructor = (currentState: any) => ({
  type: EXPENSE_CONSTRUCTOR,
  payload: currentState,
});

export const getCurrenciesThunk = () => async (dispatch: any) => {
  try {
    const response = await fetchAPI();
    dispatch(currencySuccess(response));
  } catch (error) {
    dispatch(currencyError(error));
  }
};
