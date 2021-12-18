import { Link } from 'react-router-dom';

import { ModalContainer, Container } from './styles';
import { Title, SubTitle } from '../Title';
import { SmallButton } from '../Button';
import close from '../../assets/close.png'

export default function Modal() {

  return (
    <>
      <ModalContainer>

        <Container>
          <div className="close">
            <Link to="/">
              <img src={close} alt="close" />
            </Link>
          </div>

          <div className='content'>
            <div>
              <img alt="card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhQr-D3o-GWxOZMGhAy7FPSc8jHS-xT5hlQ&usqp=CAU" />
            </div>
            <div>
              <Title>Lorem ipsum</Title>
              <div>
                <span>12/12/12</span>
              </div>
              <SubTitle>lorem ipsum lorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</SubTitle>
            </div>
          </div>
          <div className="container-button">
            <SmallButton type="button">
              Ir para o site
            </SmallButton>
          </div>

        </Container>
      </ModalContainer>
    </>

  )
}