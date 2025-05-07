
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import ScientificApproach from '@/components/ScientificApproach';
import ForWhom from '@/components/ForWhom';
import AboutMethod from '@/components/AboutMethod';
import DeviceInfo from '@/components/DeviceInfo';
import AuthorInfo from '@/components/AuthorInfo';
import Results from '@/components/Results';
import Recommendations from '@/components/Recommendations';
import Testimonials from '@/components/Testimonials';
import ChooseResult from '@/components/ChooseResult';
import BusinessOpportunities from '@/components/BusinessOpportunities';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <ScientificApproach />
        <ForWhom />
        <AboutMethod />
        <DeviceInfo />
        <AuthorInfo />
        <Results />
        <Recommendations />
        <Testimonials />
        <ChooseResult />
        <BusinessOpportunities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
