import Card from './card';

export default function Archive({monsters}) {

	console.log(monsters);

	return (
		<div className="">
			{ monsters ? monsters.map((monster, i) => <Card key={i} monster={monster}/>) : null }
		</div>
	)
}
