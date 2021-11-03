import styled from 'styled-components';
import { secondaryColor } from '../../assets/stylesVariables';

export const Item = styled.li`
  padding: 20px;
  font-size: 16px;
  line-height: 1.71;
  @media (max-width: 850px) {
    font-size: 15px;
    padding: 15px;
  }
  @media (max-width: 470px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const Text = styled.span`
  display: block;
  color: ${secondaryColor};
`;
