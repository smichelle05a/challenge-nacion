import header from '../styles/headerArticle.module.scss'
import Img from '../components/Img'
import Marquee from '../components/Marquee'
import Tag from '../components/Tag'
import Title from '../components/Title'

function HeaderArticle({article}) {
  return (
    <div className={`relative w-100 ${header.article}`}>
      <Img src={article.img} alt={article.title} classes={`d-block h-100 ${header.article__img}`} />
      <div className={`p-2 absolute w-100 h-100 d-flex flex-col jc-end ai-start ${header.article__title}`}>
        <Tag text={article.tag}/>
        <Title volanta={article.volanta} title={article.title} color={'white'} classes={'fs-24 fs-md-48'} />
        <Marquee text={article.author} classes={`color-white`} />
      </div>
    </div>
  )
}

export default HeaderArticle