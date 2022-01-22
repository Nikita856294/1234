import styled from 'styled-components';
const Section = styled.section`
  display: flex;

  padding: 15px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 2px 0px;
`;

const Status = styled.span`
  margin-right: 10px;
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

const Name = styled.p`
  margin-left: 10px;
  font-weight: bold;
`;

export { Section, List, Item, Status, Img, Name };
