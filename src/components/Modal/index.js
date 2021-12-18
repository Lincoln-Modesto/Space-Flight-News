import { Link } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext';

import { ModalContainer, Container } from './styles';
import { Title, SubTitle } from '../Title';
import { SmallButton } from '../Button';
import close from '../../assets/close.png'

export default function Modal() {

  const { modalState: { article, visible }, closeModal } = useModalContext();

  const date = article.publishedAt.split("T")[0];

  return (
    <>
      {visible && <ModalContainer>
        <Container>
          <div className="close">
            <Link to="/" onClick={closeModal}>
              <img src={close} alt="close" />
            </Link>
          </div>

          <div className='content'>
            <div>
              <img alt="card" src={article.imageUrl} />
            </div>
            <div>
              <Title>{article.title}</Title>
              <div>
                <span>{date}</span>
              </div>
              <SubTitle>{article.summary}</SubTitle>
            </div>
          </div>
          <a
            href={article.url}
            rel="noreferrer"
            target="_blank"
            className="container-button">
            <SmallButton type="button">
              Go to website
            </SmallButton>
          </a>

        </Container>
      </ModalContainer>}
    </>

  )
}