import React from 'react'

// const props = (props) => {
//     const {name} = props // destructioning
//   return (
//     <div>{name}</div>
//   )
// }
const props = ({name,email})=>{
  return (
    <>
    <h1>{name}</h1>
    <p>{email}</p>
    </>
  )
}

export default props