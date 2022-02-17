import Img from '../components/Img'
import gda from '../styles/gda.module.scss'

function GDA({ classes }) {
  return (
    <div className={`col d-flex ai-center ${classes}`}>
      <Img src='https://arc-static.glanacion.com/pf/resources/images/gda.svg?d=706' alt='gda' classes={gda.gda} />
      <p className={`${gda.text} mx-3 txt-center`}>Miembro de GDA. Grupo de Diarios América</p>
      <Img src='https://arc-static.glanacion.com/pf/resources/images/data-fiscal.svg?d=706' alt='Data Fiscal' classes={gda.fiscal} />
    </div>
  )
}

export default GDA
