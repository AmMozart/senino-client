import React from 'react'
import { FLOOR_NAMES } from '../../config/config'
import { FloorButton } from '../floorButton/FloorButton'

export const FloorPanelButtons: React.FC = () => (
  <section>
    {FLOOR_NAMES.map(name => <FloorButton key={name} name={name}></FloorButton>)}
  </section>
)
