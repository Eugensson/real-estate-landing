import House1 from "@/public/assets/houses/house1.png";
import House2 from "@/public/assets/houses/house2.png";
import House3 from "@/public/assets/houses/house3.png";
import House4 from "@/public/assets/houses/house4.png";
import House5 from "@/public/assets/houses/house5.png";
import House6 from "@/public/assets/houses/house6.png";
import House7 from "@/public/assets/houses/house7.png";
import House8 from "@/public/assets/houses/house8.png";
import House9 from "@/public/assets/houses/house9.png";
import House10 from "@/public/assets/houses/house10.png";
import House11 from "@/public/assets/houses/house11.png";
import House12 from "@/public/assets/houses/house12.png";

import House1Lg from "@/public/assets/houses/house1lg.png";
import House2Lg from "@/public/assets/houses/house2lg.png";
import House3Lg from "@/public/assets/houses/house3lg.png";
import House4Lg from "@/public/assets/houses/house4lg.png";
import House5Lg from "@/public/assets/houses/house5lg.png";
import House6Lg from "@/public/assets/houses/house6lg.png";
import House7Lg from "@/public/assets/houses/house7lg.png";
import House8Lg from "@/public/assets/houses/house8lg.png";
import House9Lg from "@/public/assets/houses/house9lg.png";
import House10Lg from "@/public/assets/houses/house10lg.png";
import House11Lg from "@/public/assets/houses/house11lg.png";
import House12Lg from "@/public/assets/houses/house12lg.png";

import Apartment1 from "@/public/assets/apartments/a1.png";
import Apartment2 from "@/public/assets/apartments/a2.png";
import Apartment3 from "@/public/assets/apartments/a3.png";
import Apartment4 from "@/public/assets/apartments/a4.png";
import Apartment5 from "@/public/assets/apartments/a5.png";
import Apartment6 from "@/public/assets/apartments/a6.png";

import Apartment1Lg from "@/public/assets/apartments/a1lg.png";
import Apartment2Lg from "@/public/assets/apartments/a2lg.png";
import Apartment3Lg from "@/public/assets/apartments/a3lg.png";
import Apartment4Lg from "@/public/assets/apartments/a4lg.png";
import Apartment5Lg from "@/public/assets/apartments/a5lg.png";
import Apartment6Lg from "@/public/assets/apartments/a6lg.png";

import Agent1 from "@/public/assets/agents/agent1.png";
import Agent2 from "@/public/assets/agents/agent2.png";
import Agent3 from "@/public/assets/agents/agent3.png";
import Agent4 from "@/public/assets/agents/agent4.png";
import Agent5 from "@/public/assets/agents/agent5.png";
import Agent6 from "@/public/assets/agents/agent6.png";
import Agent7 from "@/public/assets/agents/agent7.png";
import Agent8 from "@/public/assets/agents/agent8.png";
import Agent9 from "@/public/assets/agents/agent9.png";
import Agent10 from "@/public/assets/agents/agent10.png";
import Agent11 from "@/public/assets/agents/agent11.png";
import Agent12 from "@/public/assets/agents/agent12.png";

import { House, PriceRangeItem } from "@/types";

