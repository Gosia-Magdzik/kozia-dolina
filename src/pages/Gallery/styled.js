import styled, { css } from "styled-components";
import Image from 'react-bootstrap/Image';

const spacing = 15;

export const Img = styled(Image)`
  margin-bottom: 15px;
  border-radius: 10px;
  width: 100%;
  height: auto;
  vertical-align: auto;
  display: inline-block;
`;

export const Wrapper = styled.div`
    .fluid-row, .fluid-col {
    display: block;
  }

  @media (min-width: 768px) {
    .fluid-row {
      display: flex;
      flex-wrap: wrap;
    }

    .fluid-col {
      ${({ spacing }) => css`
        width: calc(33.33% - ${spacing * 2}px);
      `}
    }
  }
`;