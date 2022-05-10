import { useState, useEffect } from 'react'
import personService from './services/persondb'
import Notification from "./components/notification"
import Persons from "./components/persons"
import Filter from "./components/filter"
import PersonForm from "./components/personform"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilterName] = useState('')
  const [successfulMessage, setSuccessFullMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
    
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    
  }, [])

  const existingPerson = persons.find(
    (person) => person.name.toLowerCase() === newName.toLowerCase()
  )

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    
    if (existingPerson && existingPerson.number === newNumber) {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      setNewNumber("")
      return
    } else{
    }

    if (existingPerson && existingPerson.number !== newNumber) {
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = { ...existingPerson, number: newNumber }
        const id = existingPerson.id
        personService
        .update(id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) => (person.id !== id ? person : returnedPerson))
          )
          setSuccessFullMessage(`Number changed for ${returnedPerson.name}`)
          setTimeout(() => {
            setSuccessFullMessage(null)
          }, 3000)
          })
        
        .catch(error => {
              setErrorMessage(`Information of ${changedPerson.name} has already been removed from server`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              setPersons(persons.filter((p) => p.id !== id))
              setNewName("")
              setNewNumber("")
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
        })
        return
      } else {
          return
        }
    } else{
    }

    personService
    .create(personObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setSuccessFullMessage(`Added ${returnedPerson.name}`)
      setTimeout(() => {
        setSuccessFullMessage(null)
      }, 3000)
      setNewName('')
      setNewNumber('')
    })  
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }    

  const handleDelete = (id) => {
    const personToRemove = persons.find((person) => person.id === id)

    if (window.confirm(`Delete ${personToRemove.name} ?`)) {
      personService
        .remove(id)
        .then(() => {setPersons(persons.filter((person) => person.id !== id))
          setSuccessFullMessage(`Deleted ${persons.find((person) => person.id === id).name}`)
          setTimeout(() => {
            setSuccessFullMessage(null)
          }, 3000)
          setNewName("")
          setNewNumber("")
        })
    } else {
      return
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
        <Notification successfulMessage={successfulMessage} errorMessage={errorMessage}/>
        <Filter filter={newFilter} onFilterChange={handleFilterChange}  />
      <h3>Add a new</h3>
        <PersonForm 
          onFormSubmit={addPerson}
          onNameChange={handlePersonChange}
          onNumberChange={handleNumberChange}
          nameValue={newName}
          numberValue={newNumber}
        />
      <h3>Numbers</h3>
        <Persons persons={persons} filter={newFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App