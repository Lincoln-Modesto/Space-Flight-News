import React, 
{ createContext, 
  useContext, 
  useState,
  useCallback
} from 'react';

import api from '../services/api';

// Context
const ArticlesContext = createContext({});

function ArticlesProvider({children}){

    const [articles, setArticles] = useState([]);
    const [filteredArticle, setFilteredArticle] = useState();
    const [order, setOrder] = useState('Newer')

    const loadArticles = useCallback(async () =>  {
        try {
            const response = await api.get('?_limit=10');
            const res = response.data
            Array.prototype.unshift.apply(res, articles);
            setArticles(res);
        } catch (err) {
            console.log(err.message);
        }
    }, [articles])

    const articlesFiltered = (value) =>{
      setFilteredArticle(value)
    }

    const NewerOrOlderArticles = (value) => {
      setOrder(value)
    }

  return (
    <ArticlesContext.Provider
      value={{ 
        loadArticles, 
        articles,
        articlesFiltered, 
        filteredArticle,
        NewerOrOlderArticles,
        order }}
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