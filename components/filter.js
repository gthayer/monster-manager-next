import {useReducer} from 'react';
import {getFilterOptions, toTitleCase, useMonsters} from '../lib/helpers';

const initFilters = {
	challenge_rating_min:'',
	challenge_rating_max:'',
	type:'',
	size:'',
	alignment:'',
	search:'',
};

function reducer(filters, action) {
	switch (action.type) {
		case 'SET_FILTER':
			filters[action.filter] = action.value;
			return filters;
	}
}

export default function Filter({filter, label}) {

	const [filters, dispatch] = useReducer(reducer, initFilters);
	const options = getFilterOptions(filter);
	useMonsters().filters = filters;
	//useMonsters().filterMonsters(filters);

	return (
		<div>
			<label className="font-bold block">{label}: </label>
			<select className="border-2 w-full" defaultValue={filters[filter]} name={filter} id={filter} onChange={e => dispatch({type:'SET_FILTER', filter:filter, value:e.target.value})}>
				<option value="">{label}</option>
				{options.map((option,i) => <option key={i} value={option}>{toTitleCase(option)}</option>)}
			</select>
		</div>
	);
}