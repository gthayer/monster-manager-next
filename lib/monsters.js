import monsters from '../data/monsters';

export function getAllMonsterIds() {
	const result = monsters.map( monster => {
		return {
			params: {
				id: monster.name.toLowerCase().replace(/\s+/g, '-')
			}
		}	
	});

	return result;
}

export function getMonsterData(id) {
	const result = monsters.find( monster => {
		return monster.name.toLowerCase().replace(/\s+/g, '-') === id
	});

	return result;
}