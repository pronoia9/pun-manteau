import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { SplitText } from '../components';
import { overlayMotion } from '../motion';
import { rem } from '../utils';

export const GroupItem = ({ title, subtitle, height }) => (
  <Item className='overlay-group-item' $height={height} {...overlayMotion.item}>
    <SplitText elementType='h6' text={title} />
    <SplitText elementType='h2' text={subtitle} />
  </Item>
);

export const Overlay = ({ time, showOverlay, height }) => {
  return (
    <AnimatePresence>
      {showOverlay && (
        <Container className='overlay-container' $height={height} layout {...overlayMotion.container}>
          <Group className='overlay-group' {...overlayMotion.group}>
            <GroupItem height={height} title='Current Timezone' subtitle={time.timezone.replace('_', ' ')} />
            <GroupItem height={height} title='Day of the Year' subtitle={time.day_of_year} />
          </Group>

          <HR {...overlayMotion.hr} />

          <Group className='overlay-group' {...overlayMotion.group}>
            <GroupItem height={height} title='Day of the Week' subtitle={time.day_of_week} />
            <GroupItem height={height} title='Week Number' subtitle={time.week_number} />
          </Group>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  padding: ${({ $height }) => rem($height > 815 ? 74 : 32)} ${rem(165)}; /* Top/Bottom space + Right group's left space */
  display: flex;
  position: relative;
  flex-direction: row;
  gap: ${rem(94)};
  color: var(--c-font);
  z-index: 1;

  @media (max-width: ${rem(1000)}) {
    padding: ${rem(119)} ${rem(32)};
    gap: ${rem(80)};
  }

  @media (max-width: ${rem(768)}) {
    padding: ${rem(119)} ${rem(64)};
    gap: ${rem(80)};
  }

  @media (max-width: ${rem(560)}) {
    padding: ${rem(28)} ${rem(26)};
    flex-direction: column;
    gap: ${rem(16)};
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &:before {
    background-color: var(--c-background);
    opacity: 0.75;
  }

  &:after {
    backdrop-filter: blur(10px);
  }
`;

const Group = styled(motion.div)`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${rem(42)};

  &:first-child {
    justify-content: start;
  }

  @media (max-width: ${rem(1000)}) {
    gap: ${rem(48)};
  }

  @media (max-width: ${rem(560)}) {
    gap: ${rem(16)};
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${rem(9)};

  @media (max-width: ${rem(1000)}) {
    gap: 0;
  }

  @media (max-width: ${rem(560)}) {
    flex-direction: row;
    justify-content: space-between;
  }

  /* Title */
  h6,
  h6 > span {
    font-size: ${({ $height }) => rem($height > 815 ? 13 : 10)};
    font-weight: normal;
    text-transform: uppercase;

    @media (max-width: ${rem(1000)}) {
      line-height: 2ch;
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(10)};
    }
  }

  /* Subtitle */
  h2,
  h2 > span {
    text-align: end;
    font-size: ${({ $height }) => rem($height > 815 ? 40 : 32)};

    @media (max-width: ${rem(1000)}) {
      line-height: 2ch;
    }

    @media (max-width: ${rem(768)}) {
      font-size: ${rem(32)};
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(20)};
      /* line-height: 1.5ch; */
    }
  }
`;

const HR = styled(motion.div)`
  width: 2px;
  height: 100%;
  background-color: var(--c-secondary);
  opacity: 0.2;

  @media (max-width: ${rem(1230)}) {
    display: none;
  }
`;
