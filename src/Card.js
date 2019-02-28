import React from 'react';

export default function({ task, editTaskCb, moveLeftCb, moveRightCb, leftEnabled, rightEnabled }) {
	return (
		<div 
			className="border d-flex justify-content-between p-2 bg-white">
			{leftEnabled ? (
				<button className="btn btn-light strong" onClick={moveLeftCb}>
					&lt;
				</button>
			) : null}
			<div onDoubleClick={editTaskCb} className="flex-grow-1 text-center">{task}</div>
			{rightEnabled ? (
				<button className="btn btn-light strong" onClick={moveRightCb}>
					&gt;
				</button>
			) : null}
		</div>
	);
}
