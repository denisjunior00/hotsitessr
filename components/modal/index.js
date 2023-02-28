import styles from './modal.module.scss'
import { useState } from 'react'

const Modal = (props) => {  

    const {className, style} = props

    if(!props.modalAberto) return null
    return(
        <div className={styles.fundoModal} onClick={() => {props.fecharModal()}}>
            <div className={`${styles.containerModal} ${className}`} style={{...style}}>                
                {props.children}
            </div>
        </div>
    )
  



    // modalAberto == true 
    //     ?

    //         return(     
    //             {
    //                 <div className={styles.fundoModal} onClick={() => {setModalAberto(false)}}>
    //                     <div className={styles.containerModal}>                
    //                         {props.children}
    //                     </div>
    //                 </div>
    //             }
        
    //         )
                
    //     : null

    
}

export default Modal;