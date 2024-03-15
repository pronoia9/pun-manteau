import styled from 'styled-components';

import { getTimeOfDayIcon, getTimeOfDayString, getTimeHours, getTimeMinutes, rem } from '../utils';

export const Time = ({ time, ipBase }) => {
  return (
    <Container>
      <Text>
        <img src={`/icons/icon-${getTimeOfDayIcon(time)}.svg`} />
        <h4>Good {getTimeOfDayString(time)}, it&apos;s currently</h4>
      </Text>

      <Clock>
        <h1 key={time}>
          {getTimeHours(time)}:{getTimeMinutes(time)}
        </h1>{' '}
        <h5>{time.abbreviation}</h5>
      </Clock>

      <h3>
        In {ipBase.location.city.name}, {ipBase.location.country.alpha2}
      </h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
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
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: ${rem(11)};

  h1,
  h5 {
    display: inline-block;
  }

  h5 {
    font-size: ${rem(40)};
    font-weight: lighter;
    line-height: ${rem(28 * 2)};
  }
`;
