import SectionTitle from '../components/SectionTitle'
import ListArticle from './ListArticle'

function MostRead({articles, title}) {
  return (
    <section className='br-bottom'>
      <SectionTitle text={title} />
      <div className='row'>
        {articles.map((a, index) => {
            return (
              <div key={index} className={`col-12 px-md-2 d-flex flex-col col-md-3`}>
                  <ListArticle article={a} fs='fs-md-18' listItem={index + 1} />
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default MostRead