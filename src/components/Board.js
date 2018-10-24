import React, { Component } from 'react'
import Box from './Box'

export default class Board extends Component {
	render() {
		let boxes = []

		for (let i = 0; i < 9; i++) {
			boxes.push(<Box />)
		}


		let theNineBoxes = []

		for (let i = 1; i < 10; i++) {
			theNineBoxes.push(
				<div className="boxes-container">
					{boxes}
				</div>
			)
		}

		return (
			<div className="board">
				{theNineBoxes}
			</div>
		)
	}
}
