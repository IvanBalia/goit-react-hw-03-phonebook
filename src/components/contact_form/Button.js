import styled from "styled-components";

export const Button = styled.button`
display:block;
margin-right:auto;
margin-left:auto;
color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryShade2};
`;