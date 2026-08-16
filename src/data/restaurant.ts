import heroMandi from "@/assets/hero-mandi.jpg";
import haneeth from "@/assets/haneeth.jpg";
import interior from "@/assets/interior.jpg";
import madbee from "@/assets/madbee.jpg";
import ribs from "@/assets/ribs.jpg";
import hamour from "@/assets/hamour.jpg";
import luqaimat from "@/assets/luqaimat.jpg";
import familyDining from "@/assets/family-dining.jpg";

export const images = {
  heroMandi,
  haneeth,
  interior,
  madbee,
  ribs,
  hamour,
  luqaimat,
  familyDining,
};

export const restaurant = {
  name: "Zam Zam Mandi Restaurant",
  shortName: "Zam Zam Mandi",
  area: "Nadd Al Hamar • Dubai",
  cuisine: "Yemeni / Arabian / Middle Eastern",
  phone: "+971 4 892 9060",
  phoneHref: "tel:+97148929060",
  whatsapp: "https://wa.me/97148929060",
  addressLines: [
    "Rebat St, near Bel Remaitha Club",
    "Nadd Al Hamar, Dubai",
    "United Arab Emirates",
  ],
  maps: "https://maps.app.goo.gl/1m93dXpTZUFBWn3R7",
  instagram: "https://instagram.com/zamzammandidubai",
  instagramHandle: "@zamzammandidubai",
  hoursLabel: "11:00 AM — 12:00 AM",
  priceRange: "AED 50–100",
  rating: "4.3",
  reviewCount: "3,000+",
};

export const weekHours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day) => ({ day, hours: "11:00 AM – 12:00 AM" }));

export const navLinks = [
  { to: "/", label: "Home", ar: "الرئيسية" },
  { to: "/menu", label: "Menu", ar: "القائمة" },
  { to: "/about", label: "About", ar: "من نحن" },
  { to: "/experience", label: "Experience", ar: "التجربة" },
  { to: "/gallery", label: "Gallery", ar: "الصور" },
  { to: "/private-dining", label: "Private Dining", ar: "الجلسات الخاصة" },
  { to: "/contact", label: "Contact", ar: "تواصل" },
] as const;

export type Dish = {
  id: string;
  name: string;
  arabic?: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  tags?: string[];
};

export const signatureDishes: Dish[] = [
  {
    id: "chicken-mandi",
    name: "Chicken Mandi",
    arabic: "مندي دجاج",
    description:
      "Slow-smoked chicken resting on fragrant basmati, perfumed with cardamom, clove and saffron.",
    price: 42,
    category: "Mandi",
    image: heroMandi,
  },
  {
    id: "mutton-haneeth",
    name: "Mutton Haneeth",
    arabic: "حنيذ لحم",
    description:
      "Lamb cooked low and slow until it falls from the bone, served over spiced rice.",
    price: 78,
    category: "Haneeth",
    image: haneeth,
  },
  {
    id: "chicken-madbee",
    name: "Chicken Madbee",
    arabic: "مدبي دجاج",
    description:
      "Charcoal-grilled chicken finished with a smoky tomato madbee sauce.",
    price: 46,
    category: "Madbee",
    image: madbee,
  },
  {
    id: "mutton-ribs",
    name: "Mutton Ribs",
    arabic: "ريش لحم",
    description: "Marinated ribs grilled over open flame with Yemeni spice rub.",
    price: 68,
    category: "Meat",
    image: ribs,
  },
  {
    id: "hamour-mandi",
    name: "Hamour Mandi",
    arabic: "مندي هامور",
    description:
      "Whole hamour roasted in the mandi oven, served with turmeric rice and lemon.",
    price: 72,
    category: "Fish",
    image: hamour,
  },
  {
    id: "luqaimat",
    name: "Luqaimat",
    arabic: "لقيمات",
    description: "Golden dumplings soaked in date syrup and toasted sesame.",
    price: 18,
    category: "Desserts",
    image: luqaimat,
  },
];

export const menuCategories = [
  "Mandi",
  "Madbee",
  "Haneeth",
  "Meat",
  "Chicken",
  "Fish",
  "Rice",
  "Soups",
  "Salads",
  "Starters",
  "Desserts",
  "Beverages",
];

