// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css
import {RiPhoneFill} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'
import styles from './cardContato.module.scss'


export default function CardContato() {

  return(
    <nav className={styles.dadosLoja}>      
      <p className={styles.nomeLoja}>s.i motors</p>
      <p className={styles.enderecoLoja}>Av. Fabio Zahran, 7279 - Jd. America - Campo Grande / MS</p>
      <div>
      <RiPhoneFill/> <span className={styles.telefonesLoja}> (67) 3382-0002 / (67) 99874-5000</span>
      </div>
      
      <span className={styles.mapaLoja}><MdLocationOn/>Mapa</span>
    </nav>
  )
  
}
