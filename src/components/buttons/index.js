import React from 'react'

function Buttons({
	onPressStart = () => {},
	onPressStop = () => {},
	onPressClear = () => {},
}) {
	return (
		<div>
			<button onClick={() => onPressStart('s')}>start</button>
			<button onClick={() => onPressStop('t')}>stop</button>
			<button onClick={() => onPressClear('c')}>clear</button>
		</div>
	)
}

export default Buttons