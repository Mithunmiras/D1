export const LANDING_PAGE_SECTIONS = [
  {
    id: 'hero',
    title: 'Home',
    component: 'HeroSection',
    className: 'min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700'
  },
  {
    id: 'brands',
    title: 'Trusted Brands',
    component: 'BrandsSection',
    className: 'py-20 bg-gray-50'
  },
  {
    id: 'features',
    title: 'Features',
    component: 'FeaturesSection',
    className: 'py-20 bg-white'
  },
  {
    id: 'about',
    title: 'About',
    component: 'AboutSection',
    className: 'py-20 bg-gray-50'
  },
  {
    id: 'blog',
    title: 'Blog',
    component: 'BlogSection',
    className: 'py-20 bg-white'
  },
  {
    id: 'cta',
    title: 'Get Started',
    component: 'CallToAction',
    className: 'py-20 bg-gradient-to-r from-blue-600 to-indigo-700'
  },
  {
    id: 'contact',
    title: 'Contact',
    component: 'ContactSection',
    className: 'py-20 bg-gray-50'
  }
];

export const HERO_CONTENT = {
  title: "Transform Your Digital Presence",
  subtitle: "We help businesses grow by creating stunning websites and powerful digital solutions.",
  buttonText: "Get Started"
};