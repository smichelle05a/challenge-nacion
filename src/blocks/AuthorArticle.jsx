import articleStyles from '../styles/articleStyles.module.scss'
import Img from '../components/Img';
import Title from '../components/Title';

function AuthorArticle({article, fs}) {
  return (
    <article className={`row grow border flex-col jc-evenly ai-center p-3 my-2 ${articleStyles.article}`}>
        <Title volanta={article.volanta} title={article.title} classes={`fs-20 txt-center ${fs ? `${fs}` : ''}`} />
        <Img src={`/img/${article.authorImg}.jpg`} alt={article.author} classes={`rounded-circle ${articleStyles.article__authorImg}`} />
        <p className='txt-center fw-bold'> {article.author} </p>
    </article>
  )
}

export default AuthorArticle