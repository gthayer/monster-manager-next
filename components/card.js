import Link from 'next/link';
import { slugifyName } from '../lib/monsters.js';

export default function card({monster}) {
	return (
		<div>
				
			<h2 className="font-bold text-2xl text-blue-500">
				<Link href={`/monsters/${slugifyName(monster.name)}`}>
					<a>{monster.name}</a>
				</Link>
			</h2>

			<p>{monster.size} {monster.type} {monster.subtype} - {monster.alignment}</p>
			<p>CR: {monster.challenge_rating}</p>

		</div>
	)
};