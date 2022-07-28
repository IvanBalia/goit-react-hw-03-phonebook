import styled from "styled-components";

export const FilterInput = styled.input`
width: 50%;
  margin:10px auto;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondaryShade2};
  border: 1px solid ${({ theme }) => theme.colors.tertiaryShade2};
`