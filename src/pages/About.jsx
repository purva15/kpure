import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white text-[var(--color-primary)] px-6 md:px-16 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          At <strong>K Pure</strong>, we believe fragrance is more than a scent—it's an emotion. Born out of a love for nature, we blend pure botanicals into elegant experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1616627895091-87a89a1df7aa?auto=format&fit=crop&w=800"
          alt="About us"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Crafted With Care</h2>
          <p className="text-gray-600 leading-relaxed">
            Every fragrance we design is thoughtfully curated using ethically sourced ingredients and crafted to evoke calm, clarity, and warmth. From our labs to your living spaces, we strive for sustainability, sophistication, and sensory harmony.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Whether you're setting the tone for your home or gifting a moment of peace, K Pure is here to elevate the everyday.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
