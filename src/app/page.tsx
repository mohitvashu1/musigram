import FeaturedProduct from "@/components/FeaturedProduct";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialsCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "motion/react-client";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedProduct/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinar/>
    </main>
        
  );
}