export const menu: Dish[] = [
  ...signatureDishes,
  {
    id: "mutton-mandi",
    name: "Mutton Mandi",
    arabic: "مندي لحم",
    description: "Tender lamb over smoked basmati with raisins and nuts.",
    price: 75,
    category: "Mandi",
    image: haneeth,
  },
  {
    id: "family-mandi",
    name: "Family Mandi Platter",
    arabic: "مندي عائلي",
    description: "A generous shared platter for four with mixed meats and rice.",
    price: 195,
    category: "Mandi",
    tags: ["Serves 4"],
    image: heroMandi,
  },
  {
    id: "mutton-madbee",
    name: "Mutton Madbee",
    arabic: "مدبي لحم",
    description: "Grilled lamb layered with madbee sauce and charred tomato.",
    price: 79,
    category: "Madbee",
    image: madbee,
  },
  {
    id: "chicken-haneeth",
    name: "Chicken Haneeth",
    arabic: "حنيذ دجاج",
    description: "Oven-buried chicken, deeply spiced and steamed until tender.",
    price: 44,
    category: "Haneeth",
    image: heroMandi,
  },
  {
    id: "lamb-chops",
    name: "Grilled Lamb Chops",
    arabic: "ريش غنم مشوية",
    description: "Char-grilled chops with cumin salt and grilled vegetables.",
    price: 82,
    category: "Meat",
    image: ribs,
  },
  {
    id: "shuwa",
    name: "Mutton Shuwa",
    arabic: "شواء",
    description: "Slow-roasted mutton shoulder, smoky and rich.",
    price: 85,
    category: "Meat",
    image: haneeth,
  },
  {
    id: "grilled-chicken",
    name: "Charcoal Grilled Chicken",
    arabic: "دجاج مشوي",
    description: "Half chicken marinated overnight, grilled to order.",
    price: 38,
    category: "Chicken",
    image: madbee,
  },
  {
    id: "chicken-mashkool",
    name: "Chicken Mashkool",
    arabic: "مشكول دجاج",
    description: "Rice folded with caramelised onion and tender chicken.",
    price: 40,
    category: "Chicken",
    image: heroMandi,
  },
  {
    id: "sayadieh",
    name: "Fish Sayadieh",
    arabic: "صيادية",
    description: "Fried fish over onion-browned rice with tahina sauce.",
    price: 62,
    category: "Fish",
    image: hamour,
  },
  {
    id: "grilled-hamour",
    name: "Grilled Hamour",
    arabic: "هامور مشوي",
    description: "Whole hamour grilled with lemon, garlic and coriander.",
    price: 78,
    category: "Fish",
    image: hamour,
  },
  {
    id: "plain-rice",
    name: "Mandi Rice",
    arabic: "رز مندي",
    description: "Smoked basmati rice served on its own.",
    price: 16,
    category: "Rice",
    tags: ["Vegetarian"],
  },
  {
    id: "bukhari-rice",
    name: "Bukhari Rice",
    arabic: "رز بخاري",
    description: "Spiced rice with carrot, raisin and warm spice.",
    price: 20,
    category: "Rice",
    tags: ["Vegetarian"],
  },
  {
    id: "lentil-soup",
    name: "Lentil Soup",
    arabic: "شوربة عدس",
    description: "Creamy lentil soup with cumin and lemon.",
    price: 14,
    category: "Soups",
    tags: ["Vegetarian"],
  },
  {
    id: "meat-soup",
    name: "Yemeni Meat Soup",
    arabic: "شوربة لحم",
    description: "Slow-simmered broth with lamb and barley.",
    price: 18,
    category: "Soups",
  },
  {
    id: "arabic-salad",
    name: "Arabic Salad",
    arabic: "سلطة عربية",
    description: "Cucumber, tomato, onion, lemon and olive oil.",
    price: 14,
    category: "Salads",
    tags: ["Vegan"],
  },
  {
    id: "fattoush",
    name: "Fattoush",
    arabic: "فتوش",
    description: "Garden greens with sumac and crisp bread.",
    price: 18,
    category: "Salads",
    tags: ["Vegetarian"],
  },
  {
    id: "hummus",
    name: "Hummus",
    arabic: "حمص",
    description: "Whipped chickpea with tahina and olive oil.",
    price: 16,
    category: "Starters",
    tags: ["Vegetarian"],
  },
  {
    id: "sambusa",
    name: "Meat Sambusa",
    arabic: "سمبوسة",
    description: "Crisp pastry filled with spiced minced meat.",
    price: 15,
    category: "Starters",
  },
  {
    id: "masoub",
    name: "Masoub",
    arabic: "معصوب",
    description: "Banana and bread pudding with cream and honey.",
    price: 26,
    category: "Desserts",
    tags: ["Vegetarian"],
  },
  {
    id: "karak",
    name: "Karak Chai",
    arabic: "شاي كرك",
    description: "Spiced milk tea brewed strong.",
    price: 8,
    category: "Beverages",
    tags: ["Vegetarian"],
  },
  {
    id: "adeni-tea",
    name: "Adeni Tea",
    arabic: "شاي عدني",
    description: "Traditional Yemeni tea with cardamom.",
    price: 10,
    category: "Beverages",
    tags: ["Vegetarian"],
  },
  {
    id: "fresh-juice",
    name: "Fresh Juice",
    arabic: "عصير طازج",
    description: "Seasonal fruit, pressed to order.",
    price: 18,
    category: "Beverages",
    tags: ["Vegan"],
  },
];

