import {RiPhoneFill, RiWhatsappLine} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'
import {FaRegCalendarTimes} from 'react-icons/fa'
import styles from './cardContato.module.scss'
// import Modal from 'react-modal';
import Modal from '../modal'
import { useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};

export default function CardContato({dadosloja}) {  
  const[modalMapaAberto, setModalMapaAberto] = useState(false)
  const[modalHorariosAberto, setModalHorariosAberto] = useState(false)
  function abrirModalMapa() {    
    setModalMapaAberto(true)
  } 
  
  function abrirModalHorarios() {    
    setModalHorariosAberto(true)
  }  
  function fecharModalMapa() {    
    setModalMapaAberto(false)
  }
  function fecharModalHorarios() {    
    setModalHorariosAberto(false)
  } 
  // let Modal = window.ReactDOM.findDOMNode(Modal);
  // Modal.addEventListener('click', function(e) {
  //   if (e.target == this) setModalMapaAberto(false);
  // });
  
  
  return(
    <>
      <nav className={styles.dadosLoja}>{
          dadosloja.map((item, index) => {
            return(          
              <div key={index} className={styles.envolveDadosLoja}>
                <p className={styles.nomeLoja}>{item.loj_nome}</p>
                <p className={styles.enderecoLoja}>{item.loj_endereco}</p>
                <div>
                  <span className={styles.telefonesLoja}>{item.loj_telefone_app.map((telefone, index) => {
                      return(
                        <a className={styles.telefones} key={index} href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${telefone.telefone.replace(/[\(\)\.\s-]+/g,'')}`} target="_blank">
                          {telefone.aplicativo == 1 ? <RiWhatsappLine style={{ color: 'rgb(24, 201, 24)', fontSize: '16', marginBottom: '-3' }}/> 
                          :
                          <RiPhoneFill style={{ marginBottom: '-3', fontSize: '15', color: 'black' }}/>}
                          {telefone.telefone} {index == item.loj_telefone_app.length-1 ? "" : "|" }
                        </a>
                      )}
                    )}
                  </span>                
                </div>
                <div className={styles.envolveMapaHorarios}>
                {dadosloja[0].loj_latitude && dadosloja[0].loj_longitude ? <button className={styles.botaoMapaLoja} onClick={() => {abrirModalMapa()}}><MdLocationOn style={{ marginBottom: '-2'}}/>Mapa</button> : null }
                  {dadosloja[0].loj_horarios_atendimento ? <button onClick={() => {abrirModalHorarios()}} className={`${styles.botaoHorariosAtendimento}`}><FaRegCalendarTimes style={{marginBottom: '-1'}}/> Horários de atendimento</button> : null }
                </div>              
              </div>
            )
          })
        }  
      </nav>
     
      <Modal modalAberto={modalMapaAberto} fecharModal={() => {fecharModalMapa()}}>
        <div className={styles.modalMapa}>
        <iframe
          className={styles.mapa}              
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.250493730164!2d-54.7738105!3d-22.2305727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9489078d89ff44fd%3A0x433d05089a9e4d7e!2sR.%20Fernando%20Ferrari%2C%201175%20-%20Vila%20Industrial%2C%20Dourados%20-%20MS%2C%2079840-120!5e0!3m2!1spt-BR!2sbr!4v1675196720125!5m2!1spt-BR!2sbr"
        />            
        </div>
        <span onClick={() => {setModalMapaAberto(false)}} className={styles.botaoFecharHorarios}>OK</span>
      </Modal>
      <Modal modalAberto={modalHorariosAberto} fecharModal={() => {fecharModalHorarios()}}>                        
        <div className={styles.listaHorarios}>
          <div className={styles.tituloHorarios}>HORÁRIOS DE ATENDIMENTO.</div>
          <div className={styles.envolveListaHorarios}>
            { 
              dadosloja[0].loj_horarios_atendimento 
              ? 
                Object.entries(dadosloja[0].loj_horarios_atendimento).map(([nomeDia, horarios], index) => {                  
                    return(
                      <div key={index} className={styles.envolveHorarios}>
                        <div className={styles.horarios}>
                          <span className={styles.nomeDia}>{nomeDia.replace('hor', '').toUpperCase()}</span>
                          <div className={styles.envolveHoras}>                                                     
                            {horarios[0] ?  <span className={styles.horas}>{horarios[0]} - {horarios[1]}</span> : null}
                            {horarios[2] ?  <span className={styles.horas}>{horarios[2]} - {horarios[3]}</span> : null}
                          </div>
                        </div>
                      </div>
                    )
                })
              : null
            }
          </div>
        </div>   
        <span onClick={() => {setModalHorariosAberto(false)}} className={styles.botaoFecharHorarios}>OK</span> 
      </Modal>
    </>
  )
}
