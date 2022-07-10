import React, { Component } from 'react'
import { CellsState, Player } from '../../types'
import Board from '../Board/Board'
import "./game.css";

type GameState = {
  cells: CellsState,
  next: Player
}

type GameProps = {
}

let initialGameState : GameState = {
  cells: Array(9).fill(null),
  next: "X"
}

export default class Game extends Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = initialGameState;
    this.handleClick = this.handleClick.bind(this);
    this.restart = this.restart.bind(this);
  }

  handleClick(index: number) : void {
    let currentCells = this.state.cells.slice();
    if (!currentCells[index])
    currentCells[index] = this.state.next;
    
    this.setState({
      cells: currentCells,
      next: this.state.next === "X" ? "O" : "X"
    });
  }

  render() {
    let status: string;
    let winner = checkforWinners(this.state.cells);
    if (winner) {
      status = `${winner} wins. Restart your game.`
    } else {
      status = "Turn " + this.state.next;
    }
    return (
      <div className='game'>
        <div className="game-status">{status}</div>
        <Board cells={this.state.cells} onClick={this.handleClick}/>
        <button className='restart-btn' onClick={this.restart}>Restart Game</button>
      </div>
    )
  }

  restart() : void {
    this.setState(initialGameState);
  }
}

function checkforWinners(cells: CellsState) {
  let winnerTemplates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let template of winnerTemplates) {
    let [a, b, c] = template;
    if (cells[a] && cells[a] === cells[b] && cells[b] == cells[c]) {
      return cells[a];
    }
  }
  return null;
}
