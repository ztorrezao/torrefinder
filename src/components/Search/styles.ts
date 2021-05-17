import styled from 'styled-components';
import { colors, fonts, lightenDarkenColor } from '../../styles';

export const SearchContainer = styled.div`
  background-color: ${colors.darkGray};
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 6px 6px 6px 15px;
  max-height: 63px;
  align-items: center;
  border-radius: 9px;

  .icon {
    background-color: ${colors.mediumDarkGray};
  }

  input {
    padding: 15px;
    background-color: ${colors.darkGray};
    border: none;
    font-family: 'Ubuntu';
    font-size: ${fonts.lg};
    color: ${colors.light};
    width: 100%;

  }

  button {
    padding: 15px 63px;
    color: ${colors.black};
    background-color: ${colors.primary};
    font-size: ${fonts.lg};
    border-radius: 9px;

    
    &:hover {
      background-color: ${lightenDarkenColor(colors.primary, -30)};
      cursor: pointer;
    }
  }
`;