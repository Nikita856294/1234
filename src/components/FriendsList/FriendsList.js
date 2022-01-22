import { Section, List, Item, Status, Img, Name } from './FriendsListStyle';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
const FriendList = ({ friends }) => {
  return (
    <Section>
      <List className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <Item className="item" key={id}>
              <Status className="status" isOnline={isOnline}>
                <RiCheckboxBlankCircleFill />
              </Status>
              <Img className="avatar" src={avatar} alt="User avatar" width="48px" />
              <Name className="name">{name}</Name>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

export { FriendList };
