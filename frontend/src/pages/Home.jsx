import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import Achievements from '../components/home/Achievements';
import Services from '../components/home/Services';
import Reviews from '../components/home/Reviews';
import Network from '../components/home/Network';
import Awards from '../components/home/Awards';
import GlobalNetworkMap from '../components/home/GlobalNetworkMap';
import Footer from '../components/common/sections/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Achievements />
      <Reviews />
      <Network />
      <Awards />
      <GlobalNetworkMap />
      <Footer />
    </>
  );
}

export default Home;
