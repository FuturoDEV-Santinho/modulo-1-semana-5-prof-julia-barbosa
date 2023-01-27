import React from 'react'

const TemplateExpressions = () => {
  const name = "MARIA";
  const livro = {
    preco: 10,
    titulo: "bts"
  }

  return (
    <div>Template Expressions
      <h1>Ola {name}, tudo bem?</h1>
      <h1>o titulo deste livro é: {livro.titulo}</h1>
      <h1>o preço deste livro é: {livro.preco}</h1>
      <p>{console.log("ola")}</p>
    </div>
  )
}

export default TemplateExpressions;