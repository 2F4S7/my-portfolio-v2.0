import { motion } from 'framer-motion';
import styled from 'styled-components';
import { secondaryColor, bgColor } from '../../assets/stylesVariables';

export const Wrapper = styled.footer`
  padding: 5px 0;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  color: ${secondaryColor};

  @media (max-width: 470px) {
    font-size: 15px;
  }
`;

export const Heart = styled(motion.div)`
  margin: 0 12px;
`;
