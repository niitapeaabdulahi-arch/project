// Agents, services, stats, testimonials, and blog

export const agents = [
  {
    id: 1,
    name: 'Ayaan Warsame',
    role: 'Senior Real Estate Agent',
    email: 'niitapeaabdulahi@gmail.com',
    phone: '+252 612762407',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
      { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    ],
  },
  {
    id: 2,
    name: 'Guuleed Samatar',
    role: 'Luxury Homes Specialist',
    email: 'niitapeaabdulahi@gmail.com',
    phone: '+252 612762407',
    image: 'https://images.unsplash.com/photo-1522529599109-9892c3d4c2e6?w=600&q=80',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
      { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    ],
  },
  {
    id: 3,
    name: 'Hodan Rooble',
    role: 'Residential Sales Agent',
    email: 'niitapeaabdulahi@gmail.com',
    phone: '+252 612762407',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&q=80',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
      { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    ],
  },
  {
    id: 4,
    name: 'Libaan Geedi',
    role: 'Commercial Property Advisor',
    email: 'niitapeaabdulahi@gmail.com',
    phone: '+252 612762407',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&q=80',
    socialLinks: [
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
      { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    ],
  },
]

export const services = [
  {
    id: 1,
    title: 'Home Buying',
    description:
      'Expert guidance through every step of purchasing your dream home or investment property.',
    icon: 'home',
  },
  {
    id: 2,
    title: 'Home Selling',
    description:
      'Strategic marketing and negotiation to sell your property at the best market value.',
    icon: 'key',
  },
  {
    id: 3,
    title: 'Property Rentals',
    description:
      'Find trusted tenants or the right rental home with our reliable leasing services.',
    icon: 'clipboard',
  },
  {
    id: 4,
    title: 'Property Management',
    description:
      'Full management including maintenance, tenant communication, and financial reporting.',
    icon: 'settings',
  },
  {
    id: 5,
    title: 'Investment Consulting',
    description:
      'Data-driven advice to build and grow a profitable real estate portfolio.',
    icon: 'trending',
  },
  {
    id: 6,
    title: 'Property Valuation',
    description:
      'Accurate market valuations so you can make informed buy or sell decisions.',
    icon: 'dollar',
  },
]

export const whyChooseUs = [
  {
    id: 1,
    title: 'Trusted Expertise',
    description:
      'Deep knowledge of the Mogadishu market and clear results for buyers and sellers across Somalia.',
    icon: 'shield',
  },
  {
    id: 2,
    title: 'Curated Premium Listings',
    description:
      'Carefully selected homes and spaces in Mogadishu that meet high standards of quality and design.',
    icon: 'star',
  },
  {
    id: 3,
    title: 'Personal Service',
    description:
      'Dedicated agents who guide you with clarity from the first viewing to closing day.',
    icon: 'users',
  },
  {
    id: 4,
    title: 'Seamless Experience',
    description:
      'Modern tools and transparent communication make every step simple and confident.',
    icon: 'zap',
  },
]

export const statistics = [
  { value: '2,500+', label: 'Properties Listed' },
  { value: '1,800+', label: 'Happy Clients' },
  { value: '150+', label: 'Expert Agents' },
  { value: '25+', label: 'Years of Experience' },
]

export const testimonials = [
  {
    id: 1,
    quote:
      'The team made buying our first home feel easy. Professional, responsive, and genuinely caring.',
    name: 'Ubax Xirsi',
    role: 'Home Buyer',
    avatar: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'We sold our villa above asking price in two weeks. Outstanding market knowledge.',
    name: 'Samatar Ducaale',
    role: 'Home Seller',
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Their rental service found us quality tenants quickly. Property management has been excellent.',
    name: 'Canab Guuleed',
    role: 'Investor',
    avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&q=80',
    rating: 4,
  },
]

export const blogs = [
  {
    id: 1,
    title: '10 Tips for Home Buyers in Mogadishu',
    excerpt:
      'Essential advice to help you navigate the home buying process in Somalia with confidence.',
    date: 'March 12, 2026',
    author: 'Ayaan Warsame',
    category: 'Buying Guide',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    to: '/blog',
  },
  {
    id: 2,
    title: 'How to Prepare Your Home to Sell Fast',
    excerpt:
      'Simple ways to make your Mogadishu property more attractive and draw serious buyers.',
    date: 'March 5, 2026',
    author: 'Guuleed Samatar',
    category: 'Selling Tips',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    to: '/blog',
  },
  {
    id: 3,
    title: 'Somalia Real Estate Market Trends 2026',
    excerpt:
      'See the latest shifts in the Mogadishu housing market and what they mean for buyers and investors.',
    date: 'February 28, 2026',
    author: 'Hodan Rooble',
    category: 'Market News',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    to: '/blog',
  },
  {
    id: 4,
    title: 'Investing in Rental Properties in Mogadishu',
    excerpt:
      'Key factors to consider before adding rental homes to your investment portfolio in Somalia.',
    date: 'February 18, 2026',
    author: 'Libaan Geedi',
    category: 'Investment',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    to: '/blog',
  },
]
