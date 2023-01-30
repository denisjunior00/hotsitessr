
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
import Contato from '../components/contato'
import Estoque from '../components/estoque'
import Loja from '../components/loja'
import Pedidos from '../components/pedidos'

export default function  Home({data}) { 
  
  const {destaques, ultimasnoticias, marcas, dadosloja} = data
  const [marca, setMarca] = useState("Marca")
  const [modelos, setModelos] = useState([])
  const [modelo, setModelo] = useState("Modelo")
  const [loadingSelect, setLoadingSelect] = useState(true)  

  useEffect(() => {
    setLoadingSelect(false)
  }, [])
  useEffect(() => {
    if(marca != "Marca")getModelos()
  }, [marca])

  async function getModelos() {
    let body = JSON.stringify({
      "acoes": 
        [         
          {
            "acao": "modelos",
            "params":{ "marca": marca }
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
    setModelos(data.modelos)
  
  }  
  
  return (
    <>
    <div style={{display: 'flex',gap: 20,marginBottom: 50, Direction: 'row'}}>
      <div onClick={() => setPageSelecionada('home')}>
        HOME
      </div>
      <div onClick={() => setPageSelecionada('loja')}>
        LOJA
      </div>
      <div onClick={() => setPageSelecionada('estoque')}>
        ESTOQUE
      </div>
      <div onClick={() => setPageSelecionada('pedidos')}>
        PEDIDOS
      </div>
      <div onClick={() => setPageSelecionada('contato')}>
        CONTATO
      </div>
    </div>
     {pages[pageSelecionada] || (<></>)}
    </>
  )    
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

