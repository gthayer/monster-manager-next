import {getFilterOptions} from '../lib/helpers';

export default function filter({filter, label}) {

	const options = getFilterOptions(filter);

	return (
		<>
			<div>
				<label className="font-bold block">{label}: </label>
				<select className="border-2" name={filter}>
					<option value="">{label}</option>
					{options.map((option,i) => <option key={i} value={option}>{option}</option>)}
				</select>
			</div>
		</>
	);
}