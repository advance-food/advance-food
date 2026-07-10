export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  specs: ProductSpec[];
  image: string;
  detailedDesc: string;
  applications: string[];
  keyBenefits: string[];
  packaging: string[];
}

export const products: Product[] = [
  {
    slug: "dehydrated-garlic",
    title: "Dehydrated Garlic",
    subtitle: "Premium Vegetable Crops",
    desc: "Rich, pungent garlic processed with aroma and nutrition fully intact, sourced directly from local agricultural hubs.",
    detailedDesc: "Sourced from the premium agricultural belts of Gujarat, our dehydrated garlic is processed using advanced low-temperature dehydration technology. This ensures the retention of the rich, pungent flavor profile, characteristic aroma, and high nutritional value. Ideal for soups, sauces, seasoning blends, and ready-to-eat meals.",
    specs: [
      { label: "Clove/Flakes", value: "8 - 15 MM" },
      { label: "Chopped", value: "3 - 5 MM" },
      { label: "Minced", value: "1 - 3 MM" },
      { label: "Granules", value: "0.5 - 1 MM" },
      { label: "Powder", value: "80 - 100 Mesh" },
      { label: "Color", value: "Brownish / Off-White" },
      { label: "Packing", value: "20 Kg / 25 Kg" },
      { label: "Quality", value: "A Grade & Commercial Grade" },
    ],
    image: "/images/products/garlic-flakes.png",
    applications: [
      "Seasoning blends, dry rubs, and marinades",
      "Canned food, instant soups, and gravies",
      "Meat processing, sausages, and savory snacks",
      "Garlic bread and bakery product toppings"
    ],
    keyBenefits: [
      "100% natural, free from artificial additives",
      "Long shelf-life with minimal flavor degradation",
      "High allicin retention for therapeutic value",
      "Hygienically processed in certified facilities"
    ],
    packaging: [
      "20 Kg / 25 Kg double poly-bag inside strong corrugated carton",
      "Custom bulk packaging options available upon request"
    ]
  },
  {
    slug: "dehydrated-white-onion",
    title: "Dehydrated White Onion",
    subtitle: "Symmetric Premium Slices",
    desc: "Fresh agricultural white onion dehydrated under highly hygienic controls to retain maximum natural pungency.",
    detailedDesc: "Manufactured from selected premium-grade fresh white onions grown in the fertile soils of Mahuva, Gujarat. Processed under strict quality checks, these dehydrated flakes and powders offer consistent pungency and flavor, serving as a staple ingredient in global food manufacturing.",
    specs: [
      { label: "Flakes", value: "8 - 15 MM" },
      { label: "Chopped", value: "3 - 5 MM" },
      { label: "Minced", value: "1 - 3 MM" },
      { label: "Granules", value: "0.5 - 1 MM" },
      { label: "Powder", value: "80 - 100 Mesh" },
      { label: "Color", value: "White" },
      { label: "Packing", value: "14 Kg / 20 Kg" },
      { label: "Quality", value: "A Grade & Commercial Grade" },
    ],
    image: "/images/products/white-onion.jpg",
    applications: [
      "Instant noodle seasoning and soup powders",
      "Salad dressings, dipping sauces, and ketchups",
      "Commercial culinary kitchens and fast-food chains",
      "Canned beans, ready meals, and frozen foods"
    ],
    keyBenefits: [
      "High natural pungency with a sweet undertone",
      "Excellent rehydration properties",
      "Hygienically processed with low microbiological load",
      "Year-round supply availability and price stability"
    ],
    packaging: [
      "14 Kg / 20 Kg PP bags or carton boxes with moisture-proof inner liners",
      "Vacuum-packed options for long-transit ocean shipping"
    ]
  },
  {
    slug: "dehydrated-red-pink-onion",
    title: "Dehydrated Red/Pink Onion",
    subtitle: "Vibrant Local Varieties",
    desc: "Prime Gujarat field red onions processed with highly controlled dehydration technology to secure excellent flavor.",
    detailedDesc: "Sourced from the premium red and pink onion crops of Mahuva, Gujarat. Dehydrated using advanced thermal processing to lock in the natural reddish-pink hue, rich caramelized flavor, and sharp aroma. Crucial for bulk commercial food preparation and spice mixture production.",
    specs: [
      { label: "Flakes", value: "8 - 15 MM" },
      { label: "Chopped", value: "3 - 5 MM" },
      { label: "Minced", value: "1 - 3 MM" },
      { label: "Granules", value: "0.5 - 1 MM" },
      { label: "Powder", value: "80 - 100 Mesh" },
      { label: "Color", value: "Red / Pink" },
      { label: "Packing", value: "14 Kg / 20 Kg" },
      { label: "Quality", value: "A Grade & Commercial Grade" },
    ],
    image: "/images/products/red-onion.png",
    applications: [
      "Traditional South Asian curries, gravies, and stews",
      "Dry seasonings, snack foods, and savory coatings",
      "Pickle, chutney, and relish manufacturing",
      "Savory bakery items (onion breads, cheese-onion rolls)"
    ],
    keyBenefits: [
      "Retains authentic sweet-sharp flavor profile of fresh red onions",
      "Visually appealing natural reddish-pink color",
      "Drastically reduces preparation labor and wastage in bulk kitchens",
      "Highly stable shelf life at room temperature"
    ],
    packaging: [
      "14 Kg / 20 Kg double poly-bag inside heavy-duty cartons",
      "Custom weight packaging available for commercial buyers"
    ]
  },
  {
    slug: "cumin-seeds",
    title: "Cumin Seeds",
    subtitle: "Aromatic Spices & Seeds",
    desc: "Aromatic, machine-cleaned cumin seeds offering a warm, earthy flavor ideal for global culinary applications.",
    detailedDesc: "Commonly known as 'Jeera,' our premium cumin seeds are sourced from high-yield crops and processed in advanced cleaning and sorting facilities. They boast high natural essential oil content, strong earthy warmth, and a distinctive aroma. Machine-cleaned to meet rigorous international phytosanitary standards.",
    specs: [
      { label: "Seed Length", value: "5 - 6 MM" },
      { label: "Color", value: "Yellowish-brown to warm brown" },
      { label: "Forms Available", value: "Whole Seeds / Fine Powder" },
      { label: "Moisture Content", value: "Low (Safe Long Transit)" },
      { label: "Quality", value: "Pure, Machine Cleaned" },
    ],
    image: "/images/products/cumin-seeds.png",
    applications: [
      "Essential spice tempering in curries, rice, and lentil dishes",
      "Key ingredient in garam masala, taco seasonings, and barbecue rubs",
      "Herbal tea blends and traditional digestive formulations",
      "Flavor extract and cumin oil distillation"
    ],
    keyBenefits: [
      "High volatile oil content (minimum 2.5%) for robust flavor",
      "Cleaned to 99.5% purity (Singapore/Europe quality grade)",
      "Strict control over aflatoxin and chemical pesticide levels",
      "Rich source of iron and natural antioxidants"
    ],
    packaging: [
      "25 Kg / 50 Kg new jute bags or PP bags with inner poly-liners",
      "Custom paper sacks or big bags (tote bags) available"
    ]
  },
  {
    slug: "coriander-seeds",
    title: "Coriander Seeds",
    subtitle: "Aromatic Spices & Seeds",
    desc: "Aromatic, machine-cleaned coriander seeds offering a citrusy, mildly sweet flavor ideal for diverse culinary and spice blend applications.",
    detailedDesc: "Harvested in the optimal farming regions of Gujarat and Rajasthan, our coriander seeds (Dhaniya) are carefully processed, graded, and cleaned. They offer a delightful citrusy and woody aroma, making them a crucial base ingredient for global spice manufacturers, curry powder makers, and craft breweries.",
    specs: [
      { label: "Seed Size", value: "3 - 5 MM" },
      { label: "Color", value: "Light greenish-brown to golden brown" },
      { label: "Forms Available", value: "Whole Seeds / Fine Powder" },
      { label: "Moisture Content", value: "Low (Safe Long Transit)" },
      { label: "Quality", value: "Pure, Machine Cleaned" },
    ],
    image: "/images/products/coriander-seeds.png",
    applications: [
      "Base spice in curry powders, garam masala, and pickling mixes",
      "Flavoring agent in craft beers (particularly Belgian Witbiers)",
      "Seasoning for sausages, cured meats, and bakery goods",
      "Herbal infusions and traditional wellness teas"
    ],
    keyBenefits: [
      "Vibrant color sorting and dual-polishing process",
      "Gentle processing preserves natural essential oils",
      "Free from chemical fumigants; naturally steam-sterilized option available",
      "Extremely low moisture content prevents transit mold"
    ],
    packaging: [
      "20 Kg / 25 Kg multi-wall paper bags or premium PP bags",
      "Custom bulk options for industrial processors"
    ]
  },
  {
    slug: "fennel-seeds",
    title: "Fennel Seeds",
    subtitle: "Sweet Green Spices",
    desc: "Aromatic, machine-cleaned fennel seeds offering a sweet, licorice-like flavor ideal for culinary, confectionery, and herbal applications.",
    detailedDesc: "Premium quality 'Saunf' seeds harvested under ideal weather conditions in Gujarat and Rajasthan. Sorted using advanced optical color sorting machinery. Our fennel seeds are prized for their refreshing sweet aroma, licorice-like flavor, and uniform greenish appearance.",
    specs: [
      { label: "Seed Length", value: "4 - 8 MM" },
      { label: "Color", value: "Light green to pale greenish-brown" },
      { label: "Forms Available", value: "Whole Seeds / Fine Powder" },
      { label: "Moisture Content", value: "Low (Safe Long Transit)" },
      { label: "Quality", value: "Pure, Machine Cleaned" },
    ],
    image: "/images/products/fennel-seeds.png",
    applications: [
      "Confectioneries, baked snacks, and breath freshener mixes",
      "Herbal infusion teas, liqueurs, and digestive aids",
      "Italian sausage, meat seasoning, and marinades",
      "Pickling spice formulations and spice mixtures"
    ],
    keyBenefits: [
      "High anethole content for rich licorice flavor",
      "Uniform size grading and vibrant green color options",
      "Meticulously cleaned to eliminate dust and foreign matter (99% purity)",
      "Premium grades (Abu Road, Unjha qualities) available"
    ],
    packaging: [
      "25 Kg PP bags or multi-layer paper sacks",
      "Custom packaging available on demand"
    ]
  },
  {
    slug: "dehy-fresh-fried-onion",
    title: "Dehy./Fresh Fried Onion",
    subtitle: "Crispy Allium Flakes",
    desc: "Premium crispy golden-brown fried onions processed from fresh crops, offering exceptional texture and caramelized flavor for global industrial buyers.",
    detailedDesc: "Prepared by frying premium fresh onions in high-quality vegetable oil. Using advanced centrifugal oil-draining technology, we reduce excess oil content to the absolute minimum, resulting in ultra-crispy, flavorful golden-brown flakes. Ideal for quick-service restaurants, ready-to-eat meal manufacturers, and food service groups.",
    specs: [
      { label: "Form", value: "Crispy Flakes / Minced" },
      { label: "Color", value: "Golden Yellow to Dark Brown" },
      { label: "Oil Content", value: "Low (Centrifugally Drained)" },
      { label: "Moisture Content", value: "Max 5%" },
      { label: "Applications", value: "Ready-to-eat meals, seasoning, biryani topping" },
      { label: "Packing", value: "10 Kg / 15 Kg Carton Boxes" },
    ],
    image: "/images/products/fried-onion.jpg",
    applications: [
      "Toppings for biryanis, hot dogs, burgers, and noodles",
      "Canned soup base flavorings and thickeners",
      "Instant food formulations and seasoning mixes",
      "Savory bakery decorations and toppings"
    ],
    keyBenefits: [
      "Superb crispy crunch that holds up over time",
      "Rich, natural caramelized onion flavor with no artificial additives",
      "Extended shelf stability compared to home-fried onions",
      "Fried using trans-fat-free, quality vegetable oil"
    ],
    packaging: [
      "10 Kg / 15 Kg carton boxes with thick inner aluminum foil bag to preserve crunchiness",
      "Custom nitrogen-flushed packaging options"
    ]
  },
  {
    slug: "red-chilli",
    title: "Red Chilli",
    subtitle: "Aromatic Hot Spices",
    desc: "Premium, carefully picked sun-dried red chillies and flakes offering strong spicy flavor profiles.",
    detailedDesc: "Sourced from the heart of India's chilli-producing regions, we export and supply premium Teja, Guntur, Kashmiri, and Bydagi varieties of red chilli. Hand-selected for consistent sizing and vibrant red color, they are sun-dried under hygienic conditions to preserve their strong pungency and coloring properties.",
    specs: [
      { label: "Varieties", value: "Teja, Kashmiri, Guntur, Sannam, Bydagi" },
      { label: "Chilli Flakes", value: "Available" },
      { label: "Chilli Seeds", value: "Available" },
      { label: "Chilli Powder", value: "Available" },
      { label: "Aroma & Heat", value: "Highly Pungent & Spicy" },
      { label: "Quality", value: "Export Grade" },
    ],
    image: "/images/products/red-chilli.png",
    applications: [
      "Hot sauce and paste manufacturing",
      "Chilli flakes for pizza, pasta, and noodle toppings",
      "Spicy seasoning blends, marinades, and curry powders",
      "Snack food and potato chip flavorings"
    ],
    keyBenefits: [
      "Wide range of heat profiles, from mild (Kashmiri) to intense (Teja)",
      "High ASTA color values for natural red coloring",
      "Carefully sun-dried on clean platforms to avoid mold",
      "Thoroughly tested for Aflatoxin, Sudan dye, and chemical residues"
    ],
    packaging: [
      "10 Kg / 20 Kg / 25 Kg jute gunny bags or new PP bags",
      "Custom corrugated box packaging for whole stemmed/stemless chillies"
    ]
  },
  {
    slug: "turmeric",
    title: "Turmeric",
    subtitle: "Golden Active Rhizomes",
    desc: "High-curcumin active turmeric processed cleanly to produce a deep golden yellow spice powder.",
    detailedDesc: "Sourced from India's most fertile turmeric growing belts, our turmeric rhizomes are boiled, dried, polished, and ground. This process ensures the maximum retention of Curcumin, the active health component, delivering a bright golden yellow powder with a warm, comforting earthy flavor.",
    specs: [
      { label: "Varieties", value: "Salem, Lakadong, Erode, Sangli" },
      { label: "Curcumin Content", value: "1% - 5% (High Potency)" },
      { label: "Forms Available", value: "Turmeric Finger / Pure Powder" },
      { label: "Color", value: "Deep Golden Yellow" },
      { label: "Quality", value: "High Grade Export" },
    ],
    image: "/images/products/turmeric.png",
    applications: [
      "Essential ingredient in curry powder and spice mixes",
      "Natural coloring agent in mustard, cheese, and butter",
      "Nutraceutical products and dietary supplements",
      "Traditional cosmetics and skin-care applications"
    ],
    keyBenefits: [
      "Guaranteed curcumin levels (up to 5% in Lakadong variant)",
      "Deep earthy aroma with hints of citrus and ginger",
      "Strong natural color-staining index",
      "Fully compliant with international heavy-metal limits"
    ],
    packaging: [
      "25 Kg / 50 Kg double-lined paper bags, PP bags, or jute sacks",
      "Private-label packaging available for retail distributors"
    ]
  },
  {
    slug: "spray-dried-lemon-powder",
    title: "Spray Dried Lemon Powder",
    subtitle: "Zesty Citrus Extract",
    desc: "High-purity spray dried lemon powder preserving natural tanginess, acidic freshness, and vitamin C for diverse culinary applications.",
    detailedDesc: "Produced by spray-drying fresh lemon juice concentrate into a fine, free-flowing powder in a state-of-the-art facility. This process locks in the authentic taste, tangy citrus aroma, vitamin C content, and active acidity of fresh lemons while offering excellent solubility in liquids.",
    specs: [
      { label: "Form", value: "Free-flowing Fine Powder" },
      { label: "Color Profile", value: "Light Yellow to Pale Cream" },
      { label: "Taste & Aroma", value: "Tangy Citrus Flavor" },
      { label: "Mesh Sizing", value: "80 - 100 Mesh" },
      { label: "Solubility", value: "Highly Soluble in Water" },
      { label: "Packing", value: "20 Kg / 25 Kg Carton Box" },
    ],
    image: "/images/products/lemon-powder.png",
    applications: [
      "Instant beverage powders, soft drinks, and tea blends",
      "Confectioneries, fillings, jellies, and desserts",
      "Salad dressings, marinade bases, sauces, and seasoning mixes",
      "Pharmaceutical tablets and health supplement formulations"
    ],
    keyBenefits: [
      "Instantly soluble in cold water with zero residues",
      "Uniform taste, aroma, and acidity profile",
      "Long room-temperature shelf life, eliminating the need for cold storage",
      "Natural source of ascorbic acid (Vitamin C)"
    ],
    packaging: [
      "20 Kg / 25 Kg corrugated boxes with double poly-bag liners",
      "Moisture-proof heat-sealed bulk bags"
    ]
  },
  {
    slug: "mint-leaves-powder",
    title: "Mint Leaves/Powder",
    subtitle: "Cooling Aromatic Herbs",
    desc: "Premium sun-dried green mint leaves and fine powder providing an authentic cooling sensation, fresh herbal aroma, and sharp zesty flavor.",
    detailedDesc: "Sourced from select organic mint crops, the leaves are gently air-dried in a state-of-the-art facility. This controlled drying method preserves the cooling menthol flavor and bright green color. Available as whole leaves or finely ground powder.",
    specs: [
      { label: "Form", value: "Dried Leaves / Fine Powder" },
      { label: "Color Profile", value: "Vibrant Green" },
      { label: "Mesh Size", value: "60 - 80 Mesh (for Powder)" },
      { label: "Aroma", value: "Intense Menthol Cooling" },
      { label: "Purity", value: "100% Pure & Organic" },
    ],
    image: "/images/products/mint-leaves.png",
    applications: [
      "Beverage blends, mocktails, and mint teas",
      "Chewing gum, candies, and throat lozenges",
      "Sauces, dips, and yogurt seasonings",
      "Ayurvedic medicine and cosmetic items"
    ],
    keyBenefits: [
      "High menthol concentration for intense freshness",
      "100% pure, containing no added color or fillers",
      "Preserved natural green coloring",
      "Hygienically processed to ensure low moisture content"
    ],
    packaging: [
      "10 Kg / 15 Kg carton boxes with double poly-bags",
      "Custom bulk bags"
    ]
  },
  {
    slug: "moringa-leaves-powder",
    title: "Moringa Leaves/Powder",
    subtitle: "Pure Organic Superfood",
    desc: "Rich green moringa leaves ground under clean settings to retain vitamins, minerals, and color.",
    detailedDesc: "Often referred to as the 'Drumstick Tree' or 'Miracle Tree,' moringa is a nutritional powerhouse. Our moringa leaves are harvested, washed, shadow-dried, and finely ground. We ensure low-temperature processing to retain high vitamin, mineral, and amino acid content.",
    specs: [
      { label: "Form", value: "Fine, free-flowing Powder" },
      { label: "Color Profile", value: "Bright Green / Vibrant Green" },
      { label: "Mesh Sizing", value: "60 - 100 Mesh" },
      { label: "Nutrient Retention", value: "Cold Processed / Dry Air Dry" },
      { label: "Quality", value: "Superfood Export Grade" },
    ],
    image: "/images/products/moringa-powder.png",
    applications: [
      "Dietary supplements, capsules, and green powders",
      "Superfood smoothie mixes and protein powders",
      "Herbal teas and health drinks",
      "Fortified food products"
    ],
    keyBenefits: [
      "Rich in vitamins A, C, iron, and potassium",
      "100% natural, certified organic sourcing",
      "High solubility and easy digestion",
      "Excellent bright green coloring agent"
    ],
    packaging: [
      "20/25 Kg fiber drums or carton boxes with inner barrier film"
    ]
  }
];
