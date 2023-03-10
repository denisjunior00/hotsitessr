
import React, { useEffect, useState } from 'react'
import CardAnuncio from "../components/cardAnuncio";
import { lojaId, urlRequisicao, fetcher } from "../utils";
import ListagemVeiculos from '../components/listagemVeiculos';
import {BiSearch} from 'react-icons/bi'
import Select from 'react-select'
import styles from './pageInicial.module.scss'
import Noticias from '../components/noticias';
import CardContato from '../components/cardContato';


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
  return(    

    <>      
    
    <div className={styles.container}>
      <div className={styles.cardContatos}>
        <CardContato dadosloja={dadosloja}/>
      </div>
      <div className={styles.envolveBusca}>
        <div className={styles.buscaVeiculos}>
          <p className={styles.titulo}>Veículos em destaque</p>
          <form className={styles.busca}>
            {              
              !loadingSelect 
              ?
                <>
                  <Select className={styles.buscaMarcas} options={marcas.map((marca, index) => {return { value: marca.mar_nome, label: marca.mar_nome }})} defaultValue={{ value: 'Marca', label: 'Marca' }} onChange={item => setMarca(item.value)}/>
                  <Select className={styles.buscaModelos} options={modelos.map((modelos, index) => {return { value: modelos.vei_modelo, label: modelos.vei_modelo}})} defaultValue={{ value: 'Modelo', label: 'Modelo'}} onChange={item => setModelo(item.value)} />
                </>
              :
              null              
            }            
            <button type='button'><BiSearch style={{fontSize: "17"}}/> Buscar </button>
          </form>
        </div>
        <ListagemVeiculos anuncios={destaques}/>
      </div>    
      <div className={styles.cardContatosMobile}>
        <CardContato dadosloja={dadosloja}/>
      </div>
    </div>
    {    
      ultimasnoticias ?             
        <Noticias noticias={ultimasnoticias}/>
      :
      null
    }    
    </>
  )
}

export async function getStaticProps(){
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
      props: {data}
    }

  } catch(e) {
    return {
      notFound: true
    }
  } 
  
}

