import React from 'react'

function Buttons({
	onPressStart = () => {},
	onPressClear = () => {},
	count,
}) {
	return (
		<div>
			<button onClick={() => onPressStart('s')}>{count ? 'stop' : 'start'}</button>
			<button onClick={() => onPressClear('c')}>clear</button>
		</div>
	)
}

export default Buttons