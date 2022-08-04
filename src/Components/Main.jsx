import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
import './styles.css'

function Main() {

    const [searchTerm, setSearchTerm] = useState(" ")

  return (
    <div className='container'>
        <input type="text" placeholder="Search..." onChange={event => (setSearchTerm(event.target.value))}></input>
        {JSONDATA.filter((val) => {
            if (searchTerm === " "){
                return val
            }
            else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val, key) => {
            return (
                <div className='names' key={key}>
                    <p>{val.first_name}</p>
                </div>
            )}
        )}
    </div>
  )
}

export default Main