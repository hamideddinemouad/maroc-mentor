import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import FounderStory from "@/component/FounderStory";
import OfferSections from "@/component/OfferSections";
import SectionNav from "@/component/SectionNav";

export default function Home() {
  return (
    <>
      <SectionNav />
      <Hero />
      <FounderStory />
      <OfferSections />
      <Footer />
    </>
  );
}
