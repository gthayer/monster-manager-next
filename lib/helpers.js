import {createContext, useContext} from 'react';
import monsters from '../data/monsters';

export const AppContext = createContext();

export const useAppContext = () => {
	return useContext(AppContext).context;
}

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

	if ( 'challenge_rating_min' === filter || 'challenge_rating_max' === filter ) {
		filter = 'challenge_rating';
	}

	const options = monsters
		.map( monster => monster[filter] )
		.filter( (value, index, self) => self.indexOf(value) === index );

	if ( typeof options[0] === 'number' ) {
		options.sort( (a,b) => a - b );
	} else {
		options.sort();
	}
	
	return options;
}

export function toTitleCase(str) {
	if ( typeof str !== 'string' ) {
		return str;
	}

	return str.replace(
	  /\w\S*/g,
	  function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  }
	);
}

export function filterMonsters(filters) {

	// Create an empty array for results.
	let results = [];

	monsters.filter( monster => {

		// Set base variables.
		var count = 0;
		var successes = 0;

		for ( const filter in filters ) {

			const value = filters[filter];

			// On work on filters with values.
			if ( value.length != 0 ) {

				// Increment the filter count.
				count++;

				switch ( filter ) {
					case 'challenge_rating_min' :
						{ monster.challenge_rating >= value ? successes++ : null }
						break;

					case 'challenge_rating_max' :
						{ monster.challenge_rating <= value ? successes++ : null }
						break;

					case 'search' :
						{ monster.name.toLowerCase().indexOf( value ) != -1 ? successes++ : null }
						break;

					default:
						{ monster[filter] == value ? successes++ : null }
				}
			}
		}

		// If the monster matches all filters, add it to the results.
		if ( successes == count ) {
			results.push( monster );
		}
	});

	// Return Results.
	return results;
}