import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuLinkProps = {
  isActive?: boolean;
  href: string;
  text: string;
};

export const LinkItem = styled.li<{ isActive?: boolean }>`
  background: ${(props) =>
    props.isActive ? "-webkit-linear-gradient(#C41740, #EA9C28)" : "none"};
  -webkit-background-clip: ${(props) => (props.isActive ? "text" : "none")};
  -webkit-text-fill-color: ${(props) =>
    props.isActive ? "transparent" : "none"};
  padding: 0 0.938rem 0 0.938rem;
  font-weight: 500;
`;

export function NavigationLink({ isActive, text, href }: MenuLinkProps) {
  return (
    <Link href={href} passHref>
      <LinkItem isActive={isActive}>
        <a>{text}</a>
      </LinkItem>
    </Link>
  );
}
