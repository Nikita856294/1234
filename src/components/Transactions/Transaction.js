import { Table, Thead, Tr, Th, Tbody, Td } from './TransactionStyled';

const Transaction = ({ transactions }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export { Transaction };
