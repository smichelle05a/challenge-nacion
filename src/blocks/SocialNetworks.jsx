import Img from '../components/Img'
import social from '../styles/social.module.scss'

function SocialNetworks() {
  let networks = [
    'facebook',
    'twitter',
    'instagram',
    'rss'
  ]
  return (
    <>
      {networks.map((n, index) => {
        return <div className={`${social.social} col d-flex jc-center ai-center`} key={index}>
          <Img src={`/svg/${n}.svg`} alt={n} classes={`${social.socialItem}`}/>
          </div>
      })}
    </>
  )
}

export default SocialNetworks