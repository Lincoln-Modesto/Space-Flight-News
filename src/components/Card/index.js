import { useModalContext } from "../../context/ModalContext"
import { Link } from "react-router-dom"

import { SmallButton } from "../Button"
import { SubTitle, Title } from "../Title"
import { CardContainer } from "./styles"

export function Card({ article, index }) {

  const { openModal } = useModalContext()
  const handleModal = () => openModal({ article })

  const date = article.publishedAt.split("T")[0];
  const hour = article.publishedAt.split("T")[1];

  return (
    <CardContainer direction={index}>
      <div className="content">
        <Title>{article.title}</Title>
        <div>
          <span>{date + " at " + hour.substring(0,5)}</span>
          <small>{article.newsSite}</small>
        </div>
        <SubTitle>{article.summary}</SubTitle>
        <Link
          to={`/articles/${article.id}/modal`}
          onClick={handleModal}>
          <SmallButton type="button">
            View more
          </SmallButton>
        </Link>
      </div>
      <div>
        <img alt="card" src={article.imageUrl} />
      </div>

    </CardContainer>
  )
}