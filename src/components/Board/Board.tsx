import React from 'react'
import Cell from '../Cell/Cell'
import { CellsState, Player } from '../../types'
import "./board.css"

type BoardState = {
  cells: CellsState,
  next: Player
}

type BoardProps = {}

export default class Board extends React.Component<BoardProps, BoardState> {

  constructor(props: BoardProps) {
    super(props)
    this.state = {
      cells: Array(9).fill(null),
      next: "X"
    }
  }

  private renderCell(index: number) : React.ReactNode {
    return <Cell value={this.state.cells[index]} onClick={() => this.handleClick(index)}/>
  }

  handleClick(index: number) : void {
    let currentCells = this.state.cells.slice();
    currentCells[index] = this.state.next === "X" ? "O" : "X";
    
    this.setState({
      cells: currentCells,
      next: this.state.next === "X" ? "O" : "X"
    });
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
