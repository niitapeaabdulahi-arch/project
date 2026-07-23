// Branding, navigation, and newsletter

export const navigationLinks = [
  { label: 'Hoyga', to: '/' },
  { label: 'Guryaha', to: '/properties' },
  { label: 'Adeegyada', to: '/services' },
  { label: 'Wakiillada', to: '/agents' },
  { label: 'Blog', to: '/blog' },
  { label: 'Nagu Saabsan', to: '/about' },
  { label: 'Nala Soo Xiriir', to: '/contact' },
]

export const footerLinks = [
  {
    title: 'Sahamin',
    links: [
      { label: 'Hoyga', to: '/' },
      { label: 'Guryaha', to: '/properties' },
      { label: 'Adeegyada', to: '/services' },
      { label: 'Wakiillada', to: '/agents' },
    ],
  },
  {
    title: 'Shirkadda',
    links: [
      { label: 'Nagu Saabsan', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Nala Soo Xiriir', to: '/contact' },
    ],
  },
  {
    title: 'Taageero',
    links: [
      { label: 'Su\'aalaha Badanka', to: '/contact' },
      { label: 'Qaanuunka Asturnaanta', to: '/about' },
      { label: 'Shuruudaha Adeegga', to: '/about' },
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
    'Xafiiska Weyn: Muqdisho, Soomaaliya. Telefoon: +252 612762407. Email: niitapeaabdulahi@gmail.com. Waxaanu kaa caawinnaa inaad hesho guriga ku habboon Muqdisho, wakiillo la aamino iyo liisas tayo sare leh.',
  copyright: `© ${new Date().getFullYear()} Estate. Xuquuqda oo dhan waa la xafiday.`,
  ctaLabel: 'Nala Soo Xiriir',
  ctaTo: '/contact',
}

export const newsletterContent = {
  title: 'La Soco Suuqa Guryaha ee Muqdisho',
  subtitle:
    'Hel liisas gaar ah, talooyin qiimo leh, iyo wararka suuqa Soomaaliya ee emailkaaga.',
  placeholder: 'Geli emailkaaga',
  buttonLabel: 'Isdiiwaangeli',
}
