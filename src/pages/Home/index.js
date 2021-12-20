import { useEffect, useState, useMemo } from 'react';
import { useArticlesContext } from '../../context/ArticleContext'

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Container, Header } from "./styles";

import logo from '../../assets/logo.png'

export function Home() {

  const { 
    articles, 
    loadArticles,
    startArticles
   } = useArticlesContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState('Newer');

  const articleFiltered = useMemo(() => (
    articles?.filter((articles) => (
      articles.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))), [articles, searchTerm]);

  useEffect(() => {
    loadArticles();
    OrderCards(order);
  }, []);

  const OrderCards = (orderBy) => {
    function compareNewer(a, b) {

      return Date.parse(a.publishedAt) - Date.parse(b.publishedAt)
    }

    function compareOlder(a, b) {

      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
    }

    if (orderBy === 'Newer') {

      articleFiltered?.sort(compareNewer)
    } else {

      articleFiltered?.sort(compareOlder)
    }
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleSelect(value) {
    setOrder(value)
    OrderCards(order)
  }

  return (
    <>
      <Header>
        <div className='content'>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch} />

          <select
            name="sort"
            onChange={(e) => handleSelect(e.target.value)}>
            <option
              value="Newer">
              Newer
            </option>
            <option
              value="Older">
              Older
            </option>
          </select>
        </div>

        <div id="logo">
          <img src={logo} alt='logo' />
        </div>
        <div id="divisor">
          <div></div>
        </div>
      </Header>
      <main>
        <Container>
          {articleFiltered?.map((article, index) =>
            <Card
              article={article}
              key={index}
              index={index} />)}
          <Button
            onClick={startArticles}
          >
            Load more
          </Button>
        </Container>
      </main>
    </>

  )
}