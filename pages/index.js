
import React, { useEffect, useState } from 'react'
import CardAnuncio from "../components/cardAnuncio";
import { lojaId, urlRequisicao, fetcher } from "../utils";
import ListagemVeiculos from '../components/listagemVeiculos';
import {BiSearch} from 'react-icons/bi'
import Select from 'react-select'
import styles from './pageInicial.module.scss'
import Noticias from '../components/noticias';
import CardContato from '../components/cardContato';
import Inicio from '../components/inicio';


export default function  Home({data}) { 

  return <Inicio data={data}/>
}
export async function getServerSideProps(){
  
  try {
    let body = JSON.stringify({
      "acoes": 
        [
          {
            "acao": "dadosloja"
          },
          {
            "acao": "destaques",
            "params":{"resultados": 8 }
          },
          {
            "acao": "ultimasnoticias",
            "params":{"resultados": 7}
          },
          {
            "acao": "marcas",
          }         
        ],
      "loja": lojaId
    }) 

    const response = await fetch(urlRequisicao,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
    
    const data = await response.json()
    return {    
      props: {data }
    }

  } catch(e) {
    return {
      notFound: true
    }
  } 
  
}

