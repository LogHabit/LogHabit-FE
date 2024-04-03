"use client";
import Button from "@/app/_components/atom/button/Button";
import styled from "styled-components";
function Header() {
  return (
    <Wrapper>
      <h1>LogHabit</h1>
      <Button onClick={() => console.log("click")} backgroudColor="white">
        로그인
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
