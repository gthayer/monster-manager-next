export default function Action({ action, section }) {
	return(
		<div className="monster-action">

		<h4 className="section-title">{action.name}</h4>
	
		{ action.desc ? <span className="action-item">{action.desc}</span> : null }

		<div className="action-summary">
			{ action.attack_bonus 	? <span className="action-item">Attack Bonus: {action.attack_bonus}</span> 	: null }
			{ action.damage_dice 	? <span className="action-item">Damage Dice: {action.damage_dice}</span> 	: null }
			{ action.damage_bonus 	? <span className="action-item">Damage Bonus: {action.damage_bonus}</span> 	: null }	
		</div>
	</div>
	)
}