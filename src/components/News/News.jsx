import React from 'react'
import Button from '../Button/Button'
import Style from './News.module.css'

const News = () => {
  return (
    <div className={Style.all}>
        <h1 className={Style.h1}>Compartilhe as novidades</h1>
        <h2 className={Style.h2}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h2>
        <div className={Style.sectionRow}>
          <div className={Style.sectionColumn}>
          <label>Nome do seu amigo:</label>
          <input type="text" className={Style.input}></input>
          </div>
          <div className={Style.sectionColumn}>
            <label>E-mail:</label>
            <input type="email" className={Style.input}></input>
          </div>
        </div>
        <Button className={Style.btn} texto="Enviar agora"/>
    </div>
  )
}

export default News