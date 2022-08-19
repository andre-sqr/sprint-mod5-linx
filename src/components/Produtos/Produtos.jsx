import React from 'react'
import Card from '../Card/Card'
import Style from './Produtos.module.css'

const Produtos = () => {
  return (
    <div className={Style.produtos}>
        <h3>Sua seleção especial</h3>
        <div className={Style.divProdutos}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Produtos