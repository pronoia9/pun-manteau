import styled from 'styled-components';
import { AnimatePresence, m } from 'framer-motion';

import { SplitText } from '../components';
import { overlayMotion } from '../motion';
import { rem } from '../utils';

export const GroupItem = ({ title, subtitle }) => (
  <Item className='overlay-group-item' {...overlayMotion.item}>
    <SplitText elementType='h6' {...overlayMotion.title} text={title} />
    <SplitText elementType='h2' {...overlayMotion.subtitle} text={subtitle} />
  </Item>
);

export const Overlay = ({ time, showOverlay }) => {
  return (
    <AnimatePresence>
      {showOverlay && (
        <Container className='overlay-container' {...overlayMotion.container}>
          <Group className='overlay-group' {...overlayMotion.group}>
            <GroupItem title='Current Timezone' subtitle={time.timezone} />
            <GroupItem title='Day of the Year' subtitle={time.day_of_year} />
          </Group>

          <HR />

          <Group className='overlay-group' {...overlayMotion.group}>
            <GroupItem title='Day of the Week' subtitle={time.day_of_week} />
            <GroupItem title='Week Number' subtitle={time.week_number} />
          </Group>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(m.div)`
  display: flex;
  flex-direction: row;
  position: relative;
  color: var(--c-font);
  z-index: 1;

  @media (max-width: ${rem(560)}) {
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

const Group = styled(m.div)`
  margin: ${rem(74)} 0; /* Top/Bottom space */
  padding: 0 ${rem(94)}; /* Right group's left space */
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${rem(42)};

  @media (max-width: ${rem(1000)}) {
    margin: ${rem(119)} 0;
    padding: 0 ${rem(32)}; /* Right group's left space */
    gap: ${rem(48)};
  }

  @media (max-width: ${rem(560)}) {
    margin: 0 0 ${rem(48)} 0;
    padding: 0 ${rem(26)} !important;
    gap: ${rem(16)};
  }

  /* Left group's left space */
  &:first-child {
    padding: 0 0 0 ${rem(165)};

    @media (max-width: ${rem(1230)}) {
      &:first-child {
        padding: 0 0 0 ${rem(64)};
      }
    }

    @media (max-width: ${rem(560)}) {
      margin: ${rem(48)} 0 0 0;
    }
  }
`;

const Item = styled(m.div)`
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
  h6 {
    font-weight: normal;
    text-transform: uppercase;

    @media (max-width: ${rem(1000)}) {
      font-size: ${rem(13)};
      line-height: 2ch;
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(10)};
    }
  }

  /* Subtitle */
  h2 {
    @media (max-width: ${rem(1000)}) {
      font-size: ${rem(40)};
      line-height: 2ch;
    }

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(20)};
    }
  }
`;

const HR = styled(m.div)`
  margin-top: ${rem(74)};
  margin-bottom: ${rem(74)};
  width: 1px;
  background-color: var(--c-secondary);
  opacity: 0.2;

  @media (max-width: ${rem(1230)}) {
    display: none;
  }
`;
