import { useState } from 'react';
import styled from 'styled-components';

import { defaultQuote, rem, updateQuote } from '../utils';

export const Quote = () => {
  const [data, setData] = useState(defaultQuote);

  // useEffect(() => { !data && updateQuote(setData); }, [data]);

  return data ? (
    <Container>
      <div>
        <h5>“{data.content}”</h5>
        <h6>{data.author}</h6>
      </div>
      <img src='/icons/icon-refresh.svg' alt='refresh' onClick={() => void updateQuote(setData)} />
    </Container>
  ) : (
    <></>
  );
};

const Container = styled.div`
  max-width: ${rem(540)};
  margin-top: ${rem(56)};
  display: flex;
  flex-direction: row;
  gap: ${rem(15.67)};

  /* Quote & Author Wrapper */
  div {
    display: flex;
    flex-direction: column;
    gap: ${rem(13)};
  }

  /* Quote */
  h5 {
    font-weight: normal;

    @media (max-width: ${rem(560)}) {
      font-size: ${rem(18)};
      line-height: 3ch;
    }
  }

  /* Author */
  h6 {
    letter-spacing: 0;
  }

  /* Refresh */
  img {
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
