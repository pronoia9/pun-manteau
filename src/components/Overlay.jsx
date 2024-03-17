import styled from 'styled-components';

import { rem } from '../utils';

export const GroupItem = ({ title, subtitle }) => (
  <Item>
    <h6>{title}</h6>
    <h2>{subtitle}</h2>
  </Item>
);

export const Overlay = ({ time }) => {
  return (
    <Container>
      <Group>
        <GroupItem title='Current Timezone' subtitle={time.timezone} />
        <GroupItem title='Day of the Year' subtitle={time.day_of_year} />
      </Group>

      <HR />

      <Group>
        <GroupItem title='Day of the Week' subtitle={time.day_of_week} />
        <GroupItem title='Week Number' subtitle={time.week_number} />
      </Group>
    </Container>
  );
};

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  color: var(--c-font);
  position: relative;

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
  }

  &:before {
    background-color: var(--c-background);
    opacity: 0.75;
    z-index: -2;
  }

  &:after {
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

const Group = styled.div`
  margin-top: ${rem(74)};
  margin-bottom: ${rem(74)};
  padding-left: ${rem(94)};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${rem(42)};

  &:first-child {
    padding-left: ${rem(165)};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(9)};

  h6 {
    font-weight: normal;
    text-transform: uppercase;
  }
`;

const HR = styled.div`
  margin-top: ${rem(74)};
  margin-bottom: ${rem(74)};
  width: 1px;
  background-color: var(--c-secondary);
  opacity: 0.2;
`;
