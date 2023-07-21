import Bottomnav from '@/components/Bottomnav'
import Header from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <div className='w-full h-screen relative'>
    <Header/>
       <Component {...pageProps}/>
       <Bottomnav/>
    </div>
  )
}
