import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white text-[var(--color-primary-dull)] pt-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12 md:gap-6">
                {/* Brand Section */}
                <div className="max-w-sm">
                    <img
                        src="/logo.jpeg"
                        alt="K Pure Logo"
                        className="mb-4 h-10 md:h-12"
                    />
                    <p className="text-sm leading-relaxed">
                        K Pure brings you the finest room fragrances made with natural oils and soothing blends—designed to elevate your senses and space.
                    </p>
                    <p className="mt-4 text-sm">
                        📱 WhatsApp: <a href="https://wa.me/918050946378" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">8050946378</a><br />
                        📸 Instagram/Facebook: <a href="https://instagram.com/kpure.india" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">@kpure.india</a>
                    </p>
                    <div className="flex gap-4 mt-4 text-[var(--color-primary-dull)]">
                        {/* Replace '...' with actual SVGs or use react-icons */}
                        <a href="https://wa.me/918050946378" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">...</svg>
                        </a>
                        <a href="https://instagram.com/kpure.india" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">...</svg>
                        </a>
                        <a href="https://facebook.com/kpure.india" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">...</svg>
                        </a>
                    </div>
                </div>

                {/* Our Brand Links */}
                <div>
                    <p className="text-lg font-semibold text-[var(--color-primary)]">Our Brand</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">About K Pure</a></li>
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Our Philosophy</a></li>
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Sustainability</a></li>
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Careers</a></li>
                    </ul>
                </div>

                {/* Customer Care Links */}
                <div>
                    <p className="text-lg font-semibold text-[var(--color-primary)]">Customer Care</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Contact Support</a></li>
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">FAQs</a></li>
                        <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Fragrance Guide</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="max-w-sm">
                    <p className="text-lg font-semibold text-[var(--color-primary)]">Stay Inspired</p>
                    <p className="mt-3 text-sm">
                        Sign up to receive scent inspirations, exclusive offers & early access to collections.
                    </p>
                    <div className="flex items-center mt-4">
                        <input
                            type="email"
                            className="bg-gray-100 rounded-l border border-gray-300 h-10 px-4 text-sm outline-none w-full"
                            placeholder="Enter your email"
                        />
                        <button className="bg-[#6ba750] hover:bg-[#5b9445] text-white px-4 h-10 rounded-r text-sm transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-200" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-5 text-sm text-[var(--color-primary-dull)]">
                <p>© {new Date().getFullYear()} K Pure. All rights reserved.</p>
                <ul className="flex gap-4 mt-2 md:mt-0">
                    <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-[var(--color-accent-dark)]">Cookie Settings</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
