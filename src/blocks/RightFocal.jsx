import Article from './Article'
import SectionTitle from '../components/SectionTitle'
import useBreakpoint from '../hooks/useBreakpoint'
import useScreenSize from '../hooks/useScreenSize'

function RightFocal({ articles, title }) {
  let screen = useScreenSize()
  let breakpoint = useBreakpoint(screen)

  return (
    <section className='br-bottom'>
      <SectionTitle text={title} />
      <div className='row'>
        {articles.map((a, index) => {
          return (
            <div className={`col-12 col-md-6 px-md-2 d-flex flex-column my-3 ${index == 0 && breakpoint != 'S' ? 'br-right' : ''}`} key={index}>
              <Article article={a} fs={index == 0 ? 'fs-md-32' : 'fs-md-24'} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default RightFocal
