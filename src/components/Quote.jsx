import styled from 'styled-components';

import { rem } from '../utils';

export const Quote = () => {
  return (
    <Container>
      <Top>
        <Text>
          “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
        </Text>
        <img src='/icons/icon-refresh.svg' />
      </Top>
      <Author>Ada Lovelace</Author>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${rem(540)};
  margin-top: ${rem(56)};
  display: flex;
  flex-direction: column;
  gap: ${rem(13)};
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${rem(15.67)};

  img {
    width: 16.67px;
    height: 16.67px;
    margin-top: ${rem(10.67)};
  }
`;

const Text = styled.h5`
  margin: 0;
  font-weight: normal;
`;

const Author = styled.h6`
  margin: 0;
  letter-spacing: 0;
`;
