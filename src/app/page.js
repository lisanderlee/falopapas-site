import Image from 'next/image'
import Navbar from './Component/Navbar'
import ImageGallery from './Component/ImageGallery'
import Header from './Component/Header'
import Footer from './Component/Footer'
export default function Home() {
  return (
  <div>
<Navbar />
<Header />
<ImageGallery />
<Footer />
  </div>
  )
}
