import {getFilterOptions, toTitleCase, useAppContext} from '../lib/helpers';

export default function Filter({filter, label}) {

	const options = getFilterOptions(filter);
	const { filters, updateFilters } = useAppContext();

	const handleChange = (event) => {
		updateFilters(filter, event.target.value);
	};

	return (
		<div>
			<label className="font-bold block">{label}: </label>
			<select className="border-2 w-full" defaultValue={filters[filter]} name={filter} id={filter} onChange={handleChange}>
				<option value="">{label}</option>
				{options.map((option,i) => <option key={i} value={option}>{toTitleCase(option)}</option>)}
			</select>
		</div>
	);
}