import React, { Component } from 'react'
import { CellsState, Player } from '../../types'
import Board from '../Board/Board'

type GameState = {
  cells: CellsState,
  next: Player
}

type GameProps = {
}

export default class Game extends Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      next: "X"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index: number) : void {
    let currentCells = this.state.cells.slice();
    if (!currentCells[index])
    currentCells[index] = this.state.next === "X" ? "O" : "X";
    
    this.setState({
      cells: currentCells,
      next: this.state.next === "X" ? "O" : "X"
    });
  }

  render() {
    return (
      <div className='game'>
        <Board cells={this.state.cells} onClick={this.handleClick}/>
      </div>
    )
  }
}
