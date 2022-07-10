import React from 'react'
import "./cell.css"

type CellProps = {
  value: number | string | null;
  onClick: () => void
}

type CellState = {

}

export default class Cell extends React.Component<CellProps, CellState> {
  render() {
    return (
      <button className='cell' onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}
