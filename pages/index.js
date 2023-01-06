
import React, { useEffect, useState } from 'react'
import CardAnuncio from "../components/cardAnuncio";
import { lojaId, urlRequisicao } from "../utils";
import ListagemVeiculos from '../components/listagemVeiculos';
import styles from './pageInicial.module.scss'

export default function  Home({destaques}) {  
  return(
    <div className={styles.container}>
      <ListagemVeiculos anuncios={destaques}/>
    </div>
    
  )
}

export async function getStaticProps(){
  let url   = urlRequisicao
  let loja          = lojaId
  try {
    let body = JSON.stringify({
      acao : "destaques"
      , loja : loja
      , resultados : 8
    })  

    const data = await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })

    const destaques = await data.json()


    return {    
      props: {destaques}
    }
  } catch(e) {
    return {
      notFound: true
    }
  }
  
  
}

