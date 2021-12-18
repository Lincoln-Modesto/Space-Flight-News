import React, { useState, useMemo } from 'react';
import { useArticlesContext } from '../../context/ArticleContext'
import { Header as Container } from './styles'

import logo from '../../assets/logo.png'
import { useEffect } from 'react/cjs/react.development';

export function Header() {

  const [searchTerm, setSearchTerm] = useState('');

  const { articles, articlesFiltered, NewerOrOlderArticles } = useArticlesContext();

  const articleFiltered = useMemo(() => (
    articles?.filter((articles) => (
      articles.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))), [articles, searchTerm]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    articlesFiltered(articleFiltered);
  }

  function handleSelect(value) {
    NewerOrOlderArticles(value)
  }

  useEffect(() => {
    articlesFiltered(articleFiltered);
  }, [articleFiltered])

  return (
    <Container>
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
    </Container>
  )
}