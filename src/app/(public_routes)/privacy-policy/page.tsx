"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#028391] to-[#EE9422] text-white py-20">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              How we protect and handle your personal information
            </p>
            <p className="text-lg opacity-75 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-white">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Pawtful ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or purchase our products and services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Information We Collect</h2>

                <h3 className="text-2xl font-semibold text-[#028391] mb-4">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Pet information (breed, age, weight, health conditions)</li>
                  <li>Account credentials and preferences</li>
                  <li>Communication history with our customer service team</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#028391] mb-4">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website or use our app, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, links clicked)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data (with your consent)</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#028391] mb-4">Information from Third Parties</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may receive information about you from third-party sources, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Social media platforms (when you connect your account)</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Analytics and advertising partners</li>
                  <li>Veterinary clinics (with your explicit consent)</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Providing Services:</strong> To process orders, deliver products, and provide customer support</li>
                  <li><strong>Personalization:</strong> To create personalized meal plans and recommendations for your pet</li>
                  <li><strong>Communication:</strong> To send order confirmations, shipping updates, and respond to inquiries</li>
                  <li><strong>Marketing:</strong> To send promotional offers, newsletters, and product updates (with your consent)</li>
                  <li><strong>Improvement:</strong> To analyze usage patterns and improve our products and services</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                  <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (payment processors, shipping partners, IT services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Safety and Security:</strong> To protect our rights, property, or safety, or that of our users or the public</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Your Rights and Choices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve website functionality and performance</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately, and we will take steps to remove such information.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices on our website</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-[#FFF8EF] rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> privacy@pawtful.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> 1-800-PAWTFUL
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong><br />
                    Pawtful<br />
                    123 Pet Nutrition Way<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                  <p className="text-gray-700">
                    <strong>Data Protection Officer:</strong> dpo@pawtful.com
                  </p>
                </div>
              </div>

              <div className="bg-[#C4DEE1] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#028391] mb-4">Your Privacy Matters</h3>
                <p className="text-gray-700">
                  We are committed to transparency and protecting your privacy. If you have any concerns about how we handle your information, please don't hesitate to reach out to us. Your trust is essential to our mission of providing the best nutrition for your beloved pets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}