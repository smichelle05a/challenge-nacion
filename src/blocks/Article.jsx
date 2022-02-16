import articleStyles from '../styles/articleStyles.module.scss'
import Img from '../components/Img';
import Marquee from '../components/Marquee';
import SubHeader from '../components/SubHeader';
import Title from '../components/Title';

function Article({article, inverted, fs, color}) {
  return (
    <article className={`row grow my-2 ${inverted ? 'flex-md-col-reverse' : 'flex-col'}`}>
      {article.img ? <Img src={article.img} alt={article.title} classes={`w-100 ${articleStyles.article__img}`} /> : ''}
      <div className={`py-1 px-2 grow ${color ? color : ''}`}>
        <Title volanta={article.volanta} title={article.title} classes={`fs-20 ${fs ? `${fs}` : ''}`} color={color ? 'white' : ''} />
        {article.subheader ? <SubHeader text={article.subheader} classes={color ? 'color-white' : ''} /> : ''}
        {article.marquee ? <Marquee text={article.author} classes={color ? 'color-white' : ''} /> : ''}
      </div>
    </article>
  )
}

export default Article