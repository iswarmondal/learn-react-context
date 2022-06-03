import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movie, setMovie] = useState([
        {
            'name':'Harry Potter',
            'price': 10,
            'id':1
        },
        {
            'name':'The Notebook',
            'price': 8,
            'id': 2
        },
        {
            'name' : 'Pokemon',
            'price': 9,
            'id': 3
        }
    ])
  return (
      <MovieContext.Provider value={movie}>
          {props.children}
      </MovieContext.Provider>
  )
}