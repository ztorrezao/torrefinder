import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const HeaderContainer = styled.div`
  height: 60px;
  background-color: ${colors.darkGray};
  width: 100vw;

  & .header-row {
    height: 60px;
  }

  & .logo {
    width: 86.64px;
    height: 37.76px;
  }
`;

export const Navigation = styled.nav`
  a {
    display: inline-flex;
    padding: 18px 30px;
    text-decoration: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${colors.light};

    & .icon {
      margin-right: 9px;
    }

    &.active,  &:hover{
      color: ${colors.primary};
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 3px;
        background-color: ${colors.primary};
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
`;
