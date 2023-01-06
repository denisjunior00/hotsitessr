
import React, { useEffect, useState } from 'react'
import CardAnuncio from "../components/cardAnuncio";
import { lojaId, urlRequisicao } from "../utils";
import ListagemVeiculos from '../components/listagemVeiculos';
import {BiSearch} from 'react-icons/bi'
import Select from 'react-select'
import styles from './pageInicial.module.scss'

export default function  Home({destaques}) {

  let inputMarcas = []
  let inputModelo = []

  return(
    
    <div className={styles.container}>
      <div className={styles.envolveBusca}>
        <div className={styles.buscaVeiculos}>
          <p className={styles.titulo}>Veículos em destaque</p>
          <form className={styles.busca}>
            <Select className={styles.buscaMarcas} options={inputMarcas} defaultValue={{ value: 'Marca', label: 'Marca' }} />
            <Select className={styles.buscaModelos} options={inputModelo} defaultValue={{ value: 'Modelo', label: 'Modelo'}} />
            <button type='submit'><BiSearch style={{fontSize: "17"}}/> Buscar</button>
          </form>         
        </div>
        <ListagemVeiculos anuncios={destaques}/>
      </div>
      
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

