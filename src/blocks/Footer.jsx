import Logo from '../components/Logo'
import SocialNetworks from './SocialNetworks'
import footer from '../styles/footer.module.scss'
import Link from 'next/link'
import Stores from './Stores'
import GDA from './GDA'
import Copyright from '../components/Copyright'
import Captcha from '../components/Captcha'

function Footer() {
  let midLinks = {
    top: ['Últimas noticias', 'Politica', 'Economía', 'El mundo', 'Sociedad', 'Opinión', 'Deportes', 'Lifestyle', 'Espectáculos', 'Edición impresa', 'LN+', 'Club LA NACION'],
    mid: ['OHLALÁ!', '¡HOLA!', 'ROLLING STONE', 'LIVING', 'BRANDO', 'JARDIN', 'LUGARES'],
    bottom: {
      vino: 'Bon vivir',
      envios: ['HOP', 'Colecciones', 'Máster en periodismo', 'Fundación LA NACION', 'Avisos solidarios'],
    },
  }

  let bottomLinks = ['Mapa del sitio', 'Ayuda', 'Términos y condiciones', '¿Cómo anunciar?', 'Suscribirse al diario']

  let captchaLinks = ['Condiciones', 'Privacidad']

  return (
    <section className={`${footer.footer} container w-100 d-flex flex-col jc-between`}>
      <div className={`${footer.footer__top} d-flex jc-start ai-center br-bottom`}>
        <div className='col col-3 d-flex jc-start ai-center'>
          <SocialNetworks />
        </div>
        <div className='col d-flex jc-center ai-center'>
          <Logo classes={`${footer.footer__top__logo}`} />
        </div>
        <Stores classes='jc-end'/>
      </div>
      <div className={`${footer.footer__mid} pt-1 br-bottom d-flex flex-col jc-around`}>
        <div className={`row ${footer.footer__mid__topLinks}`}>
          {midLinks.top.map((link, index) => {
            return (
              <Link href='#' key={index}>
                <a className='fw-bold color-light-blue mr-3 w-auto'>{link}</a>
              </Link>
            )
          })}
        </div>
        <div className='row fs-14'>
          <p className='w-auto mr-3'>Revistas:</p>
          {midLinks.mid.map((link, index) => {
            return (
              <Link href='#' key={index}>
                <a className='fw-bold color-light-blue mr-3 w-auto'>{link}</a>
              </Link>
            )
          })}
        </div>
        <div className='row fs-14'>
          <div className='col d-flex'>
            <p className='w-auto mr-3'>Club del vino:</p>
            <Link href='#'>
              <a className='fw-bold color-light-blue mr-3 w-auto'>{midLinks.bottom.vino}</a>
            </Link>
            <p className='w-auto mr-3'>Envíos:</p>
              {midLinks.bottom.envios.map((link, index) => {
                return (
                  <Link href='#' key={index}>
                    <a className='fw-bold color-light-blue mr-3 w-auto'>{link}</a>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
      <div className={`${footer.footer__bottom} pt-1 d-flex flex-col jc-around`}>
        <div className='row'>
          <div className='col'>
            {bottomLinks.map((link, index) => {
              return (
                <Link href='#' key={index}>
                  <a className='color-light-blue mr-3 w-auto'>{link}</a>
                </Link>
              )
            })}
          </div>
          <div className='col d-flex jc-end'>
            <Captcha links={captchaLinks}/>
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex ai-center'>
            <Copyright/>
          </div>
          <GDA classes='jc-end'/>
        </div>
      </div>
    </section>
  )
}

export default Footer
