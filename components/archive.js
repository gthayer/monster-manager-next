import Card from './card';

export default function Archive({monsters}) {
	return (
		<div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{ monsters ? monsters.map((monster, i) => <Card key={i} monster={monster}/>) : null }
		</div>
	)
}
