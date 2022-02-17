import Img from '../components/Img'
import Link from 'next/link'

function Stores({classes}) {
  return (
    <div className={`col d-flex ai-center ${classes}`}>
          <Link href='#'>
            <a className='mx-3'>
              <Img src={'https://arc-static.glanacion.com/pf/resources/images/android-store.svg?d=706'} alt='Download in Google Store' />
            </a>
          </Link>
          <Link href='#'>
            <a className='mx-3'>
              <Img src={'https://arc-static.glanacion.com/pf/resources/images/ios-store.svg?d=706'} alt='Download in Google Store' />
            </a>
          </Link>
        </div>
  )
}

export default Stores