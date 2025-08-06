"use client";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#028391] to-[#EE9422] text-white py-20">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We're here to help with all your pet nutrition questions and concerns
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="sb-container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#028391] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#028391] focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#028391] focus:border-transparent"
                        placeholder="+91 94444 XXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#028391] focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Questions</option>
                        <option value="nutrition">Nutrition Advice</option>
                        <option value="delivery">Delivery & Shipping</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="support">Technical Support</option>
                        <option value="feedback">Feedback & Suggestions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#028391] focus:border-transparent"
                      placeholder="Tell us how we can help you and your furry friend..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#EE9422] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#d6851e] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#028391] mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C4DEE1] rounded-full p-3">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#028391] mb-2">Our Location</h3>
                      <p className="text-gray-700">
                        Whitefield, Bangalore
                        <br />
                        Karanataka 560037
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C4DEE1] rounded-full p-3">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#028391] mb-2">Email Us</h3>
                      <p className="text-gray-700">
                        <a
                          href="mailto:hello@pawtful.com"
                          className="text-[#EE9422] hover:underline"
                        >
                          info@pawtful.com
                        </a>
                        <br />
                        <a
                          href="mailto:support@pawtful.com"
                          className="text-[#EE9422] hover:underline"
                        >
                          support@pawtful.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C4DEE1] rounded-full p-3">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#028391] mb-2">Call Us</h3>
                      <p className="text-gray-700">
                        <a href="tel:+1-800-PAWTFUL" className="text-[#EE9422] hover:underline">
                          +91 7019596309
                        </a>
                        <br />
                        <span className="text-sm text-gray-500">
                          Monday - Friday: 9 AM - 6 PM PST
                        </span>
                        <br />
                        <span className="text-sm text-gray-500">Saturday: 10 AM - 4 PM PST</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#C4DEE1] rounded-full p-3">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#028391] mb-2">Live Chat</h3>
                      <p className="text-gray-700">
                        Available 24/7 for urgent inquiries
                        <br />
                        <button className="text-[#EE9422] hover:underline font-semibold">
                          Start Chat Now
                        </button>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 bg-[#FFF8EF] rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#028391] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FFF8EF]">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#028391] text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#028391] mb-2">
                  How quickly will I receive a response?
                </h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24 hours during business days. For
                  urgent matters, please call us directly or use our live chat feature.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#028391] mb-2">
                  Can I get nutrition advice for my specific dog?
                </h3>
                <p className="text-gray-700">
                  Absolutely! Our team includes certified veterinary nutritionists who can provide
                  personalized advice based on your dog's breed, age, health conditions, and dietary
                  needs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#028391] mb-2">
                  What if I have a complaint or feedback?
                </h3>
                <p className="text-gray-700">
                  We take all feedback seriously. Please contact us through any of our channels, and
                  we'll address your concerns promptly. Your satisfaction is our top priority.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#028391] mb-2">
                  Do you offer emergency support?
                </h3>
                <p className="text-gray-700">
                  For urgent health-related questions about your dog, we recommend contacting your
                  veterinarian immediately. For product-related emergencies, our support team is
                  available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="sb-container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#028391] text-center mb-12">
              Visit Our Headquarters
            </h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl">Interactive Map Coming Soon</p>
                <p className="text-sm mt-2">123 Pet Nutrition Way, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
