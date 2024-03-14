import styled from 'styled-components';

export const Time = () => {
  return (
    <Container>
      <Text>
        <img src='/icons/icon-moon.svg' />
        <p>Good Evening, It&apos;s Currently</p>
      </Text>
      
      <Clock>
        <h1>23:14</h1> <span>BST</span>
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
`;

const Clock = styled.div``;

const Location = styled.h3``;
