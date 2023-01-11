
import styles from './noticias.module.scss'
import Image from "next/image"
import { formatadorValor, loaderImagens } from '../../utils/index';
import { RiAddCircleFill } from 'react-icons/ri'

const Noticias = () => {

    const listaNoticias = [
        {        
            art_id: "15994",
            art_titulo: "Honda apresenta CG 2022 com novo design",
            art_data: "1623958500",
            art_foto1: "stored/news/1623958694_23134.jpg"
        },

        {        
            art_id: "15994",
            art_titulo: "Honda apresenta CG 2022 com novo design CG 2022 com novo design",
            art_data: "1623958500",
            art_foto1: "../../public/img/imgTeste"
        },

        {        
            art_id: "15994",
            art_titulo: "Honda apresenta CG 2022 com novo design novo design Honda apresenta CG 2022 com novo design Honda apresenta CG 2022 com novo design",
            art_data: "1623958500",
            art_foto1: "../../public/img/imgTeste"
        },

        {        
            art_id: "15994",
            art_titulo: "Honda apresenta CG 2022 com novo design",
            art_data: "1623958500",
            art_foto1: "../../public/img/imgTeste"
        },

        {        
            art_id: "15994",
            art_titulo: "Honda apresenta CG 2022 com novo design",
            art_data: "1623958500",
            art_foto1: "../../public/img/imgTeste"
        },

        {        
            art_id: "15994",
            art_titulo: "Honda apresenta CG 2022 com novo design Honda apresenta CG 2022 com novo design Honda apresenta CG 2022 com novo design",
            art_data: "1623958500",
            art_foto1: "stored/news/1623958694_23134.jpg"
        },
        
    ]



    return(
        <div className={styles.container}>
            <div className={styles.envolveNoticias}>
                <h2 className={styles.titulo}>Últimas notícias</h2>
                <div className={styles.agrupaNoticias}>
                    <div className={styles.noticiaComImg}>
                        <a>
                            <div className={styles.envolveImagem}>
                              <Image
                                className={styles.teste}
                                loader={loaderImagens}
                                src= {`${listaNoticias[0].art_foto1}`}
                                fill                                
                            />
                            </div>
                            <p>{`${listaNoticias[0].art_titulo}`}</p>
                        </a>                       
                    </div>

                    <div className={styles.listaNoticias}>
                        {
                        listaNoticias.map((noticia, index) => {
                            return(
                            <a>{noticia.art_titulo}</a>
                            )
                        })
                        }
                    </div>                                  
                </div>
                <a className={styles.btMaisNoticias}><RiAddCircleFill style={{fontSize: "15"}}/> Mais notícias.</a> 
            </div>            
        </div>
    )
}





export default Noticias;



