import articleStyles from '../styles/articleStyles.module.scss'
import Img from '../components/Img';
import Title from '../components/Title';

function Article({article, fs, listItem}) {
  return (
    <article className={`row grow my-2 ac-start`}>
        <span className='bg-black color-white py-2 px-1 absolute w-auto'> { listItem } </span>
        <Img src={article.img} alt={article.title} classes={`w-100 ${articleStyles.article__img}`} />
      <div className={`py-1 px-2 grow`}>
        <Title volanta={article.volanta} title={article.title} classes={`fs-20 ${fs ? `${fs}` : ''}`} />
      </div>
    </article>
  )
}

export default Article