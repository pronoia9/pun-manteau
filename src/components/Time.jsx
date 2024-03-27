import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SplitText } from '../components';
import { timeMotion } from '../motion';
import { getTimeOfDayIcon, getTimeOfDayString, getTimeHours, getTimeMinutes, rem } from '../utils';

export const Time = ({ time, ipBase }) => {
  return (
    <Container className='time-container' layout {...timeMotion.container}>
      <Text className='time-text'>
        <motion.img src={`/icons/icon-${getTimeOfDayIcon(time.datetime)}.svg`} {...timeMotion.icon} />
        <SplitText text={`Good ${getTimeOfDayString(time.datetime)}`} elementType='h4' childrenProps={{ className: 'extra' }}>
          , it&apos;s currently
        </SplitText>
      </Text>

      <Clock className='time-clock'>
        <SplitText elementType='h1' key={time} text={`${getTimeHours(time.datetime)}:${getTimeMinutes(time.datetime)}`} />{' '}
        <motion.h5 {...timeMotion.zone}>{time.abbreviation}</motion.h5>
      </Clock>

      <SplitText elementType='h3' text={`In ${ipBase.location.city.name}, ${ipBase.location.country.fips}`} />
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};

  @media (max-width: ${rem(1000)}) {
    gap: ${rem(0)};
  }

  /* Into text */
  h4 {
    @media (max-width: ${rem(768)}) {
      font-size: ${rem(18)};
    }

    @media (max-width: ${rem(480)}) {
      font-size: ${rem(15)};
    }

    .extra {
      @media (max-width: ${rem(600)}) {
        display: none;
      }
    }
  }

  /* Time */
  h1 {
    @media (max-width: ${rem(700)}) {
      font-size: ${rem(150)};
      line-height: ${rem(150)};
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(100)};
      line-height: ${rem(125)};
    }
  }

  /* IDK, daylight savings? */
  h5 {
    font-size: ${rem(40)};
    font-weight: lighter;
    line-height: ${rem(28 * 2)};

    @media (max-width: ${rem(1000)}) {
      font-size: ${rem(32)};
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(15)};
    }
  }

  /* Location */
  h3 {
    @media (max-width: ${rem(1000)}) {
      font-size: ${rem(18)};
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(15)};
    }
  }
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
`;
