import SectionTitle from '../components/SectionTitle'
import Article from './Article'
import AuthorArticle from './AuthorArticle'


function Notes({articles, title, articleWidth, color}) {
  return (
    <section className='br-bottom'>
      <SectionTitle text={title} />
      <div className='row'>
        {articles.map((a, index) => {
            return (
              <div key={index} className={`col-12 px-md-2 d-flex flex-col ${articleWidth}`}>
                {a.authorImg ? <AuthorArticle article={a} /> : <Article article={a} color={color}/>}
              </div>
            )
        })}
      </div>
    </section>
  )
}

export default Notes