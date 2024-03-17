import styled from 'styled-components';

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

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div``;

const Right = styled(Left)``;

const HR = styled.div``;
