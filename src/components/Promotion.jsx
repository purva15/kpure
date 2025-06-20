import React, { useState } from 'react';

const PromoBanner = () => {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="bg-white px-4 md:px-8 py-6">
            <div className="md:grid md:grid-cols-2 max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 gap-5">
                {/* Left Image */}
                <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/promotional/image.png"
                    alt="K Pure Promotion"
                    className="hidden md:block w-full object-cover max-h-96"
                />

                {/* Right Content */}
                <div className="relative flex items-center justify-center bg-white">
                    {/* Close Button */}
                    <button
                        onClick={() => setVisible(false)}
                        className="absolute top-6 right-6 bg-gray-200 hover:bg-gray-300 transition rounded-full p-2.5"
                        aria-label="Close"
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2 2 13M2 2l11 11" stroke="#1F2937" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Text Block */}
                    <div className="max-md:py-20 px-6 md:px-10 text-center">
                        <h1 className="text-3xl font-bold text-[#1a202c]">
                            <span className="text-[#94c977]">Don’t miss out</span> on our discounted products.
                        </h1>
                        <p className="mt-4 text-gray-500">
                            Explore limited-time offers on K Pure's organic room fragrances before they're gone!
                        </p>
                        <button className="rounded-lg bg-[#6ba750] hover:bg-[#5b9445] text-sm px-14 py-3 mt-4 text-white transition">
                            Check out the products
                        </button>
                        <button
                            onClick={() => setVisible(false)}
                            className="block mx-auto px-8 py-3 mt-4 text-sm text-gray-800 hover:underline"
                        >
                            No thanks, I don’t want the discounts.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
