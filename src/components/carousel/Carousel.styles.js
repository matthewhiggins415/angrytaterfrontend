import styled from 'styled-components';

export const CarouselContainer = styled.div`
  min-width: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0.75rem;
    min-width: 100%;
  }
`

export const P = styled.p`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Fredoka', sans-serif;
  color: #4B0082;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export const Stars = styled.div`
  margin-top: 1.5rem;
  font-size: 2.5rem;
  color: gold;

  /* @media (max-width: 600px) {
    font-size: 1rem;
  } */
`;