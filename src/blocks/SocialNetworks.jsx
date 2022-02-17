import Img from '../components/Img'

function SocialNetworks({classes}) {
  let networks = [
    'facebook',
    'twitter',
    'instagram',
    'rss'
  ]
  return (
    <div className='d-flex col'>
      {networks.map((n, index) => <Img src={`/svg/${n}.svg`} alt={n} classes={`mr-5 ${classes}`} key={index}/>)}
    </div>
  )
}

export default SocialNetworks