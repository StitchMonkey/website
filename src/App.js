import Header from './Header';
import Hero from './Hero';
import Manifesto from './Manifesto';
import Ecosystem from './Ecosystem';
import DegenDAO from './DegenDAO';
import Lore from './Lore';
import DegenLab from './DegenLab';
import Art from './Art';
import Roadmap from './Roadmap';
import Team from './Team';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  return(
    <>
      <a name='top' className='clean' href='/#'> </a>
      <Header />
      <main>
        <Hero />
        <a name='manifesto' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <Manifesto />
        <a name='ecosystem' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <Ecosystem />
        <a name='degendao' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <DegenDAO />
        <a name='lore' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <Lore />
        <a name='degenlab' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <DegenLab />
        <a name='art' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <Art />
        <a name='roadmap' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <Roadmap />
        <a name='team' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <Team />
        <a name='faq' className='clean' href='/#'> </a>
			  <div className='divider'></div>
        <FAQ />
			  <div className='divider'></div>
        <Footer />
      </main>
    </>
  );
}

export default App;
