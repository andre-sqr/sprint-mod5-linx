import React from 'react'

const News = () => {
  return (
    <div>
        <h1>Compartilhe as novidades</h1>
        <h2>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h2>
        <div>
        <label>Nome do seu amigo:</label>
        <input type="text"></input>
        <label>E-mail:</label>
        <input type="email"></input>
        </div>
        <button>Enviar agora</button>
    </div>
  )
}

export default News