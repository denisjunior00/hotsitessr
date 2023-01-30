import Image from "next/image"
import styles from "./cardAnuncio.module.scss"
import Link from "next/link"
import { formatadorValor, loaderImagens } from '../../utils/index';

const CardAnuncio = ({anuncio}) => {    

    

    // const anuncio = {
    //     vei_id: "1093067",
    //     vei_modelo: "Cauype Sport 1.6",
    //     vei_ano: "12/13",
    //     vei_preco: "25000",
    //     vei_combustivel: "3",
    //     cor_nome: "Bege",
    //     mar_nome: "ASA",
    //     vei_foto: "stored/veiculos/1669985140_34973pd.jpg"
    // }
    
    return(
        <>
            <div className={styles.cardAnuncio}>
                <span className={styles.detalhes}>Ver detalhes</span>
                <div className={styles.envolveImagemVeiculo}>
                    <Image className={styles.imagemVeiculo} fill sizes="(max-width: 100px) 100vw" alt={anuncio.vei_modelo} src={`${anuncio.vei_foto}`} loader={loaderImagens}/>
                </div>                
                <p className={styles.modelo}>{anuncio.vei_modelo}</p>
                <span className={styles.ano}>{anuncio.vei_ano} - {anuncio.cor_nome}</span>
                <div className={styles.preco}>{formatadorValor(anuncio.vei_preco)}</div>
            </div>
        </>
        
    )
}

export default CardAnuncio;