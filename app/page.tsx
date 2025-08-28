import AllIndustries from "@/components/home/AllIndustries";
import Business from "@/components/home/Business";
import Faq from "@/components/home/Faq";
import Jumbotron from "@/components/home/Jumbotron";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Business />
      <AllIndustries />
      <Testimonials />
      <Faq />
    </>
  );
}
