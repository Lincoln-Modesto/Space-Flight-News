import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({direction}) => (direction ? 'row-reverse' : 'row')};

  .content{
    margin-right: ${({direction}) => (direction ? '0' : '4rem')};
    margin-left: ${({direction}) => (direction ? '4rem' : '0')};
    height: 200px;
    position: relative;

    >div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .container-button{
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  a{
    font-weight: bold;
    color: ${({theme}) => theme.colors.secondary.main};
    text-decoration: none;

    :hover{
      text-decoration: underline;
    }
  }

  img{
    width: 300px;
    height: 200px;
    margin-top: 5px;
  }

  p{
    margin-top: 1rem;
  }

  span{
    margin-top: 0.3rem;
  }
`