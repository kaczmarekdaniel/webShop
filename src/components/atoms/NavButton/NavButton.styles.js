import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled(NavLink).attrs({ activeClassName: "active-link" })`
  width: 33%;
  text-decoration: none;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.m};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  margin: 5px;
  padding: 2px;
  &.active-link {
    border-bottom: 2px solid purple;
    padding-bottom: 1px;
  }
`;
