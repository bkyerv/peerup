import Hero from "../components/Hero";
import KeyAdvantages from "../components/KeyAdvantages";
import Experience from "../components/Experience";
import Trust from "../components/Trust";
import Footer from "../components/Footer";
import BoldMessage from "../components/BoldMessage";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Experience />
      <Trust />
      <BoldMessage />
      <KeyAdvantages />
      <Footer />
    </div>
  );
}
