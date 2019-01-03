import React from 'react'
import Buttons from '../buttons'

const zero = (dig) => ('0' + dig).slice(-2)

class Timer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			count: false,
			result: 0
		}

		window.setInterval(() => {
			if (this.state.count) {
				const result = this.state.result + 1
				this.setState({ result })
			} 
		}, 100);

	}

	render() {

		let mSec = this.state.result
		const hours = mSec / 36000 | 0
		mSec = mSec - hours * 36000
		const min = mSec / 600 | 0
		mSec = mSec - min * 600
		const sec = mSec / 10 | 0
		mSec = mSec - sec * 10

		return (
			<div>
				<h1> My timer </h1>
				<div>{zero(hours)}:{zero(min)}:{zero(sec)}.{mSec}</div>
				<Buttons
					count={this.state.count} 
					onPressStart={this.handleStart}
					onPressClear={this.handleClear}
				/>
			</div>
		)
	}

	handleClear = () => {
		this.setState({ result: 0 })
	}

	handleStart = () => {
		this.setState({ count: !this.state.count })
	}
}

export default Timer
