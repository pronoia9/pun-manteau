import styled from 'styled-components';

import { rem } from '../utils';

export const Button = ({ showOverlay, setShowOverlay }) => {
  return (
    <Container onClick={() => void setShowOverlay((prev) => !prev)} $showOverlay={showOverlay}>
      <h5>{!showOverlay ? 'MORE' : 'LESS'}</h5>
      <img src='/icons/icon-arrow-up.svg' />
    </Container>
  );
};

const Container = styled.button`
  padding: ${rem(8)} ${rem(9)} ${rem(8)} ${rem(20)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${rem(13)};
  align-items: center;

  background: rgb(255, 255, 255);
  border-radius: ${rem(28)};

  h5 {
    color: #000;
    font-size: 1rem;
    letter-spacing: ${rem(5)};
    opacity: 0.5;
  }

  img {
    width: ${rem(40)};
    height: ${rem(40)};
    border-radius: 50%;
    opacity: ${({ $showOverlay }) => (!$showOverlay ? '1' : '0.5')};
    transform: rotate(${({ $showOverlay }) => (!$showOverlay ? '180' : '0')}deg);
  }

  &:hover {
    img {
      opacity: 0.5;
    }
  }
`;
