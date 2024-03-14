import styled from 'styled-components';

export const Quote = () => {
  return (
    <Container>
      <Text>
        “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
      </Text>
      <Author>Ada Lovelace</Author>
    </Container>
  );
};

const Container = styled.div``;

const Text = styled.div``;

const Author = styled.h6``;
