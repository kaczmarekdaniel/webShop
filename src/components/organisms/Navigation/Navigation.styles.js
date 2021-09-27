import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border:1px solid ${({ theme }) => theme.colors.darkGrey}
`;
