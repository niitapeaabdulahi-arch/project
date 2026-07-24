// Branding, navigation, and newsletter

export const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'Agents', to: '/agents' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Properties', to: '/properties' },
      { label: 'Services', to: '/services' },
      { label: 'Agents', to: '/agents' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', to: '/contact' },
      { label: 'Privacy Policy', to: '/about' },
      { label: 'Terms of Service', to: '/about' },
    ],
  },
]

export const footerSocialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
]

export const siteInfo = {
  brand: 'Estate',
  description:
    'Head Office: Mogadishu, Somalia. Phone: +252 612762407. Email: info@estate.com. We help you find the right home in Mogadishu with trusted agents and quality listings.',
  copyright: `© ${new Date().getFullYear()} Estate. All rights reserved.`,
  ctaLabel: 'Contact Us',
  ctaTo: '/contact',
}

export const newsletterContent = {
  title: 'Stay Ahead of the Mogadishu Market',
  subtitle:
    'Get exclusive listings, pricing tips, and Somalia market news delivered to your inbox.',
  placeholder: 'Enter your email',
  buttonLabel: 'Subscribe',
}
