import styled from "styled-components";

export const StyledContainerList = styled.div`
  ul {
    width: 400px;
    height: 250px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;

      width: 400px;
      height: 250px;

      h2 {
        font-size: 18px;
      }

      img {
        width: 50%;
      }

      h3 {
        font-size: 15px;
      }
    }
  }
`;
