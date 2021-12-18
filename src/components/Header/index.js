import React, { useState, useMemo } from 'react';
import { useArticlesContext } from '../../context/ArticleContext'
import { Header as Container } from './styles'

import logo from '../../assets/logo.png'
import { useEffect } from 'react/cjs/react.development';

export function Header() {

  const [searchTerm, setSearchTerm] = useState('');

  const { articles, articlesFiltered } = useArticlesContext();

  const articleFiltered = useMemo(() => (
    articles?.filter((articles) => (
      articles.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))), [articles, searchTerm]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    articlesFiltered(articleFiltered);
  }

  useEffect(() => {
    articlesFiltered(articleFiltered);
  }, [articles])

  return (
    <Container>
        <div className='content'>
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch} />

          <select name="Organizar">
            <option value="">Mais antigas</option>
            <option value="">Mais novas</option>
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