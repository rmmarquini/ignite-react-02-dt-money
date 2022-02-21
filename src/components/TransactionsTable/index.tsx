import { useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Routeasy</td>
            <td className="deposit">R$8.624,77</td>
            <td>Salário</td>
            <td>01/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel apto 106 Edifício Málaga</td>
            <td className="withdraw">- R$1.000,00</td>
            <td>Moradia</td>
            <td>10/02/2022</td>
          </tr>

          <tr>
            <td>Fatura Condomínio Orypaba</td>
            <td className="withdraw">- R$500,00</td>
            <td>Moradia</td>
            <td>11/02/2022</td>
          </tr>

          <tr>
            <td>Resgate Binance</td>
            <td className="deposit">R$3.600,00</td>
            <td>Investimentos</td>
            <td>12/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}