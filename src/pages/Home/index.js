import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home(){
  return(
    <>
      <Header/>
      <main>
        <Container>
          <Card />
          <Card direction={true}/>
          <Card/>
          <Button>Carregar Mais</Button>
        </Container>
      </main>
    </>
  
  )
}