import Img from './Img'

function Logo({classes}) {
  return (
    <Img src='/logo.svg' alt='Logo Diario La Nacion' classes={`${classes}`} />
  )
}

export default Logo