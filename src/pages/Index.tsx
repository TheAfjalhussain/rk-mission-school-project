import { Layout } from "@/components/layout";
import {
  HeroSection,
  QuickFactsBar,
  WhyChooseUsSection,
  VisionPreview,
  AcademicsSnapshot,
  FacilitiesPreview,
  ActivitiesPreview,
  TeachersPreview,
  TestimonialsSection,
  GalleryPreview,
  NoticesPreview,
  FAQPreview,
  CTASection,
  About,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickFactsBar />
      <About />
      <WhyChooseUsSection />
      {/* <VisionPreview /> */}
      <AcademicsSnapshot />
      <FacilitiesPreview />
      <ActivitiesPreview />
      <TeachersPreview />
      <GalleryPreview />
      {/* <NoticesPreview /> */}
      <TestimonialsSection />
      <FAQPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