export const housesData: House[] = [
  {
    id: "1",
    type: "house",
    name: "Modern Family Haven",
    description:
      "This elegant two-story family home combines timeless design with modern comfort. Large windows fill every room with natural light, while the open-concept living area flows seamlessly into a spacious kitchen. A private backyard offers space for gatherings and relaxation, making it perfect for families who value both functionality and style.",
    image: House1,
    imageLg: House1Lg,
    country: "united states",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: 6,
    bathrooms: 3,
    surface: 4200,
    year: 2016,
    price: 110000,
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: "2",
    type: "house",
    name: "Maplewood Retreat",
    description:
      "Set in a quiet neighborhood surrounded by mature trees, this home delivers warmth and serenity. Its spacious kitchen with custom cabinetry opens to a cozy dining nook, while the living room’s fireplace creates a welcoming atmosphere. The outdoor patio invites weekend barbecues and peaceful morning coffee moments.",
    image: House2,
    imageLg: House2Lg,
    country: "canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: 6,
    bathrooms: 3,
    surface: 4200,
    year: 2016,
    price: 140000,
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: "3",
    type: "house",
    name: "Oakridge Residence",
    description:
      "Blending contemporary architecture with rustic accents, Oakridge Residence offers a perfect mix of charm and innovation. The sunlit interior highlights an open-plan living area with vaulted ceilings, while the master suite provides privacy and comfort. Ideal for those seeking sophistication and tranquility in a suburban setting.",
    image: House3,
    imageLg: House3Lg,
    country: "united states",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: 6,
    bathrooms: 3,
    surface: 4200,
    year: 2016,
    price: 170000,
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: "4",
    type: "house",
    name: "Cedar Grove Estate",
    description:
      "A refined property designed for comfort and luxury. The Cedar Grove Estate boasts a gourmet kitchen, elegant living room, and a large deck overlooking lush greenery. Each detail has been thoughtfully crafted to combine beauty and practicality, creating a serene retreat for modern living.",
    image: House4,
    imageLg: House4Lg,
    country: "canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 6,
    bathrooms: 3,
    surface: 4200,
    year: 2016,
    price: 200000,
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: "5",
    type: "house",
    name: "Sunset Ridge Home",
    description:
      "Enjoy stunning evening views from this bright and airy home perched on a gentle slope. Featuring hardwood floors, high ceilings, and a chef’s kitchen, Sunset Ridge is perfect for those who love open spaces and natural light. The landscaped backyard adds a touch of tranquility to everyday life.",
    image: House5,
    imageLg: House5Lg,
    country: "united states",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 5,
    bathrooms: 3,
    surface: 4200,
    year: 2015,
    price: 210000,
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: "6",
    type: "house",
    name: "Willowbrook Manor",
    description:
      "This spacious residence is the definition of comfort and elegance. With a grand entrance, formal dining area, and designer finishes throughout, it’s ideal for families or entertainers. The large backyard and multi-car garage add functionality, while refined details make it a truly standout property.",
    image: House6,
    imageLg: House6Lg,
    country: "canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 6,
    bathrooms: 3,
    surface: 6200,
    year: 2014,
    price: 220000,
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: "7",
    type: "apartment",
    name: "Downtown Serenity Loft",
    description:
      "Experience the perfect mix of urban living and peace in this modern loft apartment. Bright interiors, sleek finishes, and a functional layout make it ideal for professionals or couples. Located within walking distance of cafes and shops, this home offers both convenience and contemporary style.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 2,
    bathrooms: 1,
    surface: 1200,
    year: 2012,
    price: 20000,
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: "8",
    type: "apartment",
    name: "Parkview City Apartment",
    description:
      "A stylish apartment featuring minimalist interiors and open spaces filled with natural light. The kitchen and living room flow effortlessly into each other, creating a cozy yet modern atmosphere. Perfect for city dwellers seeking comfort, accessibility, and a touch of sophistication.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "united states",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 3,
    bathrooms: 1,
    surface: 1000,
    year: 2011,
    price: 30000,
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: "9",
    type: "apartment",
    name: "The Coastal Nook",
    description:
      "A cozy coastal-style apartment ideal for a modern lifestyle. Designed with warm tones and functional spaces, it features a bright living area, updated kitchen, and scenic balcony. Perfect for those seeking a peaceful escape without leaving the conveniences of city life behind.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "united states",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 2,
    bathrooms: 1,
    surface: 1100,
    year: 2011,
    price: 40000,
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: "10",
    type: "house",
    name: "Pinecrest Villa",
    description:
      "A refined home surrounded by nature, Pinecrest Villa offers generous living space and timeless finishes. The expansive kitchen, open-concept living area, and outdoor terrace are designed for gatherings and relaxation alike. It’s an ideal retreat for anyone seeking calm and style in one place.",
    image: House7,
    imageLg: House7Lg,
    country: "canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: 5,
    bathrooms: 3,
    surface: 3200,
    year: 2015,
    price: 117000,
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: "11",
    type: "house",
    name: "Harborfield Home",
    description:
      "This beautiful home blends clean architectural lines with cozy family comfort. A spacious kitchen, bright bedrooms, and landscaped yard create a welcoming atmosphere. Designed for effortless living, it’s ideal for growing families who value practicality and refined taste.",
    image: House8,
    imageLg: House8Lg,
    country: "canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: 7,
    bathrooms: 2,
    surface: 2200,
    year: 2019,
    price: 145000,
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: "12",
    type: "house",
    name: "Riverside Estate",
    description:
      "Nestled near the river, this elegant home offers an exceptional living experience. With spacious interiors, modern finishes, and a private outdoor lounge, Riverside Estate delivers both luxury and serenity. A rare opportunity for those seeking a premium lifestyle close to nature.",
    image: House9,
    imageLg: House9Lg,
    country: "united states",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: 4,
    bathrooms: 4,
    surface: 4600,
    year: 2015,
    price: 139000,
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: "13",
    type: "house",
    name: "The Aspen Residence",
    description:
      "Classic architecture meets modern design in this spacious family home. Large living areas, elegant finishes, and a bright kitchen create a refined atmosphere. Surrounded by greenery, The Aspen Residence is perfect for those who want both privacy and comfort in one elegant package.",
    image: House10,
    imageLg: House10Lg,
    country: "canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 5,
    bathrooms: 2,
    surface: 5200,
    year: 2014,
    price: 180000,
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: "14",
    type: "house",
    name: "Hillcrest Family Home",
    description:
      "A beautifully crafted home featuring open-plan living spaces and stylish interiors. The spacious kitchen and inviting living area make entertaining easy, while the private bedrooms provide quiet comfort. Hillcrest combines quality craftsmanship with modern design for everyday luxury.",
    image: House11,
    imageLg: House11Lg,
    country: "united states",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 5,
    bathrooms: 2,
    surface: 3200,
    year: 2011,
    price: 213000,
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: "15",
    type: "house",
    name: "Silverwood Estate",
    description:
      "Silverwood Estate is a sophisticated residence designed with comfort in mind. Featuring high ceilings, a gourmet kitchen, and spacious outdoor living areas, this home blends style and functionality. Perfect for those who seek a timeless property with a sense of harmony and space.",
    image: House12,
    imageLg: House12Lg,
    country: "canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 4,
    bathrooms: 3,
    surface: 5200,
    year: 2013,
    price: 221000,
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: "16",
    type: "apartment",
    name: "Urban Heights Studio",
    description:
      "This compact yet stylish studio apartment is designed for modern city life. Featuring an open layout, quality finishes, and panoramic views, it provides both comfort and efficiency. Ideal for young professionals who value a vibrant lifestyle in a convenient location.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: 2,
    bathrooms: 1,
    surface: 1300,
    year: 2011,
    price: 21000,
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: "17",
    type: "apartment",
    name: "The Midtown Suite",
    description:
      "A contemporary apartment offering bright interiors and smart design. Its open kitchen, cozy lounge, and private balcony make it perfect for modern urban living. Located in the heart of the city, The Midtown Suite offers comfort, convenience, and sophistication in equal measure.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "united states",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: 3,
    bathrooms: 1,
    surface: 1000,
    year: 2012,
    price: 32000,
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: "18",
    type: "apartment",
    name: "Lakeview Modern Apartment",
    description:
      "Offering stunning lake views, this modern apartment features elegant interiors and efficient use of space. The open living area, contemporary kitchen, and private balcony create a peaceful escape. Designed for comfort and style, it’s a perfect choice for serene urban living.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: 3,
    bathrooms: 1,
    surface: 1200,
    year: 2010,
    price: 38000,
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];

export const pricesData: PriceRangeItem[] = [
  { value: "All price ranges", label: "All price ranges" },
  { value: "100000 - 130000", label: "$ 100,000 - $ 130,000" },
  { value: "130000 - 160000", label: "$ 130,000 - $ 160,000" },
  { value: "160000 - 190000", label: "$ 160,000 - $ 190,000" },
  { value: "190000 - 220000", label: "$ 190,000 - $ 220,000" },
  { value: "10000 - 30000", label: "$ 10,000 - $ 30,000" },
  { value: "30000 - 40000", label: "$ 30,000 - $ 40,000" },
];
