//MEDIUM
import React from 'react'

const BasicInfo = ({ person }) => {
    return (
        <div className="person_info">
            <p>Name: {person.name}</p>
            <p>Phone: {person.phone}</p>
            <p>Date of birth: {person.dob}</p>
        </div>
    )
}

export default BasicInfo