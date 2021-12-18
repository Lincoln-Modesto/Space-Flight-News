import { useEffect } from 'react';
import { useArticlesContext } from '../../context/ArticleContext'

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { useState } from 'react/cjs/react.development';

export function Home() {

  const { articles, loadArticles, filteredArticle, order } = useArticlesContext();

  useEffect(() => {
    loadArticles();
  }, []);

  useEffect(() => {
    OrderCards(order)
  }, [order])

  function OrderCards(orderBy){
    function compareNewer(a, b) {
      
      return Date.parse(a.publishedAt) - Date.parse(b.publishedAt)
    }
  
    function compareOlder(a, b) {
  
      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    }
  
    if (orderBy === 'Newer') {
  
      filteredArticle?.sort(compareNewer)
      console.log(filteredArticle)
    } else {
  
      filteredArticle?.sort(compareOlder)
      console.log(filteredArticle)
    }
  }

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
          <Button
            onClick={loadArticles}
          >
            Load more
            </Button>
        </Container>
      </main>
    </>

  )
}