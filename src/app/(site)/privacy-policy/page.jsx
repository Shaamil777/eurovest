import React from 'react';
import BreadcrumbServiceDetails from "../../../components/service-detailed/BreadcrumbServiceDetails";

export const metadata = {
  title: "Privacy Policy | Eurovest",
  description: "Read the Privacy Policy for Eurovest.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbServiceDetails title="Privacy Policy" />
      <section className="section-padding" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="policy-content" style={{ background: '#fff', padding: '50px', borderRadius: '16px', boxShadow: '0 5px 25px rgba(0,0,0,0.03)' }}>
                <h2 style={{ marginBottom: '30px', color: 'var(--color-blue)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '700' }}>Privacy Policy</h2>
                
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '25px', lineHeight: '1.8', fontSize: '16px' }}>
                  At Eurovest, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>1. Information We Collect</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, place an order, subscribe to the newsletter, and in connection with other activities, services, features, or resources we make available on our site. You may be asked for, as appropriate, name, email address, mailing address, phone number.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>2. How We Use Collected Information</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  Eurovest may collect and use users' personal information for the following purposes:
                  <ul style={{ marginTop: '10px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                    <li>To personalize user experience: We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.</li>
                    <li>To process payments: We may use the information users provide about themselves when placing an order only to provide service to that order.</li>
                    <li>To send periodic emails: We may use the email address to send User information and updates pertaining to their order or inquiries.</li>
                  </ul>
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>3. How We Protect Your Information</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site. Sensitive and private data exchange between the site and its users happens over a SSL secured communication channel.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>4. Sharing Your Personal Information</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '20px', lineHeight: '1.8', fontSize: '16px' }}>
                  We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
                </p>

                <h4 style={{ marginTop: '35px', marginBottom: '15px', color: 'var(--color-blue)', fontSize: '22px', fontWeight: '600' }}>5. Changes to This Privacy Policy</h4>
                <p style={{ color: 'var(--color-grey-text)', marginBottom: '0', lineHeight: '1.8', fontSize: '16px' }}>
                  Eurovest has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our site. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
