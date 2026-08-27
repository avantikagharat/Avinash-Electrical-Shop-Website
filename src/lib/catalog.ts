export type CategoryId =
  | 'inverters'
  | 'batteries'
  | 'solar'
  | 'online-ups'
  | 'car-battery'
  | 'electrical-works';

export interface Product {
  id: string;
  name: string;
  brand: string;
  capacity: string;
  warranty: string;
  highlights: string[];
  idealFor: string;
  image: string;
  badge?: string;
}

export interface Category {
  id: CategoryId;
  title: string;
  tagline: string;
  description: string;
  icon: 'Zap' | 'BatteryCharging' | 'Sun' | 'Server' | 'Car' | 'Wrench';
  image: string;
  brands: string[];
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'inverters',
    title: 'Inverters & Home UPS',
    tagline: 'Uninterrupted power for every home',
    description:
      'Pure sine wave inverters and home UPS systems from 400 VA to 5 kVA, with intelligent battery management and silent operation.',
    icon: 'Zap',
    image: '/images/categories/inverters.jpg',
    brands: ['Luminous', 'Microtek', 'Su-Kam', 'V-Guard', 'Exide', 'Okaya', 'Amaze'],
    products: [
      {
        id: 'inv-1',
        name: 'Zelio+ 1100',
        brand: 'Luminous',
        capacity: '900 VA / 12 V',
        warranty: '2 + 2 Years',
        highlights: ['Pure sine wave', 'LCD display', 'Smart APFC'],
        idealFor: '2-3 BHK homes, fans + lights + TV',
        image: '/images/products/inv-1.jpg',
        badge: 'Best Seller',
      },
      {
        id: 'inv-2',
        name: 'Inverter Star',
        brand: 'Exide',
        capacity: '850 VA / 12 V',
        warranty: '2 Years',
        highlights: ['Pure sine wave', 'High-low charging', 'Overload protection'],
        idealFor: 'Homes with lights, fans and TV',
        image: '/images/products/inv-2.jpg',
      },
      {
        id: 'inv-3',
        name: 'Amaze AQ900+',
        brand: 'Amaze',
        capacity: '900 VA / 12 V',
        warranty: '2 Years',
        highlights: ['Pure sine wave', 'Compact design', 'Short-circuit protection'],
        idealFor: '1-2 BHK apartments',
        image: '/images/products/inv-3.jpg',
        badge: 'Popular',
      },
      {
        id: 'inv-4',
        name: 'Super Power 1100',
        brand: 'Microtek',
        capacity: '1100 VA / 12 V',
        warranty: '3 Years',
        highlights: ['Smart charging', 'UPS and ECO mode', 'Overload protection'],
        idealFor: '2-3 BHK homes with refrigerator',
        image: '/images/products/inv-4.jpg',
      },
      {
        id: 'inv-5',
        name: 'ATSW 950 12V',
        brand: 'Okaya',
        capacity: '950 VA / 12 V',
        warranty: '2 Years',
        highlights: ['True sine wave', 'Intelli-charge', 'Battery deep-discharge guard'],
        idealFor: 'Daily home backup and work-from-home setups',
        image: '/images/products/inv-5.jpg',
      },
      {
        id: 'inv-6',
        name: 'DUPS 1450',
        brand: 'V-Guard',
        capacity: '1450 VA / 24 V',
        warranty: '3 + 2 Years',
        highlights: ['Dual battery', 'Wide input range', 'Smart charging'],
        idealFor: 'Larger homes with AC and water pump',
        image: '/images/products/inv-6.jpg',
        badge: 'Premium',
      },
    ],
  },
  {
    id: 'batteries',
    title: 'Inverter & Tubular Batteries',
    tagline: 'Long-life power storage',
    description:
      'Tall tubular, flat-plate and short-tubular batteries engineered for deep discharge, fast charging and years of reliable backup.',
    icon: 'BatteryCharging',
    image: '/images/categories/batteries.jpg',
    brands: ['Exide', 'Amaron', 'Luminous', 'Livguard', 'Okaya'],
    products: [
      {
        id: 'bat-1',
        name: 'Inva Tubular IT500',
        brand: 'Exide',
        capacity: '150 Ah / 12 V',
        warranty: '48 + 18 Months',
        highlights: ['Tall tubular', 'Low water loss', 'Fast charging'],
        idealFor: 'Home inverters up to 1.5 kVA',
        image: '/images/products/bat-1.jpg',
        badge: 'Best Seller',
      },
      {
        id: 'bat-2',
        name: 'Current TT 150',
        brand: 'Amaron',
        capacity: '150 Ah / 12 V',
        warranty: '36 + 18 Months',
        highlights: ['Tubular technology', 'Heat-resistant', 'Long life'],
        idealFor: 'Long backup applications',
        image: '/images/products/bat-2.jpg',
      },
      {
        id: 'bat-3',
        name: 'Red Charge RC 18000',
        brand: 'Luminous',
        capacity: '180 Ah / 12 V',
        warranty: '36 + 18 Months',
        highlights: ['Tall tubular', 'High reserve', 'Low maintenance'],
        idealFor: 'Heavy load inverters',
        image: '/images/products/bat-3.jpg',
      },
      {
        id: 'bat-4',
        name: 'Dosta 1500',
        brand: 'Livguard',
        capacity: '150 Ah / 12 V',
        warranty: '42 + 18 Months',
        highlights: ['Flat-plate', 'Quick recharge', 'Sturdy build'],
        idealFor: 'Budget home setups',
        image: '/images/products/bat-4.jpg',
      },
    ],
  },
  {
    id: 'solar',
    title: 'Solar Panels & Systems',
    tagline: 'Harness the sun, cut your bill',
    description:
      'Monocrystalline and polycrystalline panels, solar inverters, charge controllers and complete rooftop solutions from 1 kW to 10 kW.',
    icon: 'Sun',
    image: '/images/categories/solar.jpg',
    brands: ['Tata Power Solar', 'Vikram Solar', 'Waaree', 'Luminous', 'Microtek'],
    products: [
      {
        id: 'sol-1',
        name: 'TP Solar Mono 540W',
        brand: 'Tata Power Solar',
        capacity: '540 Wp',
        warranty: '25 Years Performance',
        highlights: ['Monocrystalline', 'High efficiency', 'PID resistant'],
        idealFor: 'Residential & commercial rooftops',
        image: '/images/products/sol-1.jpg',
        badge: 'Premium',
      },
      {
        id: 'sol-2',
        name: 'SOMERA 540W',
        brand: 'Vikram Solar',
        capacity: '540 Wp',
        warranty: '12 + 15 Years',
        highlights: ['Mono PERC', 'Low LID', 'Salt-mist certified'],
        idealFor: 'High-yield installations',
        image: '/images/products/sol-2.jpg',
      },
      {
        id: 'sol-3',
        name: 'Aditya 450W',
        brand: 'Waaree',
        capacity: '450 Wp',
        warranty: '12 + 15 Years',
        highlights: ['Poly-crystalline', 'Toughened glass', 'Anti-reflective'],
        idealFor: 'Cost-effective rooftops',
        image: '/images/products/sol-3.jpg',
      },
      {
        id: 'sol-4',
        name: 'Solar Combo 1.5 kW',
        brand: 'Luminous',
        capacity: '1.5 kW Off-grid',
        warranty: '5 Years (system)',
        highlights: ['Panel + inverter + battery', 'PCU included', 'Net-meter ready'],
        idealFor: '2-3 BHK independent homes',
        image: '/images/products/sol-4.jpg',
        badge: 'Combo',
      },
    ],
  },
  {
    id: 'online-ups',
    title: 'Online UPS Systems',
    tagline: 'Zero-transfer power for critical loads',
    description:
      'True double-conversion online UPS from 1 kVA to 20 kVA for servers, medical equipment, ATMs and sensitive electronics.',
    icon: 'Server',
    image: '/images/categories/online-ups.jpg',
    brands: ['APC', 'Numeric', 'Microtek', 'Su-Kam', 'Delta'],
    products: [
      {
        id: 'ups-1',
        name: 'Smart-UPS 2kVA',
        brand: 'APC',
        capacity: '2 kVA / 2 kW',
        warranty: '2 Years',
        highlights: ['Double conversion', 'LCD', 'Hot-swap battery'],
        idealFor: 'Small server rooms, studios',
        image: '/images/products/ups-1.jpg',
        badge: 'Best Seller',
      },
      {
        id: 'ups-2',
        name: 'Digital 3kVA Online',
        brand: 'Numeric',
        capacity: '3 kVA / 2.7 kW',
        warranty: '2 Years',
        highlights: ['True online', 'Wide input', 'Dry contact'],
        idealFor: 'Medical & lab equipment',
        image: '/images/products/ups-2.jpg',
      },
      {
        id: 'ups-3',
        name: 'UPS SEBz 1kVA',
        brand: 'Microtek',
        capacity: '1 kVA / 800 W',
        warranty: '2 Years',
        highlights: ['Line-interactive', 'Compact', 'Cold start'],
        idealFor: 'Desktops, POS counters',
        image: '/images/products/ups-3.jpg',
      },
      {
        id: 'ups-4',
        name: 'DX 10kVA 3-Phase',
        brand: 'Delta',
        capacity: '10 kVA',
        warranty: '2 Years',
        highlights: ['3-phase in/out', 'Parallel capable', 'SNMP card'],
        idealFor: 'Data centers, hospitals',
        image: '/images/products/ups-4.jpg',
        badge: 'Industrial',
      },
    ],
  },
  {
    id: 'car-battery',
    title: 'Car & Vehicle Batteries',
    tagline: 'Start strong, every morning',
    description:
      'Maintenance-free and low-maintenance batteries for cars, SUVs, bikes and commercial vehicles with on-site fitment.',
    icon: 'Car',
    image: '/images/categories/car-battery.jpg',
    brands: ['Exide', 'Amaron', 'SF Sonic', 'Tata Green', 'ACDelco'],
    products: [
      {
        id: 'car-1',
        name: 'Mileage ML5D',
        brand: 'Exide',
        capacity: '60 Ah',
        warranty: '48 + 12 Months',
        highlights: ['Maintenance-free', 'Vibration resistant', 'Ready to use'],
        idealFor: 'Sedans & compact SUVs',
        image: '/images/products/car-1.jpg',
        badge: 'Best Seller',
      },
      {
        id: 'car-2',
        name: 'Go 65Ah',
        brand: 'Amaron',
        capacity: '65 Ah',
        warranty: '48 + 12 Months',
        highlights: ['High cranking', 'Long life', 'Zero maintenance'],
        idealFor: 'Premium cars & SUVs',
        image: '/images/products/car-2.jpg',
      },
      {
        id: 'car-3',
        name: 'Power 50Ah',
        brand: 'SF Sonic',
        capacity: '50 Ah',
        warranty: '36 + 12 Months',
        highlights: ['Heat-resistant', 'Polypropylene body', 'Spill-proof'],
        idealFor: 'Hatchbacks & bikes',
        image: '/images/products/car-3.jpg',
      },
      {
        id: 'car-4',
        name: 'Tata Green 70Ah',
        brand: 'Tata Green',
        capacity: '70 Ah',
        warranty: '48 + 12 Months',
        highlights: ['Low antimony', 'High reserve', 'Eco-friendly'],
        idealFor: 'Large SUVs & MUVs',
        image: '/images/products/car-4.jpg',
      },
    ],
  },
  {
    id: 'electrical-works',
    title: 'Electrical Works & Services',
    tagline: 'Certified electricians, end-to-end jobs',
    description:
      'Residential and commercial wiring, panel installations, AMC contracts, solar EPC and on-site repair by licensed electricians.',
    icon: 'Wrench',
    image: '/images/categories/electrical-works.jpg',
    brands: ['Havells', 'Anchor', 'Legrand', 'Schneider', 'Polycab'],
    products: [
      {
        id: 'svc-1',
        name: 'Home Wiring & Rewiring',
        brand: 'Avinash Electricals',
        capacity: 'Full house',
        warranty: '1 Year workmanship',
        highlights: ['ISI wires', 'Concealed & surface', 'Earthing check'],
        idealFor: 'New & resale homes',
        image: '/images/products/svc-1.jpg',
      },
      {
        id: 'svc-2',
        name: 'Solar Rooftop EPC',
        brand: 'Avinash Electricals',
        capacity: '1-10 kW',
        warranty: '5 Years',
        highlights: ['Site survey', 'Net-metering', 'Subsidy support'],
        idealFor: 'Homes & small businesses',
        image: '/images/products/svc-2.jpg',
        badge: 'Popular',
      },
      {
        id: 'svc-3',
        name: 'Inverter / UPS Installation',
        brand: 'Avinash Electricals',
        capacity: 'On-site',
        warranty: '90 Days',
        highlights: ['Free demo', 'Battery setup', 'Load balancing'],
        idealFor: 'Any new inverter purchase',
        image: '/images/products/svc-3.jpg',
      },
      {
        id: 'svc-4',
        name: 'Annual Maintenance Contract',
        brand: 'Avinash Electricals',
        capacity: 'Residential / Commercial',
        warranty: '12 Months',
        highlights: ['Quarterly visits', 'Priority callout', 'Discounted spares'],
        idealFor: 'Societies, shops, offices',
        image: '/images/products/svc-4.jpg',
      },
    ],
  },
];

