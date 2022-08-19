import React from 'react'
import Button from '../Button/Button'
import Style from './Card.module.css'

const Card = ({img, nome, descricao, precoAntigo, precoAtual, nVezesParcela, parcela}) => {
  return (
    <div className={Style.card}>
        <img src={img} className={Style.imgCard}></img>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <h5>De: {precoAntigo}</h5>
        <h4>Por: {precoAtual}</h4>
        <p>ou {nVezesParcela}x por {parcela}</p>
        <Button texto="Comprar" estilo={Style.btn}/>
    </div>
  )
}

export default Card