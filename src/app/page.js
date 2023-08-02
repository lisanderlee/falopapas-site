import Image from 'next/image'
import Navbar from './Component/Navbar'
import ImageGallery from './Component/ImageGallery'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ContactUs from './Component/Contact'
export default function Home() {
  return (
  <div>
<Navbar />
<Header />
<ImageGallery />
<ContactUs />
<Footer />
  </div>
  )
}
