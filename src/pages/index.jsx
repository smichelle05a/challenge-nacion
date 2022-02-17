import articles from '../data/articles.json'
import Editorials from '../components/Editorials'
import Footer from '../blocks/Footer'
import FooterArticle from '../blocks/FooterArticle'
import Header from '../blocks/Header'
import HeaderArticle from '../blocks/HeaderArticle'
import LeftFocal from '../blocks/LeftFocal'
import MostRead from '../blocks/MostRead'
import Notes from '../blocks/Notes'
import Opinion from '../blocks/Opinion'
import RightFocal from '../blocks/RightFocal'

export default function Home() {
  return (
    <div className='d-flex flex-col ai-center'>
      <Header />
      <HeaderArticle article={articles.header}/>
      <main className='p-md-3 row container'>
        <div className='col-12 main-content px-md-1 px-lg-2'>
        <div className='bg-pink-10 color-pink fw-bold my-4 ads'>
          <p>Espacio para Publicidad</p>
        </div>
          <LeftFocal articles={articles.focalIzquierdo} />
          <Notes articles ={articles.notasx2} articleWidth={'col-md-6'} title='Notas x 2' />
          <RightFocal articles={articles.focalDerecho} title='Focal Derecho' />
          <Notes articles={articles.notasVarias} articleWidth={'col-md-4'} title='Notas x 3, 6, 9, 12' />
          <Opinion articles={articles.opinion} last={articles.opinion.length-1} title='Opinión' />
          <Editorials />
          <Notes articles={articles.notasColor} articleWidth={'col-md-4'} color={'bg-light-blue bg-md-red bg-lg-pink'} title='Notas x 3 Color' />
        </div>
        <aside className='col my-4 px-lg-2 ads'>
          <p className='bg-pink-10 color-pink fw-bold w-100'>Espacio para Publicidad</p>
        </aside>
      </main>
      <div className='p-md-3 row container'>
        <div className='col-12 px-md-1 px-lg-2'>
          <MostRead articles={articles.masLeidas} title='Las más leídas' />
          <FooterArticle article={articles.footer} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
