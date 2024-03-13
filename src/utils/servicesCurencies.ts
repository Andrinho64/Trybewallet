// servicesCurencies.ts

import { fetchAPI } from '../services/awesomeapi';
import { Currency } from '../components/types';
import { Keys } from '../redux/types';

let currencyData: Currency[] | null = null;
let formatInputData: Keys[] | null = null;

export const getCurency = async (): Promise<Currency[]> => {
  if (currencyData === null) {
    const response = await fetchAPI();
    currencyData = Object.entries<any>(response) // Definindo o tipo de value como any
      .filter(([key]) => key !== 'USDT')
      .map(([key, value]) => ({ code: key, name: value.name, ask: value.ask }));
  }
  return currencyData;
};

export const getCurencyFormatInput = async (): Promise<Keys[]> => {
  if (formatInputData === null) {
    const data = await getCurency();
    formatInputData = data.map((element: any) => element.code);
  }
  return formatInputData;
};
