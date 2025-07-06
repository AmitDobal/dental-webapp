export const services = [
  {
    id: 1,
    title: "Root Canal Treatment",
    shortDescription:
      "Expert root canal therapy to save your natural teeth with advanced techniques and pain-free procedures.",
    longDescription:
      "A root canal is done to save a badly decayed or infected tooth. We clean the infected nerves inside the tooth, disinfect it, and seal it to relieve pain and prevent further damage — all while preserving your natural tooth. Starts from ₹3000 onwards without cement.",
      image: "/images/services/root-canal.png",
    
    pricing: {
      startingPrice: "₹3,000",
      priceRange: "₹3,000 - ₹4,000",
      treatments: [
        {
          name: "Single-Rooted Tooth RCT",
          price: "₹3,000",
          description: "Complete root canal treatment for front teeth",
        },
        {
          name: "Multi-Rooted Tooth RCT",
          price: "₹4,000",
          description:
            "Root canal treatment for back teeth with multiple roots",
        },
        {
          name: "Post-Obturation Composite Restoration",
          price: "₹1,000",
          description: "Tooth-colored filling after root canal completion",
        },
      ],
    },
    features: [
      "Pain-free procedures",
      "Advanced rotary techniques",
      "Single-visit treatments available",
      "Digital X-ray guidance",
      "Post-treatment restoration",
      "Follow-up care included",
    ],
  },
  {
    id: 2,
    title: "Digital Smile Designing (DSD with Emax Veneers)",
    shortDescription:
      "Transform your smile with our advanced cosmetic dental procedures including veneers and aesthetic treatments.",
    longDescription:
      "This is a high-end, digitally planned smile transformation. Using Emax ceramic veneers, we design your ideal smile on a computer and bring it to life — with ultra-thin, durable, and natural-looking ceramic shells. One tooth starts from ₹8000 onwards",
    image: "/images/services/cosmetic-dentistry.jpg",
    images: [
      "/images/services/root-canal.png",
      "/images/services/root-canal.png",
    ],
    pricing: {
      startingPrice: "₹2,000",
      priceRange: "₹2,000 - ₹8,000",
      treatments: [
        // {
        //   name: "Composite Veneers (Per Tooth)",
        //   price: "₹2,000",
        //   description: "Direct composite veneers for smile enhancement",
        // },
        {
          name: "EMAX / All-Ceramic Veneers (Per Tooth)",
          price: "₹8,000",
          description: "Premium ceramic veneers for natural-looking results",
        },
      ],
    },
    features: [
      // "Composite veneers",
      "EMAX ceramic veneers",
      "Smile design consultation",
      "Natural-looking results",
      "Minimally invasive procedures",
      // "Same-day treatments available",
    ],
  },
   {
    id: 3,
    title: "Smile Makeover (Composite Veneers)",
    shortDescription:
      "Transform your smile with our advanced cosmetic dental procedures including veneers and aesthetic treatments.",
    longDescription:
      "If you want a quick and beautiful change in your smile, composite veneers are ideal. They are tooth-coloured layers sculpted directly on your teeth to fix shape, size, or colour issues — all in a single visit. Starts from ₹2000 onwards",
    image: "/images/services/cosmetic-dentistry.jpg",
    images: [
      "/images/services/root-canal.png",
      "/images/services/root-canal.png",
    ],
    pricing: {
      startingPrice: "₹2,000",
      priceRange: "₹2,000 - ₹8,000",
      treatments: [
        {
          name: "Composite Veneers (Per Tooth)",
          price: "₹2,000",
          description: "Direct composite veneers for smile enhancement",
        },
        // {
        //   name: "EMAX / All-Ceramic Veneers (Per Tooth)",
        //   price: "₹8,000",
        //   description: "Premium ceramic veneers for natural-looking results",
        // },
      ],
    },
    features: [
      "Composite veneers",
      // "EMAX ceramic veneers",
      "Smile design consultation",
      "Natural-looking results",
      "Minimally invasive procedures",
      "Same-day treatments available",
    ],
  },
  {
    id: 4,
    title: "Dental Implants",
    shortDescription:
      "Permanent solution for missing teeth with high-quality dental implants and premium crown options.",
    longDescription:
      "Dental implants are the best replacement for missing teeth. A small titanium post is fixed in your jawbone, acting like a tooth root. A crown is then placed on top, giving you a natural-looking and long-lasting smile. Starts from ₹20000 onwards without crown.",
    image: "/images/services/dental-implants.jpg",
    images: [
      "/images/services/root-canal.png",
    ],
    pricing: {
      startingPrice: "₹20,000",
      priceRange: "₹20,000 - ₹34,000",
      treatments: [
        {
          name: "Dental Implant (Without Crown)",
          price: "₹20,000",
          description: "Titanium implant placement surgery",
        },
        {
          name: "PFM Crown (5 Years Warranty)",
          price: "₹6,500",
          description: "PFM crown with 5-year warranty coverage",
        },
        {
          name: "Zirconia Crown (5 Years Warranty)",
          price: "₹10,000",
          description: "Premium zirconia crown with 5-year warranty",
        },
        {
          name: "Zirconia Crown (10 Years Warranty)",
          price: "₹12,000",
          description: "Premium zirconia crown with 10-year warranty",
        },
        {
          name: "Zirconia Crown (15 Years Warranty)",
          price: "₹14,000",
          description: "Premium zirconia crown with 15-year warranty",
        },
      ],
    },
    features: [
      "Titanium implants",
      "Multiple crown options",
      "Warranty coverage available",
      "3D planning technology",
      "Minimally invasive surgery",
      "Long-term success rates",
    ],
  },
  {
    id: 5,
    title: "Tooth-Coloured Filling (Composite)",
    shortDescription:
      "High-quality tooth-colored fillings to restore your teeth's natural appearance and function.",
    longDescription:
      "These are white fillings that match your natural tooth shade. They are used to repair decayed or chipped teeth and restore their function and appearance — discreetly and effectively. Starts from ₹1200 onwards",
    image: "/images/services/tooth-fillings.jpg",
    pricing: {
      startingPrice: "₹800",
      priceRange: "₹1200 - ₹1,500",
      treatments: [
        {
          name: "Composite Filling",
          price: "₹1,200 – ₹1,500",
          description: "Tooth-colored aesthetic fillings for cavities",
        },
        {
          name: "GIC Filling",
          price: "₹800",
          description: "Glass ionomer cement filling for specific cases and child dentistry",
        },
      ],
    },
    features: [
      "Tooth-colored materials",
      "Mercury-free fillings",  
      "Natural appearance",
      "Durable restoration",
      "Single-visit treatment",
      "Cavity prevention",
    ],
  },
  {
    id: 6,
    title: "Dental Crowns",
    shortDescription:
      "Protective crowns and caps to restore damaged teeth with metal and porcelain options.",
    longDescription:
      "Our crown and cap services provide excellent protection for damaged or weakened teeth. We offer both metal and porcelain-fused-to-metal, zirconia options for optimal strength and aesthetics.",
    image: "/images/services/crowns-caps.jpg",
    pricing: {
      startingPrice: "₹2,000",
      priceRange: "₹2,000 - ₹4,500",
      treatments: [
        {
          name: "Metal Crown",
          price: "₹2,000",
          description: "Durable but visible, best suited for back teeth where strength matters more than looks.",
        },
        {
          name: "PFM Crown (Without Warranty)",
          price: "₹4,500",
          description:
            "A metal crown with a tooth-coloured layer on top — blends in better than full metal.",
        },
        {
          name: "PFM Crown (With Warranty) ",
          price: "₹6,500",
          description:
            "Same as above but with added strength and warranty for long-term peace of mind.",
        },
        {
          name: "Zirconia Crown (With Warranty)",
          price: "₹10,000 - ₹14,000",
          description:
            "Strong, metal-free, and most natural-looking — ideal for front and back teeth with high aesthetics.",
        },

      ],
    },
    features: [
      "Durability",
      "Aesthetics",
      "Custom-fitted design",
      "Long-lasting protection",
      "Natural bite restoration",
      "Color-matched options",
    ],
  },
   {
    id: 7,
    title: "Orthodontic Treatments",
    shortDescription:
      "Professional dental cleaning and preventive treatments to maintain optimal oral health.",
    longDescription:
      "Correcting malaligned teeth to beautiful smiles.",
    image: "/images/services/cleaning-preventive.jpg",
    pricing: {
      startingPrice: "₹30,000",
      priceRange: "₹30,000 - ₹3,00,000",
      treatments: [
        {
          name: "Metal Braces",
          price: "₹30,000 onwards",
          description:
            "Traditional and effective, metal braces are the most affordable option to correct crooked or misaligned teeth.",
        },
        {
          name: "Ceramic Braces",
          price: "₹65,000 onwards",
          description: "These tooth-coloured braces work like metal ones but are less noticeable — ideal for those who want a subtle look.",
        },
        {
          name: "Invisible Aligners (Clear Aligners)",
          price: "₹60,000 onwards",
          description: "Clear trays that gently shift teeth into position — no brackets, no wires. Removable and comfortable! Invisalign®️ (US Brand) – Starts from ₹1.5 lakh onwards. Other Brands (US, Korean, Indian) – Range from ₹60,000 onwards. Cost depends on the brand chosen and severity of the case",
        },
      ],
    },
    features: [
      "EMI options available",
      "Regular follow-ups and patient education",
      "Custom treatment plans available",
      "Early orthodontic and adult orthodontic treatments available",
      "Self ligating braces available",
      "Damon system available",
    ],
  },
   {
    id: 8,
    title: "Tooth Bleaching / Whitening",
    shortDescription:
      "Professional dental cleaning and preventive treatments to maintain optimal oral health.",
    longDescription:
      "Tooth whitening is a safe and effective way to brighten dull or stained teeth. Using professional-grade bleaching agents, we lighten the shade of your teeth in just one session — giving you a visibly whiter and more confident smile. Starts from ₹6000 onwards.",
    image: "/images/services/cleaning-preventive.jpg",
    pricing: {
      startingPrice: "₹6,000",
      priceRange: "₹6,000 - ₹12,000",
      treatments: [
        {
          name: "Tooth bleaching and whitening",
          price: "₹6,000 onwards",
          description:
            "Tooth bleaching and whitening for front 12 teeth (Smile zone)",
        }
      ],
    },
    features: [
      "Professional scaling",
      "Teeth polishing",
      "Plaque removal",
      "Tartar elimination",
      "Gum health improvement",
      "Preventive care guidance",
    ],
  },
  {
    id: 9,
    title: "Preventive Dental Care  ",
    shortDescription:
      "Professional dental cleaning and preventive treatments to maintain optimal oral health.",
    longDescription:
      "Regular professional cleaning is essential for maintaining good oral health. Our scaling and polishing services remove plaque, tartar, and stains while preventing gum disease and tooth decay.",
    image: "/images/services/cleaning-preventive.jpg",
    pricing: {
      startingPrice: "₹1,000",
      priceRange: "₹1,000 - ₹1,500",
      treatments: [
        {
          name: "Scaling",
          price: "₹1,000",
          description:
            "Professional cleaning to remove plaque and tartar build-up that regular brushing can’t eliminate.",
        },
        {
          name: "Polishing",
          price: "₹1,200",
          description: "Smoothens the tooth surface after scaling, leaving your teeth clean, shiny, and fresh.",
        },
        {
          name: "Fluoride Treatment",
          price: "₹1,000 - 1,500",
          description: "A protective fluoride application that strengthens teeth and helps prevent cavities — especially beneficial for kids and adults prone to decay",
        },
      ],
    },
    features: [
      "Professional ultrasonic scaling and polishing, flossing included.",
      "Plaque removal",
      "Tartar elimination",
      "Gum health improvement",
      "Preventive care guidance",
    ],
  },
];
