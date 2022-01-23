import React from 'react';
import { Section, Title, List, Item, Label, Percentage, TitleDiv } from './StatisticsStyled';

import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      <TitleDiv>
        {title && <Title className="title">{title}</Title>}
        <List className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <Item className="item" key={id}>
                <Label className="label">{label}</Label>
                <Percentage className="percentage">{percentage}%</Percentage>
              </Item>
            );
          })}
        </List>
      </TitleDiv>
    </Section>
  );
};

export { Statistics };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
