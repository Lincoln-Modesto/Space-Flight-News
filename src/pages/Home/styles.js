import styled from "styled-components";

export const Header = styled.header`
  display: block;
  margin: 0 2rem;
  padding: 1rem;

  input{
    padding: 0.75rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    width: 15%;

    :focus{
    box-shadow: 0 0 0 0;
    border: 1px solid ${({ theme }) => theme.colors.secondary.main};
    outline: 0;
    }
  }

  select{
    padding: 0.75rem;
    margin-right: 1rem;
    border-radius: 0.3rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};

    :focus{
    box-shadow: 0 0 0 0;
    border: 1px solid ${({ theme }) => theme.colors.secondary.main};
    outline: 0;
    }

    option{
      border-radius: 0.3rem;
    }
  }

  .content{
    display: flex;
    justify-content: flex-end;
  }

  img{
    height: 100px
  }

  #logo{
    display: flex;
    justify-content: center
  }

  #divisor{
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    > div{
      width: 100%;
      height: 3px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0 2rem;
  padding: 1rem;

  button{
    margin-top: 5rem;
  }
`