import React, { MouseEventHandler } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { change } from './floorButtonSlice'

interface FloorBattonProps {
  title: string
}

export const FloorButton: React.FC<FloorBattonProps> = ({ title }) => {
  const dispatch = useAppDispatch()

  const changeFloor: MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(change(title))
  }

  return (
    <button onClick={changeFloor}>{title}</button>
  )
}
