import styled from 'styled-components';
import { colors, fonts, lightenDarkenColor } from '../../styles';

export const JobResultsContainer = styled.section`
  margin-top: 30px;

  .job-list,
  .job-description {
    overflow-y: scroll;
    height: 462px;

    /* scrollbar */
    ::-webkit-scrollbar {
      width: 6px;

      &-track {
        border-radius: 6px;
        background-color: ${lightenDarkenColor(colors.gray, 60)};
      }

      &-thumb {
        border-radius: 6px;
        background-color: ${colors.gray};

        &:hover {
          background-color: ${lightenDarkenColor(colors.gray, -30)};
        }
      }
    }
  }
`;
