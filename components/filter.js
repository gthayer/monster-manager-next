import {useReducer} from 'react';
import {getFilterOptions, toTitleCase} from '../lib/helpers';

const initFilters = {
	challenge_rating_min:'',
	challenge_rating_max:'',
	type:'',
	size:'',
	alignment:'',
	search:'',
};

function reducer(state, action) {
	switch (action.type) {
		case 'SET_FILTER':
			state[action.filter] = action.value;
			return state;
	}
}

export default function Filter({filter, label}) {

	const [state, dispatch] = useReducer(reducer, initFilters);
	const options = getFilterOptions(filter);

	return (
		<div>
			<label className="font-bold block">{label}: </label>
			<select className="border-2 w-full" defaultValue={state[filter]} name={filter} id={filter} onChange={e => dispatch({type:'SET_FILTER', filter:filter, value:e.target.value})}>
				<option value="">{label}</option>
				{options.map((option,i) => <option key={i} value={option}>{toTitleCase(option)}</option>)}
			</select>
		</div>
	);
}