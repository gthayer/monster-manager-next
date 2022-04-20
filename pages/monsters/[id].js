import Head from 'next/head'
import Layout from '../../components/layout'
import Action from '../../components/action'
import { getAllMonsterIds, getMonsterData } from '../../lib/monsters'

export default function Monster({ postData }) {

	function statBonus(stat) {
		let bonus = Math.floor( ( stat - 10 ) / 2 );
		return (
			'(' + ( bonus < 0 ? '' : '+' ) + bonus + ')'
		)
	};

  return (
	<Layout>
		<Head>
			<title>{postData.name} - Monster Manager Listing</title>
		</Head>
		<article>
			<div className="monster-general">
				<h1 className="title">{postData.name}</h1>
				<p><span className="sub-title">{postData.size} {postData.type} {postData.subtype} - {postData.alignment}</span></p>
				<p>Armor Class: {postData.armor_class}</p>
				<p>Hit Points: {postData.hit_points} ({postData.hit_dice})</p>
				<p>Speed: {postData.speed}</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div>
					<div className="monster-misc">
						<h3 className="text-xl font-bold">Misc</h3>
						
						{ postData.senses                 ? <p>Senses: {postData.senses}</p>                                 : null }
						{ postData.languages              ? <p>Languages: {postData.languages}</p>                           : null }
						{ postData.challenge_rating       ? <p>Challenge: {postData.challenge_rating}</p>                    : null }
						{ postData.damage_vulnerabilities ? <p>Damage Vulnerabilities: {postData.damage_vulnerabilities}</p> : null }
						{ postData.damage_resistances     ? <p>Damage Resistances: {postData.damage_resistances}</p>         : null }
						{ postData.damage_immunities      ? <p>Damage Immunities: {postData.damage_immunities}</p>           : null }
						{ postData.condition_immunities   ? <p>Condition Immunities: {postData.condition_immunities}</p>     : null }
					</div>

					<div className="monster-skills">
						<h3 className="text-xl font-bold">Skills</h3>

						{ postData.acrobatics    ? <p>Acrobatics: +{postData.acrobatics}</p>       : null }
						{ postData.arcana        ? <p>Arcana: +{postData.arcana}</p>               : null }
						{ postData.athletics     ? <p>Athletics: +{postData.athletics}</p>         : null }
						{ postData.deception     ? <p>Deception: +{postData.deception}</p>         : null }
						{ postData.history       ? <p>History: +{postData.history}</p>             : null }
						{ postData.insight       ? <p>Insight: +{postData.insight}</p>             : null }
						{ postData.intimidation  ? <p>Intimidation: +{postData.intimidation}</p>   : null }
						{ postData.investigation ? <p>Investigation: +{postData.investigation}</p> : null }
						{ postData.medicine      ? <p>Medicine: +{postData.medicine}</p>           : null }
						{ postData.nature        ? <p>Nature: +{postData.nature}</p>               : null }
						{ postData.perception    ? <p>Perception: +{postData.perception}</p>       : null }
						{ postData.performance   ? <p>Performance: +{postData.performance}</p>     : null }
						{ postData.persuasion    ? <p>Persuasion: +{postData.persuasion}</p>       : null }
						{ postData.religion      ? <p>Religion: +{postData.religion}</p>           : null }
						{ postData.stealth       ? <p>Stealth: +{postData.stealth}</p>             : null }
						{ postData.survival      ? <p>Survival: +{postData.survival}</p>           : null }
					</div>
				</div>

				<div className="monster-stats">
					<h3 className="text-xl font-bold">Stats</h3>

					<p>STR: {postData.strength} {statBonus(postData.strength)}</p>
					<p>DEX: {postData.dexterity} {statBonus(postData.dexterity)}</p>
					<p>CON: {postData.constitution} {statBonus(postData.constitution)}</p>
					<p>INT: {postData.intelligence} {statBonus(postData.intelligence)}</p>
					<p>WIS: {postData.wisdom} {statBonus(postData.wisdom)}</p>
					<p>CHA: {postData.charisma} {statBonus(postData.charisma)}</p>
				</div>

				<div className="monster-savingthrows">
					<h3 className="text-xl font-bold">Saving Throws</h3>
					
					{ postData.strength_save     ? <p>STR: +{postData.strength_save}</p>     : null }
					{ postData.dexterity_save    ? <p>DEX: +{postData.dexterity_save}</p>    : null }
					{ postData.constitution_save ? <p>CON: +{postData.constitution_save}</p> : null }
					{ postData.intelligence_save ? <p>INT: +{postData.intelligence_save}</p> : null }
					{ postData.wisdom_save 	     ? <p>WIS: +{postData.wisdom_save}</p>       : null }
					{ postData.charisma_save     ? <p>CHA: +{postData.charisma_save}</p>     : null }
				</div>
			</div>

			<div className="monster-actions">
				<h3 className="text-xl font-bold">Actions</h3>

				{ postData.special_abilities ? postData.special_abilities.map((action, i) => <Action key={i} action={action} />) : null }
				{ postData.reactions         ? postData.reactions.map((action, i)         => <Action key={i} action={action} />) : null }
				{ postData.actions           ? postData.actions.map((action, i)           => <Action key={i} action={action} />) : null }
				{ postData.legendary_actions ? postData.legendary_actions.map((action, i) => <Action key={i} action={action} />) : null }
			</div>
		</article>
    </Layout>
  )
}

export async function getStaticPaths() {
	let paths = getAllMonsterIds()

	return {
	  paths,
	  fallback: false
	}

}
  
export async function getStaticProps({ params }) {
	const postData = getMonsterData(params.id);

	return {
		props: {
			postData
		}
	};
}