import styled from 'styled-components'

export const ModalContainer = styled.div`
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 998;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backdrop-filter: blur(5px);
    display:flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
  background: #fff;
  padding: 3rem;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  box-shadow: drop-shadow 0px 4px 10px rgba(0, 0, 0, 0.04);
  z-index: 999;

  .close{
    margin-top: -1rem;
    float: right;
  }

  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
   
    img{
      margin-right: 3rem;
      width: 300px;
      height: 200px;
    }
  }

  .container-button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem
  }

  p{
    margin-top: 1rem;
  }

  span{
    margin-top: 0.3rem;
  }
`



