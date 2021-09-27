import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
