import p1 from "../../public/p1.jpeg";
import p2 from "../../public/p2.jpeg";
import p3 from "../../public/p3.jpeg";
import p4 from "../../public/p4.jpeg";
import p5 from "../../public/p5.jpeg";
import p6 from "../../public/p6.jpeg";
import bg1 from "../../public/bg1.png";
import SearchIcon from "../../public/SearchIcon.json";
import Cart from "../../public/Cart.json";
import Menu from "../../public/MenuIcon.json";
import User from "../../public/UserIcon.json";
import ArrowRight from "../../public/RightArrow.json";
import StarIcon from "../../public/Star.json";
export const assets = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  bg1,
  SearchIcon,
  Cart,
  Menu,
  User,
  ArrowRight,
  StarIcon,
};

export const categories = [
  {
    text: "Room Fragrances",
    path: "/room-fragrances",
    image: p1,
    bgColor: "#94c977",
  },
];

export const dummyProducts = [
  {
    _id: "gd46g23h",
    name: "Kpure Sandal Air Fragrance",
    category: "Room Fragrances",
    price: 179,
    offerPrice: 169,
    image: [p1],
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    inStock: true,
  },
  {
    _id: "gd46g23h1",
    name: "KPure Rose Air Fragrance",
    category: "Room Fragrances",
    price: 179,
    offerPrice: 169,
    image: [p6],
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    inStock: true,
  },
  {
    _id: "gd46g23h2",
    name: "Kpure Camphor Air Fragrance",
    category: "Room Fragrances",
    price: 179,
    offerPrice: 169,
    image: [p3],
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    inStock: true,
  },
  {
    _id: "gd46g23h3",
    name: "Kpure Lavender Air Fragrance",
    category: "Room Fragrances",
    price: 179,
    offerPrice: 169,
    image: [p4],
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    inStock: true,
  },
  {
    _id: "gd46g23h4",
    name: "⁠KPure Citrus Air Fragrance",
    category: "Room Fragrances",
    price: 179,
    offerPrice: 169,
    image: [p5],
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    inStock: true,
  },
  {
    _id: "gd46g23h5",
    name: "⁠KPure Citrus Air Fragrance",
    category: "Room Fragrances",
    price: 100,
    offerPrice: 80,
    image: [p6],
    createdAt: "2023-10-01T12:00:00Z",
    updatedAt: "2023-10-01T12:00:00Z",
    inStock: true,
  },
];

export const features = [
  {
    icon: "🌿",
    title: "100% Natural Ingredients",
    description:
      "Crafted with pure botanical extracts and essential oils to refresh your space without harmful chemicals.",
  },
  {
    icon: "🕊️",
    title: "Soothing Aromatherapy",
    description:
      "Enhance your mood and well-being with calming herbal blends designed to ease stress and promote relaxation.",
  },
  {
    icon: "🧼",
    title: "Toxin-Free & Safe",
    description:
      "No parabens, no phthalates—just clean, eco-friendly freshness safe for kids, pets, and the environment.",
  },
  {
    icon: "🌸",
    title: "Long-Lasting Fragrance",
    description:
      "Enjoy subtle, lingering scents that gently fill your room all day without being overpowering.",
  },
  {
    icon: "🌎",
    title: "Eco-Conscious Packaging",
    description:
      "Sustainably packaged in recyclable materials, because we care for your home and the planet.",
  },
  {
    icon: "🧘",
    title: "Crafted for Daily Rituals",
    description:
      "Designed to be part of your daily self-care and mindfulness routine—light, breathe, relax.",
  },
];

export const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        question: "What is K Pure?",
        answer:
          "K Pure is a premium home fragrance brand that uses natural essential oils and carefully curated scents to elevate your home environment.",
      },
      {
        id: 2,
        question: "Are your fragrances safe for children and pets?",
        answer:
          "Yes, all our room fragrances are formulated to be non-toxic and safe for use around children and pets when used as directed.",
      },
      {
        id: 3,
        question: "Where are K Pure products made?",
        answer:
          "Our fragrances are designed and blended in India using globally sourced botanical ingredients and cruelty-free processes.",
      },
      {
        id: 4,
        question: "Do you offer eco-friendly packaging?",
        answer:
          "Yes, our packaging is recyclable and we continuously strive to reduce our carbon footprint through sustainable sourcing.",
      },
    ],
  },
  {
    id: 2,
    category: "Orders & Shipping",
    questions: [
      {
        id: 5,
        question: "How long will my order take to arrive?",
        answer:
          "Orders are processed within 1–2 business days and shipping usually takes 3–7 business days depending on your location.",
      },
      {
        id: 6,
        question: "Can I track my order?",
        answer:
          "Yes, once your order ships, you will receive a tracking number via email to monitor your shipment in real-time.",
      },
      {
        id: 7,
        question: "Do you ship internationally?",
        answer:
          "Currently, we only ship within India, but we’re working on expanding our reach to international customers soon.",
      },
      {
        id: 8,
        question: "What if I receive a damaged product?",
        answer:
          "Please contact our support team within 48 hours of delivery with images, and we’ll assist you with a replacement or refund.",
      },
    ],
  },
  {
    id: 3,
    category: "Products & Usage",
    questions: [
      {
        id: 9,
        question: "What is KPure Air Freshener made of?",
        answer:
          "KPure air fresheners are made from 100% camphor infused with carefully selected essential oils. We do not use any synthetic chemicals, gas propellants, or artificial fragrances.",
      },
      {
        id: 10,
        question: "How long does one air freshener last?",
        answer:
          "Each KPure air freshener typically lasts between 30 to 45 days, depending on room size, ventilation, and temperature. The scent gradually fades as the camphor naturally sublimates.",
      },
      {
        id: 11,
        question: "Where can I use KPure Air Fresheners?",
        answer:
          "You can hang them in homes, cars, bathrooms, wardrobes, pooja rooms, or any space where you want a natural, refreshing aroma. They’re designed to be versatile and travel-friendly.",
      },
      {
        id: 12,
        question: "Is camphor safe to use indoors?",
        answer:
          "Yes! When used as directed, camphor is safe and even beneficial—it helps purify the air, repel insects, and promote clarity and calmness. However, it should be kept out of reach of children and pets.",
      },
      {
        id: 13,
        question: "What fragrances are available?",
        answer:
          "KPure currently offers five unique natural essences, each blended with camphor:\n• Classic Camphor\n• Rose\n• Sandalwood\n• Lavender\n• Citrus\nMore blends are coming soon!",
      },
      {
        id: 14,
        question: "Can I use more than one freshener in a large space?",
        answer:
          "Yes! For larger rooms or open areas, using two or more units will help maintain a consistent and balanced fragrance.",
      },
    ],
  },
  {
    id: 4,
    category: "Returns & Support",
    questions: [
      {
        id: 15,
        question: "What is your return policy?",
        answer:
          "You may return unopened, unused products within 7 days of delivery. Read our full return policy on our website.",
      },
      {
        id: 16,
        question: "How can I contact K Pure support?",
        answer:
          "You can email us at support@kpure.in or reach out through the Contact page on our website.",
      },
      {
        id: 17,
        question: "Do you offer gift packaging?",
        answer:
          "Yes, gift wrapping is available at checkout. Perfect for birthdays, housewarmings, and festive occasions!",
      },
      {
        id: 18,
        question: "Can I modify my order after placing it?",
        answer:
          "We process orders quickly, but if you contact us within 2 hours of placing your order, we’ll try our best to assist.",
      },
    ],
  },
];
