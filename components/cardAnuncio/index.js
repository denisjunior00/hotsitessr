import Image from "next/image"
import styles from "./cardAnuncio.module.scss"
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
    
    

    let urlAnuncio = "stored/veiculos/1666031971_44427pd.jpg"


    return(
        <>       
        
            <div className={styles.cardAnuncio}>
                <span className={styles.detalhes}>Ver detalhes</span>
                <div className={styles.envolveImagemVeiculo}>
                    <Image className={styles.imagemVeiculo} layout="fill" src={`${anuncio.vei_foto}`} loader={loaderImagens}/>
                </div>                
                <p>{anuncio.vei_modelo}</p>
                <span className={styles.preco}>{anuncio.vei_ano} - {anuncio.cor_nome}</span>
                <div>{formatadorValor(anuncio.vei_preco)}</div>
            </div>

        </>
        
    )
}

export default CardAnuncio;