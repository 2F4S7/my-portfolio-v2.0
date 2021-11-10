import styled from 'styled-components';
import {
  accentColor,
  secondaryColor,
  timingFn,
  primaryColor,
  boxShadow,
  projectColor,
} from '../../assets/stylesVariables';

export const Item = styled.li`
  max-width: 600px;

  @media (max-width: 1069px) {
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  @media (min-width: 1070px) {
    width: calc((100% - 2 * 30px) / 3);
    margin: 10px;
  }
`;

export const Preview = styled.div`
  overflow: hidden;
  box-shadow: ${boxShadow};
  border-radius: 7px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${projectColor};
  }
`;

export const Img = styled.img`
  display: block;
`;

export const Wrapper = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: primaryColor;
`;

export const Title = styled.h3`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  text-transform: uppercase;
  background-color: ${primaryColor};
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px 10px;
`;

export const Info = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  color: ${secondaryColor};
`;

export const Tech = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0px;
  border-radius: 1px;
`;

export const TechItem = styled.li`
  margin-bottom: 5px;
  padding: 2px;
  border: 0.6px solid ${secondaryColor};
  cursor: pointer;
  font-size: 12px;

  &:not(:last-child) {
    margin-right: 4px;
  }

  &: hover {
    border-radius: 15px;
    color: ${accentColor};
    background-color: ${primaryColor};
  }
`;

export const Link = styled.a`
  color: ${secondaryColor};
  transition: color 250ms ${timingFn};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${accentColor};
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
