import styled from "styled-components";
import Image from 'react-bootstrap/Image';

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
      width: calc(33.33% - 20px); 
    }
  }
    

`;