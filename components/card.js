import Link from 'next/link';

export default function card({monster}) {
	return (
		<div className="">
				
			<h2>
				<Link href={`/monsters/${monster.name}`}>
					{monster.name}
				</Link>
			</h2>

			<p>{monster.size} {monster.type} {monster.subtype} - {monster.alignment}</p>
			<p>CR: {monster.challenge_rating}</p>

		</div>
	)
};