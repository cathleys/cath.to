import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";

export const SideBar = styled.div`
  flex: 3;
  margin-left: 1rem;

  @media (max-width: 64em) {
    margin-left: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(68, 68, 68, 0.5);
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
`;

export const IconandName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
export const Icon = styled(RxAvatar)`
  height: 3.125rem;
  width: 3.125rem;
`;
export const Joined = styled.h5`
  margin: 0;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(68, 68, 68, 0.5);
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
`;
export const Posts = styled.a`
  &:hover {
    color: blue;
  }
`;
