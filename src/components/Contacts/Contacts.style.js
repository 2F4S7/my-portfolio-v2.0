import styled from 'styled-components';
import {
  secondaryColor,
  accentColor,
  timingFn,
} from '../../assets/stylesVariables';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 20px;
`;

export const Link = styled.a`
  color: ${secondaryColor};
  transition: color 250ms ${timingFn};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${accentColor};
  }
`;
