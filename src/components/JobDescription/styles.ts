import styled from 'styled-components';
import { colors, fonts, lightenDarkenColor } from '../../styles';

export const DescriptionContainer = styled.div`
  background-color: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 9px;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${colors.mediumDarkGray};
  padding-bottom: 30px;
  overflow: hidden;

  .header {
    width: 100%;
    height: 161px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .company {
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    p {
      font-size: ${fonts.md};
      color: ${colors.light};
      font-family: 'Ubuntu';
      margin-left: 12px;
    }

    .image {
      width: 69px;
      height: auto;
      border-radius: 50%;
      overflow: hidden;
      margin-top: -45px;
      border: 3px solid ${colors.primary};
      background-color: ${colors.black};
    }
  }

  .content {
    padding: 0 30px;
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    h4 {
      font-size: ${fonts.lg};
      color: ${colors.primary};
    }

    button {
      padding: 12px 18px;
      display: flex;
      align-items: center;
    }
  }

  .condition {
    font-size: ${fonts.md};
    color: ${colors.light};
    font-family: 'Ubuntu';
    margin-bottom: 24px;
  }

  .rates {
    text-align: center;
  }

  .description {
    color: ${colors.light};
  }

  .skills {
    li {
      list-style: none;
      display: inline;
      margin-right: 12px;
      font-size: ${fonts.s};
      padding: 6px 12px;
      background-color: ${colors.mediumDarkGray};
      color: ${colors.light};
      border-radius: 30px;
    }
  }

  h6 {
    font-family: 'Ubuntu';
    font-weight: bold;
    font-size: ${fonts.md};
    color: ${colors.primary};
    margin-top: 24px;
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
