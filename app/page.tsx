import AboutSection from "@/components/home/AboutSection";
import FooterSection from "@/components/home/FooterSection";
import NavigationBar from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FoodPopular from "@/components/home/PopularSection";

const Page = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <FoodPopular />
      <AboutSection />
      {/* <Footer /> */}
      <FooterSection />
    </>
  );
};

export default Page;
