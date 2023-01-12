
import React, { useEffect, useState } from 'react'
import CardAnuncio from "../components/cardAnuncio";
import { lojaId, urlRequisicao } from "../utils";
import ListagemVeiculos from '../components/listagemVeiculos';
import {BiSearch} from 'react-icons/bi'
import Select from 'react-select'
import styles from './pageInicial.module.scss'
import Noticias from '../components/noticias';

export default function  Home({data}) {

  const {destaques, ultimasnoticias} = data

    console.log(data)
  const [listaNoticias, setListaNoticias] = useState(true)
  useEffect(() => {
    setListaNoticias(false)
  }, [])

  let inputMarcas = []
  let inputModelo = []

  const [loadingSelect, setLoadingSelect] = useState(true)
  useEffect(() => {
    setLoadingSelect(false)
  }, [])

  return(

    <>   
    
    <div className={styles.container}>
      <div className={styles.envolveBusca}>
        <div className={styles.buscaVeiculos}>
          <p className={styles.titulo}>Veículos em destaque</p>
          <form className={styles.busca}>
            {
              
              !loadingSelect ?
              <>
                <Select className={styles.buscaMarcas} options={inputMarcas} defaultValue={{ value: 'Marca', label: 'Marca' }} />
                <Select className={styles.buscaModelos} options={inputModelo} defaultValue={{ value: 'Modelo', label: 'Modelo'}} />
              </>
              :
              null
              
            }
            
            <button type='submit'><BiSearch style={{fontSize: "17"}}/> Buscar</button>
          </form>         
        </div>
        <ListagemVeiculos anuncios={destaques}/>
      </div>     
    </div>
    {
    
      !listaNoticias ?
      <>        
        <Noticias noticias={ultimasnoticias}/>
      </>
      :
      null
    }
    
    </>
  )
}

export async function getStaticProps(){
  let url   = urlRequisicao
  let loja  = lojaId
  try {
    let body = JSON.stringify({
      "acoes": 
        [
          {
            "acao": "destaques",
            "params":{"resultados": 8 }
          },
          {
            "acao": "ultimasnoticias",
            "params":{"resultados": 7}
          },
        ],
      "loja": lojaId
    })  

    const response = await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })

    const data = await response.json()
    return {    
      props: {data}
    }

  } catch(e) {
    return {
      notFound: true
    }
  }
  
  
}

