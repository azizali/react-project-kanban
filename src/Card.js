import React from 'react'

export default function({ text, moveLeftCb, moveRightCb, leftEnabled, rightEnabled }) {
    return (
        <div className="border d-flex justify-content-between p-2 bg-white">
            {leftEnabled ?
                <button
                    className="btn btn-light strong"
                    onClick={moveLeftCb}
                >
                    &lt;
        </button> : null}
            <div className="flex-grow-1 text-center">
                {text}
            </div>
            {rightEnabled ?
                <button
                    className="btn btn-light strong"
                    onClick={moveRightCb}
                >
                    &gt;
        </button> : null}
        </div>
    )
}