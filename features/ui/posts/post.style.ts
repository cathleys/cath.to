import styled from "styled-components";

export const ArticleContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f4f7;
  gap: 1rem;
`;
export const HeaderandButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  justify-content: space-between;
  margin-bottom: 0.625rem;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60vw;
  background: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  padding: 1.5rem 1.25rem 1.5rem 1.875rem;
  box-shadow: 0px 21px 43px -26px rgba(150, 145, 150, 1);

  &:hover {
    border: 1.5px solid #667085;
  }

  @media (max-width: 64em) {
    margin: auto;
    gap: 1rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 1.25rem;
  white-space: nowrap;

  @media (max-width: 64em) {
    padding: 0;
    gap: 1rem;
  }
`;
export const Date = styled.p`
  font-weight: 500;
  font-size: 0.813rem;
  margin: 0;
  color: #667085;
`;
export const Title = styled.h3`
  font-size: 1.625rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 64em) {
  }
`;
export const Sentence = styled.p`
  margin: 0;
  color: #475467;
  @media (max-width: 64em) {
    display: none;
  }
`;

export const TitleandSentence = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  max-width: 38.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostImage = styled.img`
  width: 15rem;
  border-radius: 0.5rem;
`;

export const ReadMore = styled.button`
  outline: none;
  background: none;
  border: none;
  &:hover,
  &:focus {
    color: orange;
  }
`;
