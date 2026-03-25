import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import GallerySection from "@/components/GallerySection";
import ExperiencesSection from "@/components/ExperiencesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import LocationSection from "@/components/LocationSection";
import ReservationInfoSection from "@/components/ReservationInfoSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AccommodationsSection />
      <GallerySection />
      <ExperiencesSection />
      <DifferentialsSection />
      <LocationSection />
      <ReservationInfoSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
