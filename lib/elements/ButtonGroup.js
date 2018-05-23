import styled from 'styled-components';
import style from '../styles/main';

const ButtonGroup = styled.div`
    Button {
        margin-left: ${props => props.flush ? '0' : '4px'};
        margin-right: ${props => props.flush ? '0' : '0'};
        border-radius: ${props => props.flush ? '0' : '8px'};
        border-right-width: ${props => props.flush ? '1px' : '2px'};
        border-left-width: ${props => props.flush ? '1px' : '2px'};
    }

    Button:first-child {
        margin-right: 0;
        margin-left: 4px;
        border-top-right-radius: ${props => props.flush ? '0' : '8px'};
        border-bottom-right-radius: ${props => props.flush ? '0' : '8px'};
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-right-width:  ${props => props.flush ? '1px' : '2px'};
        border-left-width: 2px;
    }

    Button:last-child {
        margin-left: ${props => props.flush ? '0' : '4px'};
        margin-right: 4px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: ${props => props.flush ? '0' : '8px'};
        border-bottom-left-radius: ${props => props.flush ? '0' : '8px'};
        border-right-width: 2px;
        border-left-width:  ${props => props.flush ? '1px' : '2px'};
    }
`;

export default ButtonGroup;
