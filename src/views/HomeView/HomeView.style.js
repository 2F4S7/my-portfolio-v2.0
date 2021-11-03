import styled from 'styled-components';
import { secondaryColor } from '../../assets/stylesVariables';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  margin-bottom: 40px;

  @media (max-width: 840px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Flex = styled.div`
  flex: 1 1 0%;

  @media (max-width: 840px) {
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 55px;
  line-height: 1.4;
  letter-spacing: 0.03em;

  @media (max-width: 840px) {
    font-size: 35px;
  }
`;

export const Info = styled.p`
  font-size: 40px;
  line-height: 1.2;
  color: ${secondaryColor};

  @media (max-width: 840px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  text-transform: uppercase;
`;

export const List = styled.ul`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
