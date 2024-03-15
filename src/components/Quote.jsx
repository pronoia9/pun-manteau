import { useState } from 'react';
import styled from 'styled-components';

import { defaultQuote, rem, updateQuote } from '../utils';

export const Quote = () => {
  const [data, setData] = useState(defaultQuote);

  // useEffect(() => { !data && updateQuote(setData); }, [data]);

  return data ? (
    <Container>
      <Top>
        <Text>“{data.content}”</Text>
        <img src='/icons/icon-refresh.svg' alt='refresh' onClick={() => void updateQuote(setData)} />
      </Top>
      <Author>{data.author}</Author>
    </Container>
  ) : <></>;
};

const Container = styled.div`
  max-width: ${rem(540)};
  margin-top: ${rem(56)};
  /* display: flex;
  flex-direction: column;
  gap: ${rem(13)}; */
`;

const Top = styled.div`
  /* width: ${rem(540)}; */
  margin-bottom: ${rem(13)};
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: ${rem(15.67)};

  img, svg {
    width: 16.67px;
    height: 16.67px;
    margin-top: ${rem(10.67)};
    cursor: pointer;
    scale: 1;
    
    &:hover {
      scale: 1.1;
      filter: invert(20%) sepia(243%) saturate(1576%) hue-rotate(-21deg) brightness(137%) contrast(73%);
    }
  }
`;

const Text = styled.h5`
  font-weight: normal;
`;

const Author = styled.h6`
  letter-spacing: 0;
`;
