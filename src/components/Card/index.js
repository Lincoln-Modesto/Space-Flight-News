import { SmallButton } from "../Button"
import { SubTitle, Title } from "../Title"
import { CardContainer } from "./styles"

export function Card({article, index}) {
  return (
    <CardContainer direction={index}>
      <div className="content">
        <Title>{article.title}</Title>
        <div>
          <span>{article.updatedAt}</span>
          <small>{article.newsSite}</small>
        </div>
        <SubTitle>{article.summary}</SubTitle>
          <SmallButton type="button">
            Ver mais
          </SmallButton>
      </div>
      <div>
        <img alt="card" src={article.imageUrl} />
      </div>

    </CardContainer>
  )
}