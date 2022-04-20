import monsters from '../data/monsters';

export function getMonsters() {
	return monsters;
}

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
		return slugifyName( monster.name ) === id
	});

	return result;
}

export function slugifyName( name ) {
	return name.toLowerCase().replace(/\s+/g, '-');
}

export function getFilterOptions(filter) {
	const options = monsters.map( monster => monster[filter] ).filter( (value, index, self) => self.indexOf(value) === index );
	return options;
}