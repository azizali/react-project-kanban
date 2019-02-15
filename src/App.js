import React from 'react';
import Column from './Column';
import Card from './Card';
import AddBtn from './AddBtn';
import { connect } from 'react-redux';

function App({ addCard, moveCard, columns }) {
	const colSize = columns.length;

	function handleAdd(colIndex) {
		const input = prompt('Please enter task');
		if (input) {
			addCard(colIndex, input);
		}
	}

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
				{columns.map(({ name, color, cards }, colIndex) => {
					return (
						<Column key={colIndex} name={name} color={color}>
							{cards.map(({ task }, cardIndex) => {
								return (
									<Card
										key={cardIndex}
										leftEnabled={colIndex !== 0 ? true : false}
										rightEnabled={colIndex < colSize - 1 ? true : false}
										moveLeftCb={() => {
											moveCard(colIndex - 1, colIndex, cardIndex);
										}}
										moveRightCb={() => {
											moveCard(colIndex + 1, colIndex, cardIndex);
										}}
										task={task}
									/>
								);
							})}
							<AddBtn clickHandler={() => handleAdd(colIndex)} />
						</Column>
					);
				})}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		columns: state.columns
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addCard: (colIndex, task) => {
			dispatch({
				type: 'ADD_CARD',
				payload: {
					colIndex,
					task
				}
			});
		},
		moveCard: (destColIndex, currColIndex, cardIndex) => {
			dispatch({
				type: 'MOVE_CARD',
				payload: {
					destColIndex,
					currColIndex,
					cardIndex
				}
			});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
