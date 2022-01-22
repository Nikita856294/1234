// eslint-disable-next-line
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 15px;
`;
const Img = styled.img`
  height: 40px;
  width: 40px;
`;
const Description = styled.div`
  background: white;
  padding: 40px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: gray;
  margin-top: 10px;
`;

const Stats = styled.ul`
  display: flex;

  padding: 10px 10px;
  border-bottom: 2px;
  border-color: black;
  background: #32dbb1;
  margin: 0;
`;
const StatsItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Label = styled.span`
  font-size: 12px;
  margin-right: 5px;
  color: gray;
`;
const Quantity = styled.span`
  font-size: 12px;
  font-weight: bold;
`;
export { Container, Img, Description, Name, Text, Stats, StatsItem, Label, Quantity };
