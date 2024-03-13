import { fetchAPI } from '../services/awesomeapi';
import { Currency } from '../components/types';
import { Keys } from '../redux/types';

export const getCurency = async () => {
  const response = await fetchAPI();
  const filteredCurrencies: Currency[] = Object.entries<any>(response) // Definindo o tipo de value como any
    .filter(([key]) => key !== 'USDT')
    .map(([key, value]) => ({ code: key, name: value.name, ask: value.ask }));
  return filteredCurrencies;
};

export const getCurencyFormatInput = async (): Promise<Keys[]> => {
  const data = await getCurency();
  const formatInput: Keys[] = data.map((element: any) => element.code);
  return formatInput;
};
