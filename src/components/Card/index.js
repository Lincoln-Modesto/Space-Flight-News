import { SmallButton } from "../Button"
import { SubTitle, Title } from "../Title"
import { CardContainer } from "./styles"

export function Card({direction}) {
  return (
    <CardContainer direction={direction}>
      <div className="content">
        <Title>Lorem ipsum</Title>
        <div>
          <span>12/12/12</span>
          <a href="https://#">Visitar</a>
        </div>
        <SubTitle>lorem ipsum lorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</SubTitle>
        <div className="container-button">
          <SmallButton type="button">
            Ver mais
          </SmallButton>
        </div>
      </div>
      <div>
        <img alt="card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhQr-D3o-GWxOZMGhAy7FPSc8jHS-xT5hlQ&usqp=CAU" />
      </div>

    </CardContainer>
  )
}