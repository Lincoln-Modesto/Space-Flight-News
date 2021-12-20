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

    const startArticles = useCallback(async () =>  {
      try {
          const response = await api.get('?_start=10');
          const res = response.data
          Array.prototype.unshift.apply(res, articles);
          setArticles(res);
      } catch (err) {
          console.log(err.message);
      }
  }, [articles])

  return (
    <ArticlesContext.Provider
      value={{ 
        loadArticles, 
        articles,
        startArticles
      }}
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