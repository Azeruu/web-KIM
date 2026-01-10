import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import ProductsSection from "@/components/products";
import FeaturesSection from "@/components/features";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
