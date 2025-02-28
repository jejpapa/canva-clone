// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useLocation} from 'react-router-dom'
const CreateDesign = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <div>CreateDesign</div>
  )
}

export default CreateDesign