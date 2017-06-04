import styled from 'styled-components';

export const Image = styled.div`
  flex-basis: ${props => props.size}px;
  height: auto;
  flex-shrink: 0;
  background: white;
  padding: 5px;
  padding-bottom: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (min-width: 400px) {
      height: ${props => props.size}px;
    }
  }

  h3 {
    font-size: 22px;
  }
`;
