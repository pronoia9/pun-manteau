import styled from 'styled-components';

import { rem } from '../utils';

export const Group = ({ title, subtitle }) => (
  <GroupContainer>
    <h6>{title}</h6>
    <h2>{subtitle}</h2>
  </GroupContainer>
);

export const Overlay = ({ time }) => {
  return (
    <Container>
      <Left>
        <Group title='Current Timezone' subtitle={time.timezone} />
        <Group title='Day of the Year' subtitle={time.day_of_year} />
      </Left>

      <HR />

      <Right>
        <Group title='Day of the Week' subtitle={time.day_of_week} />
        <Group title='Week Number' subtitle={time.week_number} />
      </Right>

      <Background />
      <Mask />
    </Container>
  );
};

const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  color: var(--c-font);
  position: relative;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div``;

const Right = styled(Left)``;

const HR = styled.div``;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  background-color: var(--c-secondary);
  background-image: var(--image);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  background-color: var(--c-background);
  opacity: 0.5;
`;
