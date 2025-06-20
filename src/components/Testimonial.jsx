import React from 'react'

const Testimonial = () => {
    const [tooltip, setTooltip] = React.useState({ visible: false, x: 0, y: 0, text: '' });
    const cardRefs = React.useRef([]);

    const testimonials = [
        {
            name: 'Radhika M.',
            title: 'Bangalore',
            message:
                'KPure air fresheners have completely changed the vibe of my home. The camphor aroma is so calming and clean—it actually feels like I’m breathing better!',
            image: '/WomanAvatarIllustration.svg',
        },
        {
            name: 'Ankit S.',
            title: 'Pune',
            message:
                'Finally, a freshener that doesn’t smell artificial. I love that KPure uses real camphor and essential oils. Plus, the scent lasts for days!',
            image: '/ChillGuyAvatar.svg',
        },
        {
            name: 'Neha V.',
            title: 'Mumbai',
            message:
                'I use the KPure essence in my yoga corner. It helps me feel centered and keeps the room smelling divine without any chemicals.',
            image: '/WomanAvatarIllustration.svg',
        },
        {
            name: 'Rajeev T.',
            title: 'Delhi',
            message:
                'Every time someone enters my living room, they ask what I’m using. It’s subtle yet noticeable—just perfect.',
            image: '/ChillGuyAvatar.svg',
        },
        {
            name: 'Sneha G.',
            title: 'Hyderabad',
            message:
                'I love the innovative hanging design. No plug-ins, no sprays—just natural fragrance wherever I hang it. Car, wardrobe, bathroom—super versatile!',
            image: '/WomanAvatarIllustration.svg',
        },
    ];
    

    const handleMouseMove = (e, index) => {
        const bounds = cardRefs.current[index].getBoundingClientRect();
        setTooltip({
            visible: true,
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
            text: testimonials[index].name,
        });
    };

    const handleMouseLeave = () => {
        setTooltip(prev => ({ ...prev, visible: false }));
    };

    return (
        <div className="bg-[#f9fafb] text-gray-700 py-16">
            <h1 className="text-center text-4xl font-bold text-[#1a202c]">What Our Customers Say</h1>
            <p className="text-center text-gray-500 mt-2 max-w-xl mx-auto">
                Discover how K Pure is transforming spaces with natural and luxurious fragrances.
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                        className="relative bg-[#edf2f7] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        {tooltip.visible && tooltip.text === testimonial.name && (
                            <span
                                className="absolute z-10 px-2.5 py-1 text-sm rounded bg-[#6ba750] text-white pointer-events-none"
                                style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
                            >
                                {tooltip.text}
                            </span>
                        )}
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl text-center">
                            <h3 className="text-lg font-semibold text-[#1a202c]">Breathe Wellness, Live Pure</h3>
                            <p className="my-4 text-sm text-gray-600 line-clamp-4">
                                {testimonial.message}
                            </p>
                            <div className="flex items-center justify-center mt-4">
                                <img
                                    className="rounded-full w-10 h-10"
                                    src={testimonial.image}
                                    alt={`${testimonial.name} profile`}
                                />
                                <div className="text-left ml-3">
                                    <p className="text-[#1a202c] font-medium">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
