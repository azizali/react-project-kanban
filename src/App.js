import React from 'react';
import Column from './Column';
import Card from './Card';
import AddBtn from './AddBtn';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleMove = this.handleMove.bind(this);
	}

	handleClick(colIndex) {
		// const column = this.state.columns[colIndex];
		// const input = prompt('Please enter task');
		// if (input) {
		// 	column.cards.push({
		// 		task: input
		// 	});
		// 	this.state.columns[colIndex] = column;
		// 	this.setState({
		// 		columns: this.state.columns
		// 	});
		// }
	}

	handleMove(destColumn, currentCol, cardIndex) {
		// const card = this.state.columns[currentCol].cards.splice(cardIndex, 1)[0];
		// this.state.columns[destColumn].cards.push(card);
		// this.setState({
		// 	columns: this.state.columns
		// });
	}

	render() {
		const { columns } = this.props;
		const columnSize = columns.length;
		return (
			<div className="container mt-4">
				<div className="row text-center">
					<div className="col">
						<h1>Kanban Board</h1>
						<p className="lead">Perfect way to stay organized</p>
						<hr />
					</div>
				</div>
				<div className="row">
					{columns.map(({ name, color, cards }, columnIndex) => {
						return (
							<Column key={columnIndex} name={name} color={color}>
								{cards.map(({ task }, cardIndex) => {
									return (
										<Card
											key={cardIndex}
											leftEnabled={columnIndex !== 0 ? true : false}
											rightEnabled={columnIndex < columnSize - 1 ? true : false}
											moveLeftCb={() => {
												this.handleMove(columnIndex - 1, columnIndex, cardIndex);
											}}
											moveRightCb={() => {
												this.handleMove(columnIndex + 1, columnIndex, cardIndex);
											}}
											task={task}
										/>
									);
								})}
								<AddBtn
									clickHandler={() => {
										this.handleClick(columnIndex);
									}}
								/>
							</Column>
						);
					})}
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		columns: state.columns
	};
}
export default connect(mapStateToProps)(App);
