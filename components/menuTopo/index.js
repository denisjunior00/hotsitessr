import {FaInstagram, FaFacebookSquare} from 'react-icons/fa'
import {defaultColors} from '../../utils'
import logo from '../../public/img/logo.svg'
import slide1 from '../../public/img/slide/slide1.png'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./menuTopo.module.scss"
import { useEffect, useState } from 'react'
import CardContato from '../cardContato'


export default function Menu({children}) { 
  const router = useRouter()

  const activeRoute = router.pathname
    
  const handleClick = (evento, rota) => {
    evento.preventDefault()
    router.push(rota)
  }  

  const [menuAberto, setMenuAberto] = useState(false);

    return (
      
          <>

          <div className={styles.container}>

            {/* <Image src={slide1}/> */}

            <div className={styles.envolveMenu}>

              <nav className={styles.conteudoMenuTelaGrande}>

                <a className={styles.logo} href={`/`}>                  
                <Image max-width='250' max-height='150' src={logo}/>  
                </a>
                <div className={styles.links}>
                  <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/")}  style={{color: activeRoute == '/' ? defaultColors.primary : defaultColors.secundary}}>
                      PAGÍNA INICIAL
                  </a>
                  <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/loja")} style={{color: activeRoute == '/loja' ? defaultColors.primary : defaultColors.secundary}}>
                      A LOJA
                  </a>
                  <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/estoque")} style={{color: activeRoute == '/estoque' ? defaultColors.primary : defaultColors.secundary}} >
                      NOSSO ESTOQUE
                  </a>
                  <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/pedidos")} style={{color: activeRoute == '/pedidos' ? defaultColors.primary : defaultColors.secundary}}>
                      BANCO DE PEDIDOS
                  </a>
                  <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/contato")} style={{color: activeRoute == '/contato' ? defaultColors.primary : defaultColors.secundary}}>
                      CONTATO
                  </a>
                  <a>
                      <FaInstagram className={styles.iconeInstagram}/>
                    </a>
                    <a>
                      <FaFacebookSquare className={styles.iconeFacebook}/>
                    </a>
                </div>
              </nav>

              <div className={styles.conteudoMenuTelaPequena}>
                <a className={styles.logo} href={`/`}>
                <Image max-width='250' max-height='150' src={logo}/>  

                </a>
                <div/>
                <nav className={styles.MenuMobile}>
                  {/* <input type='checkbox' id='bt_menuMobile' style={{display:"none"}} className={styles.bt_menuMobile} /> */}
                  <label onClick={() => setMenuAberto(!menuAberto)} className={styles.botaoAbrirMenuMobile} style={{textAlign: "end", paddingRight: "15"}} for="bt_menuMobile">&#9776;</label>
                    <ul className={menuAberto ? styles.containerItensMenuMobileAberto : styles.containerItensMenuMobileFechado}>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/")}  style={{color: activeRoute == '/' ? defaultColors.primary : defaultColors.secundary}}>
                          PAGÍNA INICIAL
                        </a>
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/loja")} style={{color: activeRoute == '/loja' ? defaultColors.primary : defaultColors.secundary}}>
                            A LOJA
                        </a>
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/estoque")} style={{color: activeRoute == '/estoque' ? defaultColors.primary : defaultColors.secundary}} >
                          NOSSO ESTOQUE
                        </a>  
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/pedidos")} style={{color: activeRoute == '/pedidos' ? defaultColors.primary : defaultColors.secundary}}>
                          BANCO DE PEDIDOS
                        </a>  
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/contato")} style={{color: activeRoute == '/contato' ? defaultColors.primary : defaultColors.secundary}}>
                          CONTATO
                        </a>  
                      </li>

                      <li style={styles.redesSociais}><a><FaInstagram className={styles.iconeInstagram}/></a> <a><FaFacebookSquare className={styles.iconeFacebook}/></a></li>
                      
                    </ul>
                </nav>

                
              </div>

              <div className={styles.cardContatos}>
                <CardContato/>
              </div>
              
            </div>          
            
            

          </div>

          


          
          </>  
    )
  }