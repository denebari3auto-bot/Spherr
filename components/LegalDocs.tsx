import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalDocsProps {
  docType: 'privacy' | 'terms' | 'cookie' | 'security' | 'compliance';
  onBack: () => void;
}

export const LegalDocs: React.FC<LegalDocsProps> = ({ docType, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTitle = () => {
    switch (docType) {
      case 'privacy': return 'Privacy Policy';
      case 'terms': return 'Terms of Service';
      case 'cookie': return 'Cookie Policy';
      case 'security': return 'Security Policy';
      case 'compliance': return 'Compliance';
      default: return 'Legal Document';
    }
  };

  const renderContent = () => {
    switch (docType) {
      case 'privacy':
        return (
          <>
            <p>Last updated: October 25, 2023</p>
            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. Introduction</h3>
              <p>
                Spherr AI Inc. ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website spherr.ai (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. Information We Collect</h3>
              <p>We collect several types of information from and about users of our Website, including information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
                <li>That is about you but individually does not identify you; and/or</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-bold text-white mb-4">3. Data Security</h3>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
            </section>
          </>
        );
      case 'terms':
        return (
          <>
            <p>Last updated: October 25, 2023</p>
            <section>
              <h3 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-white mb-4">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Spherr AI Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-bold text-white mb-4">3. Disclaimer</h3>
              <p>
                The materials on Spherr AI Inc.'s website are provided on an 'as is' basis. Spherr AI Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
             <section>
              <h3 className="text-xl font-bold text-white mb-4">4. Governing Law</h3>
              <p>
                Any claim relating to Spherr AI Inc.'s website shall be governed by the laws of the State of Delaware without regard to its conflict of law provisions.
              </p>
            </section>
          </>
        );
      case 'cookie':
        return (
          <>
            <p>Last updated: October 25, 2023</p>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">1. What Are Cookies</h3>
                <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h3>
                <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">3. Disabling Cookies</h3>
                <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.</p>
            </section>
          </>
        );
      case 'security':
        return (
          <>
            <p>Last updated: October 25, 2023</p>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">1. Our Commitment</h3>
                <p>Security is the cornerstone of the Spherr Platform. We are committed to maintaining the highest standards of data security to protect your business-critical information.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">2. SOC 2 Compliance</h3>
                <p>Spherr is SOC 2 Type II compliant. This means an independent auditor has reviewed our security controls and verified that they meet the rigorous standards of the AICPA. Our report is available to enterprise customers upon request.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">3. Data Encryption</h3>
                <p>We encrypt data at rest using AES-256 and data in transit using TLS 1.3. This ensures that your data remains confidential and secure, whether it is being stored or transmitted across our network.</p>
            </section>
          </>
        );
      case 'compliance':
        return (
          <>
            <p>Last updated: October 25, 2023</p>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">1. GDPR</h3>
                <p>We are fully compliant with the General Data Protection Regulation (GDPR). We process personal data only on lawful grounds and respect the rights of data subjects, including the right to access, rectification, and erasure.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">2. CCPA</h3>
                <p>For California residents, we adhere to the California Consumer Privacy Act (CCPA). You have the right to know what personal information is being collected, sold, or shared, and to whom.</p>
            </section>
            <section>
                <h3 className="text-xl font-bold text-white mb-4">3. HIPAA</h3>
                <p>For healthcare clients, Spherr offers HIPAA-compliant deployment options to ensure the protection of Protected Health Information (PHI). A Business Associate Agreement (BAA) is available for enterprise plans.</p>
            </section>
          </>
        );
      default:
        return <p>Content not available.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">{getTitle()}</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};