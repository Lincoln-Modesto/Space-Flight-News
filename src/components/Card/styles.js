import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({direction}) => (direction % 2 === 0 ? 'row-reverse' : 'row')};

  .content{
    margin-right: ${({direction}) => (direction % 2 === 0 ? '0' : '4rem')};
    margin-left: ${({direction}) => (direction % 2 === 0 ? '4rem' : '0')};
    position: relative;

    >div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    button{
      margin: 1rem 0;
    }
  }

  small{
    font-weight: bold;
    font-size: 14px;
    color: ${({theme}) => theme.colors.secondary.main};
  }

  img{
    width: 400px;
    height: 300px;
    border: 2px solid #fff;
  }

  p{
    margin-top: 1rem;
  }

  span{
    margin-top: 0.3rem;
  }
`