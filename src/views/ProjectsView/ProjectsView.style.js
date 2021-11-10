import styled from 'styled-components';
import { accentColor } from '../../assets/stylesVariables';

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.17;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const TypeProject = styled.span`
  color: ${accentColor};
`;

export const List = styled.ul`
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (min-width: 1070px) {
    margin: -15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
