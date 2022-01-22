import React from 'react';

import PropTypes from 'prop-types';
import {
  Img,
  Container,
  Name,
  Text,
  Stats,
  StatsItem,
  Description,
  Label,
  Quantity,
} from './ProfileStyles';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container className="profile">
      <Description className="description">
        <Img src={avatar} alt="User avatar" className="avatar" />

        <Name className="name">{username}</Name>
        <Text className="tag">{tag}</Text>
        <Text className="location">{location}</Text>
      </Description>

      <Stats className="stats">
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsItem>
      </Stats>
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
