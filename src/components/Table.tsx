import { useSelector } from 'react-redux';
import { IStorage } from '../redux/types';
import { getValueConvert } from '../utils/servicesCurencies';

function Table() {
  const storeGlobal = useSelector((state: IStorage) => state.wallet.expenses);

  return (
    <>
      <div>Table</div>
      <table width="500">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {storeGlobal.map((el, i) => (
            <tr key={ i }>
              <td>{ el.description }</td>
              <td>{ el.tag }</td>
              <td>{ el.method }</td>
              <td>{ Number(el.value).toFixed(2) }</td>
              <td>{ el.exchangeRates[el.currency].name }</td>
              <td>{ Number(el.exchangeRates[el.currency].ask).toFixed(2) }</td>
              <td>{ Number(getValueConvert(el)).toFixed(2) }</td>
              <td>Real</td>
            </tr>)) }
        </tbody>
      </table>
      ;
    </>
  );
}

export default Table;
