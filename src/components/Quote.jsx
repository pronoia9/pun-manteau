import axios from 'axios';
import styled from 'styled-components';

import { rem } from '../utils';
import { useEffect, useState } from 'react';

export const Quote = () => {
  const [data, setData] = useState(null);

  async function getQuote() {
    try {
      const response = await axios.get('https://api.quotable.io/quotes/random');
      setData(response.data[0]);
    } catch (error) {
      console.error('Error getting a quote', error);
      setData({
        content:
          'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
        author: 'Ada Lovelace',
      });
    }
  }

  useEffect(() => { getQuote(); }, []);

  return (
    <Container>
      <Top>
        <Text>
          “{data?.content}”
        </Text>
        <img src='/icons/icon-refresh.svg' alt='refresh' onClick={() => void getQuote()} />
      </Top>
      <Author>{data?.author}</Author>
    </Container>
  );
};

const Container = styled.div`
  max-width: ${rem(540)};
  margin-top: ${rem(56)};
  /* display: flex;
  flex-direction: column;
  gap: ${rem(13)}; */
`;

const Top = styled.div`
  margin-bottom: ${rem(13)};
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