export const brands = [
  'Luminous',
  'Exide',
  'Amaron',
  'Microtek',
  'Su-Kam',
  'V-Guard',
  'Tata Power Solar',
  'Vikram Solar',
  'Waaree',
  'APC',
  'Havells',
  'Schneider',
  'Anchor',
  'Legrand',
  'Polycab',
  'SF Sonic',
  'Delta',
  'Numeric',
  'Livguard',
  'Okaya',
];

export const testimonials = [
  {
    name: 'Rahul Deshmukh',
    role: 'Homeowner, Panvel',
    quote:
      'Got a 3 kVA inverter with two tubular batteries installed. The team was punctual, neat and explained everything. Backup runs my whole flat for 6 hours.',
    rating: 5,
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Clinic Owner, Kharghar',
    quote:
      'Their online UPS protects my dental chairs perfectly. Zero transfer, no flicker. Service is quick and the staff actually knows their stuff.',
    rating: 5,
  },
  {
    name: 'Imran Sheikh',
    role: 'Society Secretary, New Panvel',
    quote:
      'We signed an AMC for the whole building. Quarterly checks, emergency callouts handled same day. Genuinely reliable electricians.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Homeowner, Kalamboli',
    quote:
      'Installed a 3 kW rooftop solar system. Bill dropped by 70%. They handled the subsidy paperwork and net-metering end to end.',
    rating: 5,
  },
];

