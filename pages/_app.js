import {useState, createContext} from 'react';
import '../styles/globals.css'
import {getMonsters, AppContext, filterMonsters} from '../lib/helpers';

const Context = createContext();

function MyApp({ Component, pageProps }) {

  const monsters = getMonsters();

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [filters, setFilters] = useState({
    challenge_rating_min: "",
    challenge_rating_max: "",
    type: "",
    size: "",
    alignment: "",
    search: "",
  })

  const context = {
    filters: filters,
    updateFilters(filter, value) {
      setFilters(filters => {
        filters[filter] = value;
        context.filterMonsters();
        return filters;
      });
    },
    filteredMonsters: filteredMonsters,
    filterMonsters() {
      setFilteredMonsters(
        filterMonsters(filters)
      );
    },
  };

  return (
  <AppContext.Provider value={{context}}>
    <Component {...pageProps} />
  </AppContext.Provider>
  )
}

export default MyApp
