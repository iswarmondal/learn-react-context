import React, {useState, useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from '../state/MoveContext'

function Movies() {
const value = useContext(MovieContext)
  return (
    <div>
        Movies
        {
            value.map((ele) => {
                return <Movie title={ele.name} price={ele.price} key={ele.id} />
            })
        }
    </div>
  )
}

export default Movies