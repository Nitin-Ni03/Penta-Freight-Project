export const navData = [
  {
    type: "link",
    label: "HOME",
    path: "/",
  },
  {
    type: "link",
    label: "ABOUT US",
    path: "/about",
  },
  {
    type: "dropdown",
    label: "SERVICES",
    path: "/services",
    items: [
      { label: "Air Freight", path: "/air-freight" },
      { label: "Sea Freight", path: "/sea-freight" },
      { label: "Multi Modal Transport", path: "/multi-modal" },
      { label: "Project Cargo", path: "/project-cargo" },
      { label: "Custom Broking", path: "/custom-broking" },
      { label: "Transit Warehouse & Fleet", path: "/warehouse" },
    ],
  },
  {
    type: "dropdown",
    label: "PENTAKUHL",
    icon: "/Home_page/p.png",
    path: "/pentakuhl",
    items: [
      { label: "Parcel Shippers", path: "/pentakuhl/about" },
      { label: "Pallet Shippers", path: "/pentakuhl/solutions" },
    ],
  },
  {
    type: "link",
    label: "INDUSTRIES",
    path: "/industries",
  },
  {
    type: "link",
    label: "CAREERS",
    path: "/careers",
  },
  {
    type: "link",
    label: "CONTACT",
    path: "/contact",
  },
];

export const mobileNavData = [
  {
    type: "link",
    label: "HOME",
    path: "/",
  },
  {
    type: "link",
    label: "ABOUT US",
    path: "/about",
  },
  {
    type: "dropdown",
    label: "SERVICES",
    items: [
      "Air Freight",
      "Sea Freight",
      "Multi Modal Transport",
      "Project Cargo",
      "Custom Broking",
      "Transit Warehouse And Fleet",
    ],
  },
  {
    type: "dropdown",
    label: "PENTAKUHL",
    icon: "/Home_page/p.png",
    items: [
      { label: "Parcel Shippers", path: "/pentakuhl/about" },
      { label: "Pallet Shippers", path: "/pentakuhl/solutions" },
    ],
  },
  {
    type: "link",
    label: "INDUSTRIES",
    path: "/industries",
  },
  {
    type: "link",
    label: "CAREERS",
    path: "/careers",
  },
  {
    type: "link",
    label: "CONTACT",
    path: "/contact",
  },
];

export const section2Data = {
  badge: "ABOUT US",
  title: "PENTA FREIGHT",
  description:
    "Penta Freight provides reliable logistics solutions, specializing in temperature-sensitive shipments. We ensure safe, on-time delivery worldwide. Trust us for seamless supply chain management.",
  highlights: ["logistics solutions", "on-time delivery"],
  image: "/Home_page/about-plane.jpg",
  banner: "/Home_page/white-banner.png",
};

export const section3Data = {
  title: "Our Philosophy",

  description:
    "Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and excellence.",

  buttonText: "Read more",
  hoverText: "Let's Go",

  backgroundImage:
    "/Home_page/lineas-CSz1CbRe.png",
};

export const section4TopData = {
  badge: "Services",

  titleLine1: "Seamless Solutions for",

  titleLine2: "Every Logistics Need",

  description:
    "Tailored logistics solutions for timely, cost-effective deliveries across air, sea, and multimodal transport.",
};

export const section4Cards = [
  {
    title: "Air Freight",
    image: "/Home_page/1.png",
    reverse: false,

    description: [
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
      "Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
    ],

    tags: [
      "Speed",
      "Efficiency",
      "Reliability",
      "Affordability",
    ],
  },

  {
    title: "Sea Freight",
     image: "/Home_page/2.png",
    reverse: true,

    description: [
      "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.",
      "With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.",
      "We provide flexible FCL scheduling and cost-efficient LCL options.",
    ],

    tags: [
      "Flexibility",
      "Cost-Effective",
      "Scalability",
      "Expertise",
    ],
  },

  {
    title: "Multi Modal Transport",
     image: "/Home_page/3.png",
    reverse: false,

    description: [
      "Every shipment is unique, so we offer multiple affordable transport options.",
      "Along with air and sea freight, we provide multimodal transport via our global network.",
      "Our tailored solutions enable real-time cargo tracking.",
    ],

    tags: [
      "Integration",
      "Efficiency",
      "Visibility",
      "Convenience",
    ],
  },

  {
    title: "Project Cargo",
     image: "/Home_page/4.png",
    reverse: true,

    description: [
      "We understand the precise needs of customers and shipping lines.",
      "We handle logistics, clearance, and oversized or breakbulk cargo with expertise.",
      "We transport over-dimensional cargo using open tops, flat racks, and flatbeds.",
    ],

    tags: [
      "Precision",
      "Expertise",
      "Oversized",
      "Security",
    ],
  },

  {
    title: "Custom Broking",
     image: "/Home_page/6.jpg",
    reverse: false,

    description: [
      "Our licensed customs agents know domestic and international regulations.",
      "With 30+ years of experience, we have strong ties with authorities.",
      "We ensure smooth, timely, and transparent cargo clearance.",
    ],

    tags: [
      "Accuracy",
      "Compliance",
      "Speed",
      "Expertise",
    ],
  },

  {
    title: "Transit Warehouse and Fleet",
     image: "/Home_page/5.png",
    reverse: true,

    description: [
      "Our transit warehouse is near the International Air Cargo Complex and Ocean Ports.",
      "We offer storage for all cargo types.",
      "We provide specialized packaging, palletizing, and shrink wrapping.",
    ],

    tags: [
      "Specialized",
      "Accessible",
      "Versatile",
      "Nationwide",
    ],
  },
];

