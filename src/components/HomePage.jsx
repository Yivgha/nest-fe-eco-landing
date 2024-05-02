import DataSection from './DataSection/DataSection';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection/HeroSection';  

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <HeroSection />
        <DataSection />
      </main>
      <Footer /> 
    </div>
  )
}
