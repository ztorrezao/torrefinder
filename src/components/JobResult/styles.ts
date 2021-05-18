import styled from 'styled-components';
import { colors, fonts, lightenDarkenColor } from '../../styles';

export const ResultContainer = styled.div`
  background-color: ${colors.darkGray};
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 18px;
  border-radius: 9px;
  transition: all .3s ease-in-out;
  border: 1px solid ${colors.mediumDarkGray};
  margin-bottom: 18px;




  &:hover {
    border: 1px solid ${colors.primary};
    cursor: pointer;
  }

  .image {
    width: 45px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .description {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 100%;
  }

  .rates {
    text-align: center;
  }

  h6 {
    font-family: 'Ubuntu';
    font-weight: bold;
    font-size: ${fonts.md};
    color: ${colors.primary};
    margin-bottom: 12px;

  }

  p {
    font-family: Ubuntu;
    font-size: ${fonts.s};
    color: ${colors.gray};
    margin-bottom: 6px;

    & span.strong {
      font-weight: bold;
      font-size: ${fonts.md};
      color: ${colors.light};
    }
  }
`;
