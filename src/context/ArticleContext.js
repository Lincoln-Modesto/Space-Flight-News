import React, { createContext, useContext, useState } from 'react';

import api from '../services/api';

// Context
const ArticlesContext = createContext({});

function ArticlesProvider({children}){

    const [articles, setArticles] = useState([]);
    const [filteredArticle, setFilteredArticle] = useState();

    async function loadArticles() {
        try {
            const response = await api.get('?_limit=10');
            const res = response.data
            Array.prototype.unshift.apply(res, articles);
            setArticles(res);
        } catch (err) {
            console.log(err.message);
        }
    }

    const articlesFiltered = (value) =>{
      setFilteredArticle(value)
    }

  return (
    <ArticlesContext.Provider
      value={{ loadArticles, articles, articlesFiltered, filteredArticle }}
    >
      {children}
    </ArticlesContext.Provider>
  );
} 

const useArticlesContext= () => {
    const context = useContext(ArticlesContext);
    return context;
};
  
  export { useArticlesContext, ArticlesProvider };