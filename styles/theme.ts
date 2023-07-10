import styled from "styled-components";

export const Theme = styled.div`
  transition: 1s all ease;

  &.light {
    background-color: white;
    color: #111;

    a {
      color: #1d2939;
    }
  }

  &.dark {
    background-color: #111;
    color: #bbb;

    a {
      color: #bbb;
    }

    input,
    textarea {
      background-color: #111;
      border: 1px solid #ccc;
      color: white;
    }
  }
`;
