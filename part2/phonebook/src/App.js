import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    {name: 'Arto Hellas', number: '040-1234567'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const handlePerson = (event) => {
    event.preventDefault()
    const found = persons.some(person => person.name === newName)
    if (found) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(
        {name: newName,
          number: newNumber
        }
      ))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePerson}>
        <div>
          name: <input onChange={handleNewName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber}/>
        </div>
        <div>
          <button type='submit' value={persons}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  )
}

export default App
