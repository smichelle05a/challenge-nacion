import SectionTitle from '../components/SectionTitle'
import Article from './Article'
import AuthorArticle from './AuthorArticle'


function Opinion({articles, last, title}) {
  return (
    <section className='br-bottom'>
      <SectionTitle text={title} />
      <div className='row'>
        <div className='col-12 col-md-5 px-md-2 d-flex'>
          {articles[0].authorImg ? <AuthorArticle article={articles[0]} fs={'fs-md-24'} /> : <Article article={articles[0]} fs={'fs-md-24'} />}
        </div>
        <div className='col-12 col-md-3 px-md-2 d-flex flex-col'>
          {articles.map((a, index)=> {
            if(index != 0 && index != last) {
             return a.authorImg ? <AuthorArticle article={a} fs={'fs-md-16'} key={index} /> : <Article article={a} fs={'fs-md-16'} key={index} />
            }
          })}
        </div>
        <div className='col-12 col-md-4 px-md-2 d-flex'>
          {articles[last].authorImg ? <AuthorArticle article={articles[last]} fs={'fs-md-24'} /> : <Article article={articles[last]} fs={'fs-md-24'} />}
        </div>
      </div>
    </section>
  )
}

export default Opinion