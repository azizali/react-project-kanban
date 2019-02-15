import produce from 'immer';
const initialState = {
	columns: [
		{
			name: 'To dos',
			color: '#be6dd0',
			cards: [
				{
					task: 'Setup app layout'
				},
				{
					task: 'Learn about state'
				},
				{
					task: 'Learn about using events'
				},
				{
					task: 'keep building'
				}
			]
		},
		{
			name: 'Blocked',
			color: '#d63d3d',
			cards: [
				{
					task: 'B 1'
				},
				{
					task: 'B 2 '
				}
			]
		},
		{
			name: 'Doing',
			color: '#344759',
			cards: [
				{
					task: 'T 1'
				},
				{
					task: 'T 2'
				}
			]
		},
		{
			name: 'Done',
			color: '#55ce36',
			cards: [
				{
					task: 'G 1'
				},
				{
					task: 'G 2'
				}
			]
		}
	]
};

export default (state = initialState, { type, payload }) => {
	if (type === 'ADD_CARD') {
		return state;
	} else if (type === 'MOVE_CARD') {
		const { destColIndex, currColIndex, cardIndex } = payload;

		return produce(state, (draft) => {
			const card = draft.columns[currColIndex].cards.splice(cardIndex, 1)[0];
			draft.columns[destColIndex].cards.push(card);
		});
	} else {
		return state;
	}
};
