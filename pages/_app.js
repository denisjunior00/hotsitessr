import Menu from '../components/menuTopo'
import styles from '../styles/styles.module.scss'
import '../styles/globals.css'
import Rodape from '../components/rodape'

export default function App({ Component, pageProps }) {
  return(
    <div>
    
      <Menu/>
        <div className={styles.container}>
          <Component {...pageProps} />  
        </div>    
      <Rodape/>
    
    </div>
    
  )
  
}
