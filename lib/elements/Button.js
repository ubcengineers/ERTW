import styled from 'styled-components';
import style from '../styles/main';

const Button = styled.button`
  background: ${style.colors.primary};
  border: 2px solid ${style.colors.primaryDark};
  border-radius: ${style.dimen.baseRadius};
  color: ${style.colors.white};
  cursor: pointer;
  display: inline-block;
  font-family: ${style.fonts.copyFont};
  font-size: 14px;
  font-weight: 200;
  margin: 4px;
  outline: none;
  padding: 8px 16px;
  transform-origin: center center;
  transition: all .2s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    background: ${style.colors.primaryDark};
  }
`;

export default Button;
