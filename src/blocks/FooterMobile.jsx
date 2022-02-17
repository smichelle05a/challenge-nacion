import Logo from '../components/Logo'
import SocialNetworks from './SocialNetworks'
import footer from '../styles/footerMobile.module.scss'
import Stores from './Stores'
import GDA from './GDA'
import Copyright from '../components/Copyright'

function FooterMobile() {
  
  return (
    <section className={`container w-100 d-flex flex-col jc-between ai-center`}>
      <div className={`row br-bottom ${footer.footer__top}`}>
        <Logo classes={`${footer.footer__top__logo}`} />
      </div>
      <div className={`row jc-around ${footer.footer__bottom}`}>
        <div className={`${footer.footer__bottom__info} d-flex flex-col jc-around`}>
          <div className='row d-flex jc-center ai-center'>
            <SocialNetworks/>
          </div>
          <div className='row'>
            <Stores classes='jc-center'/>
          </div>
          <div className='row'>
          <GDA classes='jc-center'/>
          </div>
        </div>
        <div className='d-flex jc-center ai-center'>
          <Copyright/>
        </div>
      </div>
    </section>
  )
}

export default FooterMobile
