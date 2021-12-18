import styled from "styled-components";

export const SmallButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 0.25rem;
  font-weight: 400;
  font-size: 16px;
  height: 50px;
  width: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;

  :hover{
    opacity: 1;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 0.25rem;
  font-weight: 900;
  font-size: 16px;
  height: 60px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`