export default function filter({filter, label}) {
	return (
		<>
			{filter}
			<div>
				<label>{label}: </label>
				<select name={filter}>
					<option value="">{label}</option>
				</select>
			</div>
		</>
	);
}

// {this.state.filter.map((option,i) => <option key={i} value={option}>{option}</option>)}
