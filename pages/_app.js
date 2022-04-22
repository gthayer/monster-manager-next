import { useState } from "react";
import "../styles/globals.css";
import { MonstersContext, getMonsters } from "../lib/helpers";

function MyApp({ Component, pageProps }) {
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [filters, setFilters] = useState({
    challenge_rating_min: "",
    challenge_rating_max: "",
    type: "",
    size: "",
    alignment: "",
    search: "",
  })
  const initialState = {
    monsters: getMonsters(),
    filters: filters,
    setFilters(filter, value) {
      setFilters(filters => {
        filters[filter] = value;
        return filters;
      })
    },
    filteredMonsters: filteredMonsters,
    filterMonsters() {
      setFilteredMonsters(
        initialState.monsters.filter((monster) => monster.size === initialState.filters.size)
      );
    },
  };

  return (
    <MonstersContext.Provider value={initialState}>
      <Component {...pageProps} />
    </MonstersContext.Provider>
  );
}

export default MyApp;
