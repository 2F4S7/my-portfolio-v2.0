import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  max-width: 1160px;
  min-height: calc(100vh - 164px);
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;

  @media (min-width: 750px) {
    padding: 80px 20px;
  }
`;
