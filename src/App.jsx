import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Portfolio from './sections/portfolio/Portfolio';
import Achievements from './sections/achievements/Achievements';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useRef, useState, useEffect, useCallback } from 'react';

const App = () => {
  const mainRef = useRef();
  const { themeState } = useThemeContext();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = useCallback(() => {
    setShowFloatingNav(true);
  }, []);

  const hideFloatingNavHandler = useCallback(() => {
    setShowFloatingNav(false);
  }, []);

  const floatingNavToggleHandler = useCallback(() => {
    const currentYPosition = mainRef?.current?.getBoundingClientRect().y;
    if (siteYPosition < (currentYPosition - 20) || siteYPosition > (currentYPosition + 20)) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    setSiteYPosition(currentYPosition);
  }, [siteYPosition, showFloatingNavHandler, hideFloatingNavHandler]);

  useEffect(() => {
    const checkY = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(checkY);
  }, [floatingNavToggleHandler]);

  return (
    <main className={themeState.background} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
