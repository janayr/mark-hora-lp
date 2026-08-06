import CTA from "@/components/cta";
import Demo from "@/components/demo";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import ProblemSection from "@/components/problem.section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Demo />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
