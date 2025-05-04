import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import StickyCom from "@/components/WhyChooseUs";
import { MovingCarts } from "@/components/MovingCarts";
import CartHover from "@/components/CartHover";
import { OurTeamWavy } from "@/components/OurTeamWavy";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses />
      <StickyCom />
      <MovingCarts />
      <CartHover />
      <OurTeamWavy />
      <Footer />
    </main>
    
  );
}
