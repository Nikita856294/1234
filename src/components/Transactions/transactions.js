import styled from 'styled-components';

const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  background-color: white;
  width: 50%;
`;
const Thead = styled.thead`
  border: 1px solid black;
  background-color: blue;
`;
const Tr = styled.tr`
  border: 1px solid black;
`;
const Th = styled.th`
  padding: 15px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
const Tbody = styled.tbody`
  border: 1px solid black;
`;
const Td = styled.td`
  padding: 15px;
  border: 1px solid black;
`;
export { Table, Thead, Tr, Th, Tbody, Td };
