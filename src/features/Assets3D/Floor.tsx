import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
import { EventTypes } from '../../utils/EventTypes'
import pubSub from '../../utils/pubSub'
import { selectTitle } from '../floorPanelButtons/floorButton/floorButtonSlice'

const Floor: React.FC = () => {
  const title = useAppSelector(selectTitle)

  useEffect(() => {
    pubSub.publish(EventTypes.CHANGE_SELECTED_FLOOR, title)
  }, [title])

  return null
}

export default Floor
