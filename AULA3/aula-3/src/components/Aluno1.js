import React from 'react'

const Aluno1 = (props) => {
  return (
    <div>Aluno1
        <h1>Meu nome é : {props.name}</h1>
    </div>
  )
}

Aluno1.propTypes = {
  name: Aluno1.string
}


export default Aluno1