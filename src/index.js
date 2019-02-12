import './index.css'
import React from 'react'
import { render } from 'react-dom'
import Column from './Column'
import Card from './Card'
import AddBtn from './AddBtn'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [{
                name: 'Winnie',
                color: '#8E6E95',
                cards: [{
                    text: 'W 1'
                },
                {
                    text: 'W 2'
                }]
            },
            {
                name: 'Bob',
                color: '#39A59C',
                cards: [{
                    text: 'B 1'
                },
                {
                    text: 'B 2 '
                }]
            },
            {
                name: 'Thomas',
                color: '#344759',
                cards: [{
                    text: 'T 1'
                },
                {
                    text: 'T 2'
                }]
            },
            {
                name: 'George',
                color: '#E8741E',
                cards: [{
                    text: 'G 1'
                },
                {
                    text: 'G 2'
                }]
            }]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleMove = this.handleMove.bind(this)
    }
    handleClick(colIndex) {
        const column = this.state.columns[colIndex]

        const input = prompt('Please enter text');

        column.cards.push({
            text: input
        })

        this.state.columns[colIndex] = column

        this.setState({
            columns: this.state.columns
        })
    }

    handleMove(destColumn, currentCol, cardIndex) {
        const card = this.state.columns[currentCol].cards.splice(cardIndex, 1)[0]
        this.state.columns[destColumn].cards.push(card)

        this.setState({
            columns: this.state.columns
        })

    }

    render() {
        const columnSize = this.state.columns.length
        return (
            <div className="row" style={{ margin: "0px 25px" }}>
                {
                    this.state.columns.map(({ name, color, cards }, columnIndex) => {
                        return (
                            <Column key={columnIndex} name={name} color={color}>
                                {
                                    cards.map(({ text }, cardIndex) => {
                                        return (
                                            <Card
                                                key={cardIndex}
                                                leftEnabled={(columnIndex !== 0) ? true : false}
                                                rightEnabled={(columnIndex < columnSize - 1) ? true : false}
                                                moveLeftCb={() => {
                                                    this.handleMove(columnIndex - 1, columnIndex, cardIndex)
                                                }}
                                                moveRightCb={() => {
                                                    this.handleMove(columnIndex + 1, columnIndex, cardIndex)
                                                }}
                                                text={text}
                                            />
                                        )
                                    })
                                }
                                <AddBtn clickHandler={() => { this.handleClick(columnIndex) }} />
                            </Column>
                        )
                    })
                }
            </div>
        )
    }
}

render(<App />, document.querySelector('#app'))