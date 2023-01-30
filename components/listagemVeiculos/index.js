import React, { useEffect, useState } from 'react';
import CardAnuncio from "../cardAnuncio";
import { lojaId, urlRequisicao } from "../../utils";
import styles from './listagemVeiculos.module.scss'
import Link from "next/link"

export default function ListagemVeiculos({anuncios}) {
  return(    
    
    anuncios.length ? 
    <div className={styles.listagemAnuncios}>
      {
        anuncios.map((anuncio) => {
            return(
              <Link href={`/estoque`} key={anuncio.vei_id} className={styles.anuncios}>
                <CardAnuncio anuncio={anuncio}/>
              </Link>
            )
        })
      }   
    </div> 
    : <div className={styles.listagemSemAnuncio}>Nenhum anuncio encontrado!</div>
  ) 
}