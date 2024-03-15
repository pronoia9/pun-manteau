import styled from 'styled-components';

import { getTimeHours, getTimeMinutes, getTimeSeconds, isNightTime, rem } from '../utils';

export const Time = ({ time }) => {
  return (
    <Container>
      <Text>
        <img src={`/icons/icon-${isNightTime(time) ? 'moon' : 'sun'}.svg`} />
        <h4>Good {isNightTime(time) ? 'evening' : 'morning'}, it&apos;s currently</h4>
      </Text>

      <Clock>
        <h1 key={time}>
          {getTimeHours(time) || '23'}:{getTimeMinutes(time) || '14'}
        </h1>{' '}
        <h5>BST</h5>
      </Clock>

      <Location>In London, UK</Location>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${rem(17.63)};
  align-items: center;
  text-transform: uppercase;

  img {
    width: auto;
    height: ${rem(24)};
  }
`;

const Clock = styled.div`
  h1, h5 {
    display: inline-block;
  }

  h5 {
    font-size: ${rem(40)};
    font-weight: lighter;
  }
`;

const Location = styled.h3``;
