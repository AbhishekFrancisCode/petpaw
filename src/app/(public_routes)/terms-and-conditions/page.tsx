"use client";
import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#028391] to-[#EE9422] text-white py-20">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              The terms governing your use of our services and products
            </p>
            <p className="text-lg opacity-75 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Pawtful ("we," "our," or "us") regarding your use of our website, mobile application, products, and services (collectively, the "Services").
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pawtful provides personalized pet nutrition services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Customized meal plans for dogs based on breed, age, weight, and health conditions</li>
                  <li>Fresh, human-grade dog food delivery services</li>
                  <li>Nutritional consultation and advice</li>
                  <li>Online platform for managing pet profiles and subscriptions</li>
                  <li>Customer support and educational resources</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our Services are designed to provide high-quality nutrition for your pets, but they are not intended to replace professional veterinary care.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">User Accounts and Registration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features of our Services, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information to keep it accurate and current</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old to create an account and use our Services. If you are under 18, you may only use our Services with the involvement and consent of a parent or guardian.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Product Information and Orders</h2>

                <h3 className="text-2xl font-semibold text-[#028391] mb-4">Product Descriptions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strive to provide accurate and up-to-date information about our products. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
                </p>

                <h3 className="text-2xl font-semibold text-[#028391] mb-4">Order Acceptance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Product unavailability</li>
                  <li>Pricing errors</li>
                  <li>Suspicious or fraudulent activity</li>
                  <li>Delivery area restrictions</li>
                  <li>Violation of these Terms</li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#028391] mb-4">Pricing and Payment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All prices are subject to change without notice. Payment is due at the time of order placement. We accept various payment methods as indicated on our website. You authorize us to charge your payment method for all amounts due.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Delivery and Shipping</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We offer delivery services to specified areas. Delivery terms include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Delivery schedules and timeframes are estimates only</li>
                  <li>We are not responsible for delays due to circumstances beyond our control</li>
                  <li>Someone must be available to receive the delivery</li>
                  <li>Products must be refrigerated upon delivery</li>
                  <li>Delivery fees may apply based on location and order size</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Risk of loss and title for products pass to you upon delivery to the carrier.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Returns and Refunds</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Due to the perishable nature of our products, we have specific return policies:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Damaged or defective products may be returned within 24 hours of delivery</li>
                  <li>We do not accept returns for products that have been opened or consumed</li>
                  <li>Refunds will be processed within 5-7 business days</li>
                  <li>Shipping costs for returns are the responsibility of the customer</li>
                  <li>Subscription cancellations may be subject to notice periods</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Health and Safety Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> Our products and services are not intended to diagnose, treat, cure, or prevent any disease or health condition. You acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Our nutritional advice is for informational purposes only</li>
                  <li>You should consult with a veterinarian before making significant dietary changes</li>
                  <li>We are not responsible for any adverse reactions or health issues</li>
                  <li>Individual results may vary</li>
                  <li>You should monitor your pet's health and discontinue use if problems occur</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  If your pet experiences any adverse reactions, discontinue use immediately and consult a veterinarian.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on our website and mobile application, including but not limited to text, graphics, logos, images, and software, is the property of Pawtful or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works of our content without our express written consent.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use our Services to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our Services</li>
                  <li>Use our Services for commercial purposes without authorization</li>
                  <li>Resell or redistribute our products without permission</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Pawtful shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Loss of profits, data, or use</li>
                  <li>Business interruption</li>
                  <li>Personal injury or property damage</li>
                  <li>Emotional distress</li>
                  <li>Any damages related to pet health issues</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability to you for any claims arising from these Terms or your use of our Services shall not exceed the amount you paid to us in the 12 months preceding the claim.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Pawtful and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from your use of our Services or violation of these Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration in San Francisco, California, in accordance with the rules of the American Arbitration Association.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms constitute the entire agreement between you and Pawtful regarding your use of our Services and supersede all prior agreements and understandings, whether written or oral.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-[#FFF8EF] rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> legal@pawtful.com
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
                </div>
              </div>

              <div className="bg-[#C4DEE1] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#028391] mb-4">Thank You for Choosing Pawtful</h3>
                <p className="text-gray-700">
                  We appreciate your trust in us to provide the best nutrition for your beloved pets. These terms help ensure a safe, reliable, and enjoyable experience for all our customers. If you have any questions or concerns, please don't hesitate to reach out to our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}