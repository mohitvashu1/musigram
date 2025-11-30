import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
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
      <Instructors/>
      <Footer/>
    </main>
        
  );
}
