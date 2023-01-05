import {BiSearch} from 'react-icons/bi'
import styles from './pageInicial.module.scss';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import CardAnuncio from "../components/cardAnuncio";

import { api, lojaId, urlRequisicao } from "../utils";

export default function Home({destaques}) {  


  const inputMarcas = [

    { value: 'Marca', label: 'Marca' }
  ]

  const inputModelo = [

    { value: 'Modelo', label: 'Modelo' }
  ]

  

  return <div>{destaques[0].vei_id}</div>
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
        <div className={styles.painelAnuncios}>
          <div className={styles.anunciosDestaque}>
          
            
              {
                destaques && destaques.length ? 
                <div className={styles.listagemAnuncios}>
                  {
                    destaques.map((anuncio, index) => {
                      return(
                        <CardAnuncio key={index} anuncio={anuncio}/>
                      )
                    })
                  }   
                </div> 
                : <div className={styles.listagemSemAnuncio}> Nenhum anuncio encontrado! </div>
                
              }
              
          </div>
        </div>
          
      </div>      
      
    </div>

    
  )
  
}

export async function getStaticProps(){
  let urlRequisicao   = 'https://dev.shopcar.com.br/webservice/shopcar_multiplos.php'
  let lojaId          = ["1722"]
  try {
    let body = JSON.stringify({
      acao : "destaques"
      , loja : lojaId
      , resultados : 8
    })  

    const data = await fetch(urlRequisicao,{
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

