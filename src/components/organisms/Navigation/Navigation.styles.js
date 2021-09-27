import styled from "styled-components";

export const ModeSwitch = styled.button`
  width: 30px;
  height: 30px;
  background-color: blue;
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
