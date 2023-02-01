import styles from './modal.module.scss'

const Modal = (props) => {
    return(        
        <div className={styles.fundoModal}>
            <div className={styles.containerModal}>                
                {props.children}
            </div>
        </div>
    )
}

export default Modal;