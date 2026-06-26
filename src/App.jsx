import { SideNav } from './components/layout/SideNav';
import { MobileNav } from './components/layout/MobileNav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <SideNav />
      <MobileNav />
      {/* pl-0 md:pl-14 ensures mobile doesn't have sidebar padding, while desktop clears the fixed 56px sidebar */}
      <main className="pl-0 md:pl-14">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
