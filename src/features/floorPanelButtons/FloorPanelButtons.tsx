import React from 'react'
import { floorTitleArr } from '../../config/config'
import { FloorButton } from './floorButton/FloorButton'
import style from './FloorPanelButtons.module.css'

export const FloorPanelButtons: React.FC = () => (
  <section className={style.panelButtons}>
    <FloorButton key={floorTitleArr[0]} title={floorTitleArr[0]}></FloorButton>
    <FloorButton key={floorTitleArr[1]} title={floorTitleArr[1]}></FloorButton>
    <FloorButton key={floorTitleArr[2]} title={floorTitleArr[2]}></FloorButton>
  </section>
)
