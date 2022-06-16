import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {



  // fetch data in the index.tsx file
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web development</td>
            <td className="deposit">R$12.000</td>
            <td>Development</td>
            <td>20/09/2021</td>
          </tr>

          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$1.100</td>
            <td>Home</td>
            <td>24/09/2021</td>
          </tr>

        
        </tbody>
      </table>
    </Container>
  )
}