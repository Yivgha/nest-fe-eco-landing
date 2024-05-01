import DataSection from './components/DataSection/DataSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <HeroSection />
        <DataSection />
      </main>
      <Footer  />
    </div>
  );
}

export default App;
