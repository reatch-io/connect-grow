import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ChannelsSection from "@/components/ChannelsSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationSchema, websiteSchema, softwareApplicationSchema } from "@/utils/structuredData";

const Index = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, softwareApplicationSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Reatch.io — Customer Engagement Platform | Email & WhatsApp Marketing"
        description="Connect, communicate, and convert with Reatch.io. Intelligent email and WhatsApp campaigns, advanced segmentation, real-time analytics, and powerful automation for growth-minded teams."
        keywords="customer engagement, email marketing, WhatsApp marketing, marketing automation, campaign management, multi-channel marketing, customer communication platform, email campaigns, WhatsApp business API, marketing analytics, CRM integration, customer segmentation"
        canonical="/"
        structuredData={combinedSchema}
      />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ChannelsSection />
      <AnalyticsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
