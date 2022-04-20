import Filter from './filter';

export default function filters() {
	return (
		<div className="grid gap-4 grid-cols-2 sm:grid-cols-6">
			<Filter filter="challenge_rating" label="Challenge Rating - Min"/>
			<Filter filter="challenge_rating" label="Challenge Rating - Max"/>
			<Filter filter="type" label="Type"/>
			<Filter filter="size" label="Size"/>
			<Filter filter="alignment" label="Alignment"/>
			<Filter filter="search" label="Search"/>
		</div>
	);
} 