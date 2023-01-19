import {RiPhoneFill, RiWhatsappLine} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'
import styles from './cardContato.module.scss'


export default function CardContato({dadosLoja}) {

  const dadosloja = [
    {
      loj_id: "1722",
      loj_nome: "Loja para testes Denis",
      loj_endereco: "R Joao Pedro de Souza - monte libano - Campo Grande / MS",
      loj_telefone: "(67) 99546-4154 / (67) 94002-8922 / (67) 99310-2540 / (67) 98088-4504 ",
      loj_email: "denis.silva.ju@gmail.com",
      loj_foto: "",
      loj_latitude: "",
      loj_longitude: "",
      loj_telefone_app: [
          {
              telefone: "(67) 99546-4154",
              aplicativo: "1"
          },
          {
              telefone: "(67) 94002-8922",
              aplicativo: "1"
          },
          {
              telefone: "(67) 99310-2540",
              aplicativo: "1"
          },
          {
              telefone: "(67) 3384-7070",
              aplicativo: "0"
          }
      ]
  }



  ]

  return(
    <nav className={styles.dadosLoja}>
      <p className={styles.nomeLoja}>{dadosloja[0].loj_nome}</p>
      <p className={styles.enderecoLoja}>{dadosloja[0].loj_endereco}</p>
      <div>
      <span className={styles.telefonesLoja}>{dadosloja[0].loj_telefone_app.map((item, index) => {
        return(
          <a className={styles.telefones} key={index}> {index == 0 ? "" : "|" } {item.aplicativo == 1 ? <RiWhatsappLine style={{ color: 'green', fontSize: '16', marginBottom: '-3' }}/> : <RiPhoneFill style={{ marginBottom: '-3', fontSize: '15' }}/>} {item.telefone}</a>
        )}
      )}</span>
      </div>      
      <span className={styles.mapaLoja}><MdLocationOn style={{ marginBottom: '-2' }}/>Mapa</span>
    </nav>
  )
  
}
