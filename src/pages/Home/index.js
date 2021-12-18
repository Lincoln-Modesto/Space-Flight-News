import { useEffect } from 'react';
import { useArticlesContext } from '../../context/ArticleContext'

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home() {

  const { articles, loadArticles, filteredArticle } = useArticlesContext();

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <>
      <Header articles={articles}/>
      <main>
        <Container>
          {filteredArticle?.map((article, index) =>
            <Card
              article={article}
              key={index}
              index={index} />)}
          <Button>Carregar Mais</Button>
        </Container>
      </main>
    </>

  )
}