import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import Button from '../Button/Button';
import Card from '../Card/Card'
import Style from './Produtos.module.css'

const Produtos = () => {
    const [informacoes, setInformacoes] = useState([]);
    const [pagina, setPagina] = useState(1);

    const handleReq = async ()=> {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pagina}`);
        const json = await response.json()
        setInformacoes([...informacoes,...json.products])
        console.log(informacoes)
    }

    const nextPagina = ()=> {
        setPagina(pagina + 1)
    }

    useEffect(()=> {
        handleReq()
    }, [pagina])

  return (
    <div className={Style.produtos}>
        <h3>Sua seleção especial</h3>
        <div className={Style.divProdutos}>
        {informacoes.length>0 &&
            informacoes.map((item,index) => {
              return (
        <Card
        key={index}
        img={item.image}
        nome={item.name}
        descricao={item.description}
        precoAntigo={item.oldPrice}
        precoAtual={item.price}
        nVezesParcela={item.installments.count}
        parcela={item.installments.value}
        />
              );
        })}
        </div>
        <Button estilo={Style.btn} texto="Ainda mais produtos aqui!" onClick={nextPagina}/>
    </div>
  )
}

export default Produtos