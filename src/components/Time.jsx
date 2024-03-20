import styled from 'styled-components';
import { motion } from 'framer-motion';

import { getTimeOfDayIcon, getTimeOfDayString, getTimeHours, getTimeMinutes, rem } from '../utils';
import { timeMotion } from '../motion';

export const Time = ({ time, ipBase }) => {
  return (
    <Container className='time-container' {...timeMotion.container}>
      <Text className='time-text'>
        <motion.img src={`/icons/icon-${getTimeOfDayIcon(time)}.svg`} {...timeMotion.icon} />
        <motion.h4 {...timeMotion.text}>
          Good {getTimeOfDayString(time)}
          <span>, it&apos;s currently</span>
        </motion.h4>
      </Text>

      <Clock className='time-clock'>
        <motion.h1 key={time} {...timeMotion.time}>
          {getTimeHours(time)}<motion.span {...timeMotion.blink}>:</motion.span>{getTimeMinutes(time)}
        </motion.h1>{' '}
        <motion.h5 {...timeMotion.zone}>{time.abbreviation}</motion.h5>
      </Clock>

      <motion.h3 {...timeMotion.location}>
        In {ipBase.location.city.name}, {ipBase.location.country.alpha2}
      </motion.h3>
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

    span {
      @media (max-width: ${rem(600)}) {
        display: none;
      }
    }
  }

  /* Time */
  h1 {
    display: inline-block;

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
    display: inline-block;
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

const Text = styled(motion.div)`
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

const Clock = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: ${rem(11)};
`;
