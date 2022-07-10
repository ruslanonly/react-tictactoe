import React from 'react'
import Cell from '../Cell/Cell'
import { CellsState } from '../../types'
import "./board.css"

type BoardState = {
}

type BoardProps = {
  cells: CellsState,
  onClick(index: number) : void
}

export default class Board extends React.Component<BoardProps, BoardState> {

  private renderCell(index: number) : React.ReactNode {
    return <Cell key={index} value={this.props.cells[index]} onClick={() => this.props.onClick(index)}/>
  }

  render() {
    return (
      <div className='board'>
        <div className='row'>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className='row'>
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className='row'>
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    )
  }
}
