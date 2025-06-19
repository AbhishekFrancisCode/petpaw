"use client";
import React from "react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#028391] to-[#EE9422] text-white py-20">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Pawtful</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Revolutionizing pet nutrition with fresh, healthy, and personalized meals for your
              beloved dogs
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="sb-container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#028391] mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded in 2024, Pawtful was born from a simple belief: every dog deserves fresh,
                  nutritious, and delicious food that's tailored to their unique needs. Our journey
                  began when our founder's own dog struggled with health issues due to poor
                  nutrition from commercial pet foods.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  After extensive research and collaboration with veterinary nutritionists, we
                  developed a revolutionary approach to pet nutrition. We combine human-grade
                  ingredients with scientific precision to create meals that not only taste amazing
                  but also support your dog's health and vitality.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we're proud to serve thousands of happy dogs and their families across the
                  country, helping them live longer, healthier, and more vibrant lives.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#C4DEE1] to-[#EE9422] rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🐕</div>
                    <h3 className="text-2xl font-bold mb-2">Fresh & Healthy</h3>
                    <p className="text-lg opacity-90">Made with love and care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[#FFF8EF]">
        <div className="sb-container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#028391] mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to transforming the way dogs eat, one bowl at a time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-[#028391] mb-4">Fresh Ingredients</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use only the finest human-grade ingredients, sourced from trusted local
                  suppliers. No artificial preservatives, colors, or fillers - just pure, natural
                  nutrition.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-[#028391] mb-4">Science-Based</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every recipe is formulated by veterinary nutritionists to meet AAFCO standards and
                  provide complete, balanced nutrition for your dog's specific life stage and needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold text-[#028391] mb-4">Personalized Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand every dog is unique. Our personalized meal plans are tailored to
                  your dog's breed, age, weight, activity level, and health requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="sb-container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#028391] mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate pet lovers and nutrition experts dedicated to your dog's health
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#C4DEE1] to-[#EE9422] rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👨‍⚕️</span>
                </div>
                <h3 className="text-xl font-bold text-[#028391] mb-2">Dr. Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Chief Veterinary Nutritionist</p>
                <p className="text-sm text-gray-500">
                  Board-certified veterinary nutritionist with 15+ years of experience in pet
                  nutrition and diet formulation.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#C4DEE1] to-[#EE9422] rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-bold text-[#028391] mb-2">Chef Michael Chen</h3>
                <p className="text-gray-600 mb-2">Head of Culinary Operations</p>
                <p className="text-sm text-gray-500">
                  Former executive chef with a passion for creating delicious, nutritious meals that
                  dogs love.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#C4DEE1] to-[#EE9422] rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👩‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-[#028391] mb-2">Lisa Rodriguez</h3>
                <p className="text-gray-600 mb-2">Customer Success Manager</p>
                <p className="text-sm text-gray-500">
                  Dedicated to ensuring every customer and their furry friend have the best
                  experience possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#028391] text-white">
        <div className="sb-container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-lg opacity-90">Happy Dogs Fed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-lg opacity-90">Cities Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-lg opacity-90">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-lg opacity-90">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF8EF]">
        <div className="sb-container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#028391] mb-6">
              Ready to Transform Your Dog's Life?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of happy dogs and their families who have already discovered the
              Pawtful difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#EE9422] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#d6851e] transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-[#028391] text-[#028391] px-8 py-4 rounded-lg font-semibold hover:bg-[#028391] hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
