import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-subtle">
        <div className="container-premium text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Terms of <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>:
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-8 text-foreground">
              Guiding Principles
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Building Trust Through Transparency and Respect in Every Interaction
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: March 11, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-12 mb-12">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Extra Sauce Agency, a premier B2B marketing agency dedicated to serving the SAAS space from our base 
                in Brampton, Canada. As a 100% remote company, we specialize in assisting teams with creating impactful content for 
                generating inbound leads. Our Terms and Conditions govern your use of our website and services, and by accessing the 
                site or using our services, you agree to be bound by these terms. If you disagree with any part of the terms, then you do 
                not have permission to access the service.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">1. Use of Service</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Extra Sauce Agency provides a range of services designed to enhance your marketing efforts, including but not limited 
                  to content creation, strategy consultation, and digital marketing services. These services are subject to the following 
                  conditions:
                </p>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Service Access:</strong> You must be at least 18 years of age to use our services. By agreeing to these Terms, you represent 
                    and warrant that you are at least 18 years old.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Account Responsibility:</strong> If you create an account on our website, you are responsible for maintaining the security of 
                    your account and you are fully responsible for all activities that occur under the account. You must immediately notify 
                    us of any unauthorized uses of your account or any other breaches of security.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Accuracy of Information:</strong> The information presented on our website is for general informational purposes only. We 
                    endeavor to keep the information up to date and correct, but we make no representations or warranties of any kind, 
                    express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website 
                    or the information, products, services, or related graphics contained on the website for any purpose.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">2. Intellectual Property Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Extra Sauce 
                  Agency and its licensors. Our trademarks and trade dress may not be used in connection with any product or service 
                  without the prior written consent of Extra Sauce Agency.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">3. Links To Other Web Sites</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by Extra Sauce 
                  Agency. Extra Sauce Agency has no control over, and assumes no responsibility for, the content, privacy policies, or 
                  practices of any third-party web sites or services. You further acknowledge and agree that Extra Sauce Agency shall not 
                  be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in 
                  connection with the use of or reliance on any such content, goods, or services available on or through any such web 
                  sites or services.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">4. Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the 
                  Terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">5. Limitation of Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In no event will Extra Sauce Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
                  any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, 
                  use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the 
                  Service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">6. Changes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 
                  30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole 
                  discretion.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">7. Contact Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us at manny@extrasauceagency.com. 
                  By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these 
                  Terms and Conditions. We appreciate your trust in us as we work together towards achieving your marketing goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;