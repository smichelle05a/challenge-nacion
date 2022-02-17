import Img from './Img'

function Logo({classes}) {
  return (
    <Img src='/svg/logo.svg' alt='Logo Diario La Nacion' classes={`${classes}`} />
  )
}

export default Logo