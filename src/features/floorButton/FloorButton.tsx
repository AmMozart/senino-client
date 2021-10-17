import React, { MouseEventHandler } from 'react'
import { BusEvent } from '../../utils/eventTypes'
import pubSub from '../../utils/pubSub'

interface FloorBattonProps {
  name: string
}

export const FloorButton: React.FC<FloorBattonProps> = ({ name }) => {

  const changeFloor: MouseEventHandler<HTMLButtonElement> = (e) => {
    pubSub.publish(BusEvent.CHANGE_SELECTED_FLOOR, name)
  }

  return (
    <button onClick={changeFloor}>{name}</button>
  )
}
