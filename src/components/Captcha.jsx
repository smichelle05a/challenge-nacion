import Link from 'next/link'

function Captcha({ links }) {
  return (
    <>
      <p className='w-auto mr-3'>Protegido por reCAPTCHA:</p>
      {links.map((link, index) => {
        return (
          <Link href='#' key={index}>
            <a className='color-light-blue mr-3 w-auto'>{link}</a>
          </Link>
        )
      })}
    </>
  )
}

export default Captcha
