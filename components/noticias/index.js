
import styles from './noticias.module.scss'
import Image from "next/image"
import { formatadorValor, loaderImagens } from '../../utils/index';
import { RiAddCircleFill } from 'react-icons/ri'
import Link from 'next/link';

const Noticias = ({noticias}) => {
    return(
        <div className={styles.container}>
            <div className={styles.envolveNoticias}>
                <h2 className={styles.titulo}>Últimas notícias</h2>
                <div className={styles.agrupaNoticias}>
                    <div className={styles.noticiaComImg}>
                        <Link href={'/visualizarNoticia'} className={styles.linkNoticias}>
                            <span className={styles.leiaMais}><RiAddCircleFill style={{fontSize: "15"}}/> Leia mais.</span>
                            <div className={styles.envolveImagem}>
                              <Image
                                className={styles.teste}
                                loader={loaderImagens}
                                src= {`${noticias[0].art_foto1}`}
                                fill      
                                sizes="(max-width: 100px) 100vw"
                                alt={noticias[0].art_titulo}                        
                            />
                            </div>
                            <p>{`${noticias[0].art_titulo}`}</p>
                        </Link>                       
                    </div>

                    <div className={styles.listaNoticias}>
                        {
                        noticias.map((noticia, index) => {
                            if(index == 0) return null
                            return(
                            <Link href={'/visualizarNoticia'} className={styles.linkNoticias} key={noticias[index].art_id}>{noticia.art_titulo}</Link>
                            )
                        })
                        }
                    </div>
                </div>
                <Link href={'https://www.shopcar.com.br/noticias/'} target={"_blank"} className={styles.btMaisNoticias}><RiAddCircleFill style={{fontSize: "15"}}/> Mais notícias.</Link>
            </div>            
        </div>
    )
}





export default Noticias;



