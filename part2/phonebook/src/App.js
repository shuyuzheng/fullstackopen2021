import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas'}
  ])
  const [ newName, setNewName ] = useState('')
  
  const handlePerson = (event) => {
    event.preventDefault()
    const found = persons.some(person => person.name === newName)
    if (found) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(
        {name: newName}
      ))
    }
    setNewName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePerson}>
        <div>
          name: <input onChange={handleNewName} value={newName}/>
        </div>
        <div>
          <button type='submit' value={persons}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name}</p>
        )}
      </div>
    </div>
  )
}

export default App
