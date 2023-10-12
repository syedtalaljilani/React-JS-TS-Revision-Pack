import React from 'react';
interface childprops{
    name:string,
}
// type of component is assign and type of prop assign to component and destructuring
const prop:React.FC<childprops> = ({name}:childprops) => {
  return (
    <div>{name}</div>
  )
}

export default prop