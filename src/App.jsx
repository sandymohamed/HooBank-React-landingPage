import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import GetStarted from './components/GetStarted';

library.add(fas)


const App = () => {

  useEffect(() => {
    AOS.init();
}, [])

return(
  <div className="bg-dark text-muted w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} overflow-hidden`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-dark text-muted ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-dark text-muted ${styles.paddingX} ${styles.flexCenter} overflow-hidden`}>
      <div className={`${styles.boxWidth} overflow-hidden`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <GetStarted />
        <Footer />
      </div>
    </div>
  </div>
)};

export default App;