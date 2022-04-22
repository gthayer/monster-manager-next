import { useReducer } from "react";
import { getFilterOptions, toTitleCase, useMonsters } from "../lib/helpers";

const initFilters = {
  challenge_rating_min: "",
  challenge_rating_max: "",
  type: "",
  size: "",
  alignment: "",
  search: "",
};

export default function Filter({ filter, label }) {
  const options = getFilterOptions(filter);
  const { filters, setFilters, filterMonsters } = useMonsters();

  const handleChange = (event) => {
    setFilters(filter, event.target.value);
    console.log(filters);
    filterMonsters();
  };

  return (
    <div>
      <label className="font-bold block">{label}: </label>
      <select
        className="border-2 w-full"
        defaultValue={filters[filter]}
        name={filter}
        id={filter}
        onChange={handleChange}
      >
        <option value="">{label}</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {toTitleCase(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
