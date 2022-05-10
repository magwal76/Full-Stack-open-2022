import React from "react";
import Person from "./person";
const Persons = ({ persons, filter, handleDelete }) => {
    return (
      <ul>
          {persons.filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
            ).map(person =>
          <Person key={person.id} person={person} handleDelete={handleDelete}/>
          )}
      </ul>
    )
  }
export default Persons;