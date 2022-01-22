import styled from 'styled-components';
import { RandomHexColor } from './RandomHexColor';
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 4px;
`;
const Title = styled.h2`
  color: green;
  font-size: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  display: flex;

  flex-direction: column;
  padding: 20px;
  background-color: #${RandomHexColor};
`;
const Label = styled.span`
  font-size: 24px;
`;
const Percentage = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export { Section, Title, List, Item, Label, Percentage, TitleDiv };
