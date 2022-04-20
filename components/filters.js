import Filter from './filter';

export default function filters() {
	return (
		<>
			<Filter filter="challenge_rating" label="Challenge Rating - Min"/>
			<Filter filter="challenge_rating" label="Challenge Rating - Max"/>
			<Filter filter="type" label="Type"/>
			<Filter filter="size" label="Size"/>
			<Filter filter="alignment" label="Alignment"/>
			<Filter filter="search" label="Search"/>
		</>
	);
} 