import { info } from './userService'
import { useState } from 'react'

const user = info()



const updateCharacter = (e) => {
  const fieldName = e.target.name
  setCharacter(existingValues => ({
    ...existingValues,
    [fieldName]: e.target.value,
  }))
}



const services = {
  updateCharacter,
}

export default services