export const stats = [
  { label: 'Years in business', value: '40+' },
  { label: 'Happy customers', value: '12,000+' },
  { label: 'Products installed', value: '25,000+' },
  { label: 'Brands stocked', value: '20+' },
];

export const services = [
  {
    icon: 'Zap',
    title: 'Inverter & UPS Installation',
    desc: 'Site survey, load calculation, installation and free demo for every inverter or UPS purchase.',
  },
  {
    icon: 'Sun',
    title: 'Solar Rooftop EPC',
    desc: 'End-to-end solar — design, supply, installation, net-metering and subsidy support.',
  },
  {
    icon: 'Wrench',
    title: 'Wiring & Panel Work',
    desc: 'Residential and commercial wiring, MCB/DB panels, earthing and load balancing.',
  },
  {
    icon: 'ShieldCheck',
    title: 'AMC & Repair',
    desc: 'Annual maintenance contracts and on-site repair for inverters, UPS and batteries.',
  },
  {
    icon: 'BatteryCharging',
    title: 'Battery Testing & Exchange',
    desc: 'Free battery health checkups and exchange offers on old batteries.',
  },
  {
    icon: 'Truck',
    title: 'Doorstep Delivery',
    desc: 'Free local delivery and on-site fitment across Navi Mumbai and Old Panvel.',
  },
];

export const shopInfo = {
  name: 'Avinash Electricals',
  tagline: 'Powering homes & businesses since 1985',
  phone: '+91 98765 43210',
  phoneAlt: '+91 98765 12345',
  email: 'info@avinashelectricals.in',
  address: 'Shop No. 12, Old Panvel Market, Panvel, Navi Mumbai, Maharashtra 410206',
  hours: [
    { day: 'Mon – Sat', time: '9:30 AM – 8:30 PM' },
    { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
  ],
  mapQuery: 'Old Panvel Market, Panvel, Navi Mumbai, Maharashtra 410206',
};
