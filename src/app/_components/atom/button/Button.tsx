"use client";
import React from "react";
import styled from "styled-components";
import { btnColor, ButtonColor } from "./type";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroudColor?: btnColor;
  children: React.ReactNode;
}

function Button({ backgroudColor, children, ...props }: ButtonProps) {
  return (
    <StyleButton $backgroundColor={backgroudColor} {...props}>
      {children}
    </StyleButton>
  );
}

export const StyleButton = styled.button<{ $backgroundColor?: btnColor }>`
  height: 2rem;
  padding: 0rem 1rem;
  border: 1px, solid;
  border-radius: 0.5rem;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? ButtonColor[$backgroundColor] : "white"};
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
