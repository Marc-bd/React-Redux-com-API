import styled from "styled-components";

export const StyledContainer = styled.div`
  .containerSearch {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 15px;
      color: red;
      text-decoration: underline;
      margin: 11px 0px 25px;
    }
  }

  .containerInput {
    display: flex;

    width: 300px;
    height: 30px;
    gap: 17px;

    input {
      width: 199px;
    }
  }
`;
