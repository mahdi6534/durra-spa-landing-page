import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyBar from "@/components/StickyBar";
import BookingPopup from "@/components/BookingPopup";
import Footer from "@/components/Footer";
import LocationSection from "@/components/sections/LocationSection";
import IntroSection from "@/components/sections/IntroSection";
import HammamSection from "@/components/sections/HammamSection";
import NailsSection from "@/components/sections/NailsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import MassageSection from "@/components/sections/MassageSection";
import HairSection from "@/components/sections/HairSection";
import ContactSection from "@/components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-body text-cocoa-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <HammamSection />
        <NailsSection />
        <PackagesSection />
        <MassageSection />
        <HairSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
      <StickyBar />
      <BookingPopup />
    </div>
  );
}
