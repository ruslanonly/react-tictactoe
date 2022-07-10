import React from 'react'
import "./cell.css"

type CellProps = {
  value: number | string | null;
  onClick: () => void
}

export default function Cell(props: CellProps) : JSX.Element {
  return (
    <button className='cell' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

