import styled from 'styled-components';
import PropTypes from 'prop-types';
import style from '../styles/main';

const ButtonTheme = {
    default: {
        background: style.colors.white,
        backgroundHover: style.colors.lightergrey,
        backgroundActive: style.colors.lightgrey, 
        borderColor: style.colors.lightgrey,
        color: style.colors.primary
    },
    primary: {
        background: style.colors.primary,
        backgroundActive: style.colors.primaryDark, 
        borderColor: style.colors.primaryDark,
        color: style.colors.white
    }
}

const Button = styled.button`
  background: ${props => ButtonTheme[props.appearance].background};
  border: 2px solid ${props => ButtonTheme[props.appearance].borderColor};
  border-radius: ${style.dimen.baseRadius};
  color: ${props => ButtonTheme[props.appearance].color};
  cursor: pointer;
  display: inline-block;
  font-family: ${style.fonts.copyFont};
  font-size: 14px;
  font-weight: 300;
  margin: 4px;
  outline: none;
  padding: 8px 12px;
  transform-origin: center center;
  transition: all .2s ease;
  &:hover {
        background: ${props => ButtonTheme[props.appearance].backgroundHover};
  }
  &:active {
        background: ${props => ButtonTheme[props.appearance].backgroundActive};
  }
`;

Button.defaultProps = {
    appearance: 'default'
}

Button.propTypes = {
    appearance: PropTypes.oneOf(['default', 'primary'])
};

export default Button;
