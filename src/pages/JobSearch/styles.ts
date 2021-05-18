import styled from 'styled-components';
import { colors, fonts } from '../../styles';

export const JobSearchContainer = styled.section`
  width: 100vw;

  & h1.title{
    text-align: center;
    padding-bottom: 60px;
    color: ${colors.primary};
  }

  & p.label {
    padding-top: 3px;
    color: ${colors.mediumDarkGray};
    font-size: ${fonts.s};
  }
`;