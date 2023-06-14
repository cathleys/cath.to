import styled from "styled-components";

export const Container = styled.div`
  padding: 7.25rem 0;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 1.5rem;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  background: #eeeeee;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;

  &:focus {
    outline: 1px solid #777;
  }
`;

export const Anchor = styled.a`
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;
export const LoginButton = styled.button`
  background: #007aff;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  color: white;
  width: 100%;

  &:hover {
    background: #0063e4;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.3rem;

  ${LoginButton}:nth-child(2) {
    background: #36a736;
  }

  ${LoginButton}:last-child {
    background: red;
  }
`;
