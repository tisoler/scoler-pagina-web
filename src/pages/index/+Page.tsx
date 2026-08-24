import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import PlatformPreview from '../../components/PlatformPreview';
import Calculator from '../../components/Calculator';
import HowItWorks from '../../components/HowItWorks';
import ContactForm from '../../components/ContactForm';
import Team from '../../components/Team';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PlatformPreview />
        <Calculator />
        <HowItWorks />
        <ContactForm />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
