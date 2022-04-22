import { createContext, useContext } from "react";
import monsters from "../data/monsters";

export function getMonsters() {
  return monsters;
}

export const MonstersContext = createContext({
  monsters: [],
  filters: {
    challenge_rating_min: "",
    challenge_rating_max: "",
    type: "",
    size: "",
    alignment: "",
    search: "",
  },
  filteredMonsters: [],
});

export const useMonsters = () => {
  return useContext(MonstersContext);
};

export function getAllMonsterIds() {
  const result = monsters.map((monster) => {
    return {
      params: {
        id: monster.name.toLowerCase().replace(/\s+/g, "-"),
      },
    };
  });

  return result;
}

export function getMonsterData(id) {
  const result = monsters.find((monster) => {
    return slugifyName(monster.name) === id;
  });

  return result;
}

export function slugifyName(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function getFilterOptions(filter) {
  if ("challenge_rating_min" === filter || "challenge_rating_max" === filter) {
    filter = "challenge_rating";
  }

  const options = monsters
    .map((monster) => monster[filter])
    .filter((value, index, self) => self.indexOf(value) === index);

  if (typeof options[0] === "number") {
    options.sort((a, b) => a - b);
  } else {
    options.sort();
  }

  return options;
}

export function toTitleCase(str) {
  if (typeof str !== "string") {
    return str;
  }

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
