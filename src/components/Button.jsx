import styled from 'styled-components';

import { rem } from '../utils';

export const Button = ({ showOverlay, setShowOverlay }) => {
  const handleClick = () => {
    setShowOverlay((prev) => !prev);
  };

  return (
    <Container onClick={handleClick}>
      {!showOverlay ? 'MORE' : 'LESS'}
      <img src='/icons/icon-arrow-up.svg' />
    </Container>
  );
};

const Container = styled.button`
  padding: ${rem(8)} ${rem(9)};
  padding-left: ${rem(20)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${rem(13)};
  align-items: center;
  color: rgba(0, 0, 0, 1);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: ${rem(5)};
  line-height: ${rem(28)};
  background: rgb(255, 255, 255);
  border-radius: ${rem(28)};
  
  img {
    width: ${rem(40)};
    height: ${rem(40)};
    fill: rgb(255, 255, 255);
    background: var(--c-secondary);
    border-radius: 50%;
  }

  &:hover {
    img {
      background-color: rgb(153, 153, 153);
    }
  }
`;
