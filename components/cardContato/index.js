import {RiPhoneFill, RiWhatsappLine} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'
import styles from './cardContato.module.scss'


export default function CardContato({dadosloja}) {  
  // const dadosloja = [
  //     {
  //       loj_id: "1722",
  //       loj_nome: "Loja para testes Denis",
  //       loj_endereco: "R Joao Pedro de Souza - monte libano - Campo Grande / MS",
  //       loj_telefone: "(67) 99546-4154 / (67) 94002-8922 / (67) 99310-2540 / (67) 98088-4504 ",
  //       loj_email: "denis.silva.ju@gmail.com",
  //       loj_foto: "",
  //       loj_latitude: "",
  //       loj_longitude: "",
  //       loj_telefone_app: [
  //           {
  //               telefone: "(67) 99546-4154",
  //               aplicativo: "1"
  //           },
  //           {
  //               telefone: "(67) 94002-8922",
  //               aplicativo: "1"
  //           },
  //           {
  //               telefone: "(67) 99310-2540",
  //               aplicativo: "1"
  //           },
  //           {
  //               telefone: "(67) 3384-7070",
  //               aplicativo: "0"
  //           },
  //           {
  //             telefone: "(67) 99310-2540",
  //             aplicativo: "1"
  //         },
  //         {
  //             telefone: "(67) 3384-7070",
  //             aplicativo: "0"
  //         }
  //       ]
  //   },

  //   {
  //     loj_id: "1723",
  //     loj_nome: "Loja para testes Denis 2",
  //     loj_endereco: "R Joao Pedro de Souza - monte libano - Campo Grande / MS",
  //     loj_telefone: "(67) 99546-4154 / (67) 94002-8922 / (67) 99310-2540 / (67) 98088-4504 ",
  //     loj_email: "denis.silva.ju@gmail.com",
  //     loj_foto: "",
  //     loj_latitude: "",
  //     loj_longitude: "",
  //     loj_telefone_app: [
  //         {
  //             telefone: "(67) 99546-4154",
  //             aplicativo: "1"
  //         },
  //         {
  //             telefone: "(67) 94002-8922",
  //             aplicativo: "0"
  //         },
  //         {
  //             telefone: "(67) 99310-2540",
  //             aplicativo: "1"
  //         },
  //         {
  //             telefone: "(67) 3384-7070",
  //             aplicativo: "0"
  //         }
  //     ]
  //   }
  // ]

  

  return(    
    <nav className={styles.dadosLoja}>{  
        dadosloja.map((item, index) => {
          return(          
            <div key={index} className={styles.envolveDadosLoja}>
              <p  className={styles.nomeLoja}>{item.loj_nome}</p>
              <p className={styles.enderecoLoja}>{item.loj_endereco}</p>
              <div>
                <span className={styles.telefonesLoja}>{item.loj_telefone_app.map((telefone, index) => {
                    // let listaStr = ["(" / ")"]      
                    return(
                      <a className={styles.telefones} key={index} href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${telefone.telefone.replace(/[\(\)\.\s-]+/g,'')}`} target="_blank">
                        {telefone.aplicativo == 1 ? <RiWhatsappLine style={{ color: 'rgb(24, 201, 24)', fontSize: '16', marginBottom: '-3' }}/> 
                        :
                        <RiPhoneFill style={{ marginBottom: '-3', fontSize: '15' }}/>}
                        {telefone.telefone} {index == item.loj_telefone_app.length-1 ? "" : "|" }
                      </a>
                    )}
                  )}
                </span>
              </div>      
              <span className={styles.mapaLoja}><MdLocationOn style={{ marginBottom: '-2' }}/>Mapa</span>
            </div>            
          )
        })
      }
    </nav>       
  )
    
 

 
  
}
