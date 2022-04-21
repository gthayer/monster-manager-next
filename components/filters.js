import Filter from './filter';

export default function Filters() {
	return (
		<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 pt-10">
			<Filter filter="challenge_rating_min" label="Challenge Rating - Min"/>
			<Filter filter="challenge_rating_max" label="Challenge Rating - Max"/>
			<Filter filter="type" label="Type"/>
			<Filter filter="size" label="Size"/>
			<Filter filter="alignment" label="Alignment"/>
			<Filter filter="search" label="Search"/>
		</div>
	);
} 