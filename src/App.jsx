import Header from './components/1-Header/header'
import Hero from './components/2-Hero/hero'
import Contact from './components/4-Contact/contact'
import Footer from './components/5-Footer/footer'
import ScrollToTop from 'react-scroll-to-top'




function App() {


  return (
    <div className='container'>
      <Header/>

      <Hero/>
      <div className='divider' />
      <Contact/>
      <div className='divider' />
      <Footer/>
      <ScrollToTop style={{
        width: "2",
        height: "2", borderRadius: "50%", border: "1px solid #3fff", fontSize: "1px"
      }} className='smothy'></ScrollToTop>





    </div>
  )
}

export default App
