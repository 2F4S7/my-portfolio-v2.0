import styled from 'styled-components';
import { borderColor } from '../../assets/stylesVariables';

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0 20px;
  border-bottom: 1px solid ${borderColor};

  @media (min-width: 750px) {
    padding: 0 80px;
  }
`;
