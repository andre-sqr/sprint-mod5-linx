import React from 'react'
import Diagonal from '../Diagonal/Diagonal'
import Style from './Header.module.css'

const Header = () => {
  return (
    <div>
        <Diagonal/>
        <div className={Style.header}>
        <h2 className={Style.headerh2}>uma seleção de produtos</h2>
        <h1 className={Style.headerh1}>especial para você</h1>
        <h3>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
        <div className={Style.divButtons}> 
            <button className={Style.headerButton}>Conheça a Linx</button>
            <button className={Style.headerButton}>Ajude o algoritmo</button>
            <button className={Style.headerButton}>Seus produtos</button>
            <button className={Style.headerButton}>Compartilhe</button>
        </div>
        </div>
    </div>
  )
}

export default Header