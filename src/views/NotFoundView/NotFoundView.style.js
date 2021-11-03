import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 22px;
  width: 850px;
  @media (max-width: 840px) {
    width: 650px;
  }
  @media (max-width: 440px) {
    width: 350px;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  color: red;
  font-weight: 500;
  font-size: 35px;
  @media (max-width: 840px) {
    font-size: 25px;
  }
  @media (max-width: 440px) {
    font-size: 15px;
  }
`;
