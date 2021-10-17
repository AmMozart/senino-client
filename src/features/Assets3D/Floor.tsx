import React, { useEffect, useState } from 'react'
import pubSub from '../../utils/pubSub'

const Floor: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState('garden')

  useEffect(() => {
    // if (selectedFloor === 'garden')
    //   false
  }, [selectedFloor])

  return null
}

export default Floor
