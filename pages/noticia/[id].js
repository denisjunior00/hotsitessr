import styles from './viewNoticia.module.scss'
import {ImShare} from 'react-icons/im'
import Image from "next/image"
import { loaderImagens } from '../../utils/index';
import { lojaId, urlRequisicao, fetcher } from "../../utils";
import Modal from '../../components/modal'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function ViewNoticia ({data}) { 

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const closeMenu = () => setShowMenu(false);

    const { query } = useRouter()

    const {viewnoticia} = data

    const noticia = viewnoticia    

    const [fotoModal, mudaFotoModal] = useState(null) 

    const[modalImagemAberta, setmodalImagemAberta] = useState(false)
    function abrirModalImagem(foto) {
      mudaFotoModal(foto)   
      setmodalImagemAberta(true)
    }
    function fecharModalImagem() {
      setmodalImagemAberta(false)
    } 

    // console.log(noticia)
    
    // const {noticia} = data

    // const noticia = [        
    //     {
    //         art_titulo: "Venda de motos cresce 12,5% em julho",
    //         art_data: "1565012640",
    //         art_texto: "A venda de motos cresceu 12,51% em julho na comparação com junho. No mês passado, foram vendidas 90.057 unidades contra 80.044 no período anterior, de acordo com dados divulgados pela Fenabrave, federação que reúne os distribuidores de veículos. O bom resultado justifica-se pelo maior número de dias úteis em julho, afirmou o Presidente da Fenabrave, Alarico Assumpção Jr. “O mês de julho teve quatro dias úteis a mais do que junho, o que refletiu, positivamente, nos volumes, em dias corridos”. No acumulado do ano, o setor de motos também mostra recuperação. Entre janeiro e julho foram emplacadas 620.220 motocicletas, alta de 16,34% em relação ao mesmo período de 2018, quando o número atingiu 533.127 unidades. A previsão é que as vendas de motocicletas cheguem a 1 milhão e 100 mil unidades até dezembro.",
    //         art_fonte: "Infomoto - Foto: Divulgação",
    //         art_fototexto: "",
    //         art_foto1: "stored/news/1565012697_62762.jpg",
    //         art_foto2: "",
    //         art_foto3: "",
    //         art_foto4: "",
    //         art_foto5: "",
    //         art_foto6: "",
    //         art_foto7: "",
    //         art_foto8: "",
    //         art_foto9: ""
    //     }
    // ]

    // const options = [
    //     { value: 'WhatssApp', label: 'WhatssApp' },
    //     { value: 'Facebook', label: 'Facebook' }        
    //   ]

    const textoNoticia = noticia[0].art_texto.split('. ')
    return(
        <div className={styles.container}>
            <div className={styles.envolveTituloComBotaoCompartilhar}>
                <h1 className={styles.tituloNoticia}>{noticia[0].art_titulo.split('.')}</h1>
                {/* <BotaoCompartilhar/>                              */}
                <div className={styles.dropdown}>
                  <button onClick={toggleMenu} className={styles.dropbtn}>
                  <ImShare/> Compartilhar
                  </button>
                  <div className={`${styles.dropdownContent} ${showMenu && styles.show}`} onBlur={closeMenu}>
                    <a target="_blank" href={`https://api.whatsapp.com/send?text=www.nomedosite.com.br/noticia/${query.id}`}>WhatsApp</a>
                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.nomedosite.com.br/noticia/${query.id}`}>Facebook</a>
                  </div>
                </div>
            </div>
            <p className={styles.fonteNoticia}>{noticia[0].art_fonte}</p>
            <div className={styles.envolveImagemComTextoNoticia}>
              <div className={styles.textoNoticia}>
                <div onClick={() => {abrirModalImagem(noticia[0].art_foto1)}} className={styles.envolveImagemPrincipal}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/>Ampliar</span><Image fill sizes="(max-width: 100px) 1vw" alt={'imagem principal'} src={`${noticia[0].art_foto1}`} loader={loaderImagens}/></div>                  
                {textoNoticia}
              </div>
            </div>
            <div className={styles.maisFotosNoticia}>
              <h3>Mais fotos</h3>
              <div className={styles.fotosNoticia}>
                {
                  noticia[0].art_foto2 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto2)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto2}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto3 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto3)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto3}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto4 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto4)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto4}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto5 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto5)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto5}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto6 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto6)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto6}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto7 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto7)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto7}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto8 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto8)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto8}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }
                {
                  noticia[0].art_foto9 ? <div onClick={() => {abrirModalImagem(noticia[0].art_foto9)}} className={styles.maisImagensNoticias}><span className={styles.textoAmpliarImg}><BiSearch style={{fontSize: "17", marginBottom: "-4"}}/> Ampliar</span><Image className={styles.outrasImagensNoticias} fill sizes="(max-width: 100px) 1vw" src={`${noticia[0].art_foto9}`} alt={'imagem da noticia'} loader={loaderImagens}/></div> : null
                }                  
              </div>
            </div>
            {
              
                <Modal style={{width: "37%", height: "30vw"}} modalAberto={modalImagemAberta} fecharModal={() => {fecharModalImagem()}}>
                  <div className={styles.envolveImagemModal}>
                    <Image fill sizes="(max-width: 100px) 1vw" src={fotoModal} alt={'imagem da noticia'} loader={loaderImagens}/>
                  </div>      
                </Modal>
              
            }
            
        </div>
    )
}

export async function getServerSideProps({req, res}){
    let idNoticia = req.url.split('/')[2]
    try {
      let body = JSON.stringify({
        "acoes": 
          [           
            {
              "acao": "viewnoticia",
              "params":{"id": idNoticia}
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