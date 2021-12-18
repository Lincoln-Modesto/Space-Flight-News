import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({theme}) => theme.colors.gray[900]};
`

export const SubTitle = styled.p`
  font-size: 1rem;
  color: ${({theme}) => theme.colors.gray[200]};
`