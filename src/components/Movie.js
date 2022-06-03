import React from 'react'

function Movie(props) {
  console.log(props);
  return (
    <div>
        <h2>{props.title}</h2>
        <h4>{props.price}</h4>
    </div>
  )
}

export default Movie