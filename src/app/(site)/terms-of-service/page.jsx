import React from 'react';
import BreadcrumbServiceDetails from "../../../components/service-detailed/BreadcrumbServiceDetails";

export const metadata = {
  title: "Terms of Service | Eurovest",
  description: "Read the Terms of Service for Eurovest.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbServiceDetails title="Terms of Service" />
      <section className="section-padding" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ background: '#fff', padding: '50px', borderRadius: '16px', boxShadow: '0 5px 25px rgba(0,0,0,0.03)' }}>
                <h2 style={{ marginBottom: '30px', color: 'var(--color-blue)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '700' }}>Terms of Service</h2>
                
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '25px', lineHeight: '1.8', fontSize: '16px' }}>
                  Welcome to Eurovest. By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>1. Acceptance of Terms</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to update or modify these terms at any time without prior notice.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>2. Provision of Services</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  Eurovest is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which Eurovest provides may change from time to time without prior notice to you.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>3. User Conduct</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  You agree to use the services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions. You agree not to access (or attempt to access) any of the services by any means other than through the interface that is provided by Eurovest.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>4. Privacy Policy</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal data and how we protect it.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>5. Limitation of Liability</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  Eurovest shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the services or for cost of procurement of substitute goods and services or resulting from any goods or services purchased or obtained or messages received or transactions entered into through the services.
                </p>
                
                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>6. Governing Law</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '0', lineHeight: '1.8', fontSize: '16px' }}>
                  These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the jurisdiction in which Eurovest operates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