export const section4BottomData = {
  badge: "Why us",

  titleLine1: "Why choose",

  titleLine2: "Penta Freight.",

  cards: [
    {
      icon: "/Home_page/a.png",
      title: "Comprehensive Solutions",
      description:
        "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.",
    },

    {
      icon: "/Home_page/b.png",
      title: "Expertise and Experience",
      description:
        "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.",
    },

    {
      icon: "/Home_page/c.png",
      title: "State-of-the-Art Facilities",
      description:
        "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.",
    },
  ],
};

export const section5Data = {
  title: "Certifications",
  subtitle:
    "Certified excellence, ensuring compliance, quality, and global logistics reliability.",

  backgroundImage: "/Home_page/lineas-CSz1CbRe.png",

  certifications: [
    {
      id: 1,
      image: "/Home_page/11.png",
      alt: "CHAA",
    },
    {
      id: 2,
      image: "/Home_page/12.png",
      alt: "AEO",
    },
    {
      id: 3,
      image: "/Home_page/13.png",
      alt: "FI",
    },
    {
      id: 4,
      image: "/Home_page/14.png",
      alt: "FIATA",
    },
    {
      id: 5,
      image: "/Home_page/15.png",
      alt: "IATA",
    },
    {
      id: 6,
      image: "/Home_page/16.png",
      alt: "IATA",
    },
    {
      id: 7,
      image: "/Home_page/17.png",
      alt: "IATA",
    },
  ],
};

export const footerData = {
  indiaIntro: {
    title: "Our",
    highlight: "India",
    suffix: "Offices",
    description:
      "Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.",
  },

  indiaOffices: [
    {
      city: "Mumbai",
      address: [
        "902, 'A' Wing, Times Square,",
        "Andheri-Kurla Road, Marol,",
        "Andheri (East), Mumbai 400 059",
      ],
      phone: "+91 22-6222-6222",
    },
    {
      city: "Ahmedabad",
      address: [
        "D21 The Address, True Value",
        "West Gate, SG highway,",
        "Ahmedabad 380 009",
      ],
      phone: "+91 7940227900",
    },
    {
      city: "Bengaluru",
      address: [
        "205, 2nd floor,",
        "Connection point H.A.L Airport",
        "Exit Road, Bangalore 560 017",
      ],
      phone: "+91 80-4112-5590",
    },
    {
      city: "Chennai",
      address: [
        "Flat no.A1, 1st floor,",
        "No 24 Vembuli Amman koil Street,",
        "Palavanthangal Chennai- 600 114",
      ],
      phone: "+91-44-22241462 / 1464",
    },
    {
      city: "Delhi",
      address: [
        "Penta Freight Pvt. Ltd. Khasra No.",
        "10/1/10/2, 11/5/1, No. 4, Samalkha,",
        "Old Delhi – Gurgaon Road, Opposite",
        "Primary School, New Delhi – 110 037",
      ],
      phone: "+91 11-4078-2222",
    },
    {
      city: "Hyderabad",
      address: [
        "G-27 & 28, Cargo Satellite Building,",
        "Rajiv Gandhi International Airport,",
        "Shamshabad 501 218, Telangana, India",
      ],
      phone: "+91 40-2400-4048",
    },
    {
      city: "Kolkata",
      address: [
        "131, Jangalpur Road, near airport,",
        "Gate No. 3, Motilal Colony, P.O Rajbari,",
        "Kolkata 700 081, West Bengal",
      ],
      phone: "+91 33-2514-7089",
    },
  ],

  usaIntro: {
    title: "Our",
    highlight: "USA",
    suffix: "Office",
    description:
      "Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.",
  },

  usaOffice: {
    city: "Chicago",
    address: [
      "Penta Freight Pvt.Ltd 5100 Newport Dr.",
      "Suite 4, Rolling Meadows, IL 60008 USA",
    ],
    phone: "+040 234 6559 / +224 434 2154",
  },

  bottomLinks: [
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
  ],

  copyright:
    "© 2026 Penta Freight. All Rights Reserved Developed by Nipralo",
};