export const faqs = [
  {
    q: "Where is Zam Zam Mandi Restaurant located?",
    a: "Rebat St, near Bel Remaitha Club, Nadd Al Hamar, Dubai, United Arab Emirates.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open daily from 11:00 AM to 12:00 AM.",
  },
  {
    q: "Do you take reservations?",
    a: "Yes. Send a reservation request through our booking page or call +971 4 892 9060. Our team confirms availability by phone.",
  },
  {
    q: "What is the average price per person?",
    a: "Most guests spend between AED 50 and AED 100 per person, depending on the dishes and platters chosen.",
  },
  {
    q: "Is the restaurant family friendly?",
    a: "Yes. We welcome families and larger groups, with comfortable seating and traditional-style dining areas.",
  },
  {
    q: "Do you offer takeaway and delivery?",
    a: "Dine-in and takeaway are available. For delivery, please call the restaurant directly for current options.",
  },
  {
    q: "Do you serve vegetarian dishes?",
    a: "Yes — rice, soups, salads, mezze and desserts are available for vegetarian guests.",
  },
];

export const galleryItems = [
  { src: heroMandi, alt: "Chicken mandi on a brass platter", category: "Food" },
  { src: interior, alt: "Arabian majlis dining room", category: "Restaurant" },
  { src: haneeth, alt: "Mutton haneeth over spiced rice", category: "Food" },
  { src: familyDining, alt: "Family sharing a mandi platter", category: "Family" },
  { src: madbee, alt: "Chicken madbee with tomato sauce", category: "Food" },
  { src: ribs, alt: "Grilled mutton ribs on a brass tray", category: "Details" },
  { src: hamour, alt: "Hamour mandi with turmeric rice", category: "Food" },
  { src: luqaimat, alt: "Luqaimat with date syrup", category: "Details" },
  { src: interior, alt: "Traditional floor seating", category: "Dining" },
  { src: familyDining, alt: "Warm Arabian hospitality", category: "Hospitality" },
  { src: heroMandi, alt: "Steaming mandi rice", category: "Dining" },
  { src: haneeth, alt: "Brass service and slow-cooked lamb", category: "Hospitality" },
];

export const galleryCategories = [
  "All",
  "Food",
  "Restaurant",
  "Dining",
  "Family",
  "Details",
  "Hospitality",
];

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Zam Zam Mandi Restaurant",
  servesCuisine: ["Yemeni", "Arabian", "Middle Eastern"],
  priceRange: "AED 50–100",
  telephone: "+971 4 892 9060",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rebat St, near Bel Remaitha Club",
    addressLocality: "Nadd Al Hamar, Dubai",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "00:00",
    },
  ],
  hasMap: "https://maps.app.goo.gl/1m93dXpTZUFBWn3R7",
  sameAs: ["https://instagram.com/zamzammandidubai"],
};