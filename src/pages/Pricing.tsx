import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/utils/structuredData";

const Pricing = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing Plans — Reatch.io Customer Engagement Platform"
        description="Choose the perfect plan for your business. From free tier to enterprise solutions, Reatch.io offers flexible pricing for email and WhatsApp marketing automation. Start free today!"
        keywords="pricing, email marketing pricing, WhatsApp marketing cost, marketing automation pricing, customer engagement pricing, SaaS pricing"
        canonical="/pricing"
        structuredData={breadcrumbs}
      />
      <Navbar />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Pricing;
