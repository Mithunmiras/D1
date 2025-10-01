export const servicePageData = {
  hero: {
    breadcrumbs: [
      { label: 'Home', path: '/' },
      { label: 'Digital Transformation Solutions', path: '/services' }
    ],
    headline: 'Digital Transformation Solutions',
    description: 'Empowering MSMEs with cutting-edge digital solutions that drive growth, efficiency, and competitive advantage. Transform your business with our comprehensive suite of technology services designed for modern enterprises.',
    stats: [
      { number: '500+', label: 'Projects Delivered' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '45', label: 'Days Average Delivery' },
      { number: '150+', label: 'Active Clients' }
    ],
    buttons: [
      { text: 'Start Your Transformation', primary: true, action: 'consultation' },
      { text: 'See How It Works', primary: false, action: 'scroll-process' }
    ]
  },
  coreServices: {
    headline: 'Complete Digital Transformation for Modern Businesses',
    description: 'We deliver end-to-end digital solutions that transform how you do business. From concept to deployment, our expert team ensures your digital infrastructure is robust, scalable, and future-ready.',
    approaches: [
      'Custom solutions tailored to your business needs',
      'Modern technology stack for optimal performance',
      'ROI-focused approach with measurable outcomes',
      'Agile methodology for faster time-to-market',
      'Ongoing support and maintenance included'
    ],
    services: [
      {
        icon: '🌐',
        title: 'Website Development',
        description: 'Responsive, high-performance websites that convert visitors into customers with modern design and seamless UX.'
      },
      {
        icon: '📱',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.'
      },
      {
        icon: '⚙️',
        title: 'Custom CRM Solutions',
        description: 'Streamline your customer relationships with tailored CRM systems designed for your specific business processes.'
      },
      {
        icon: '🎨',
        title: 'Prototype Creation',
        description: 'Rapid prototyping to validate ideas quickly, reduce development risks, and ensure product-market fit.'
      }
    ]
  },
  saasProducts: {
    headline: 'Our SaaS Products',
    subtitle: 'Industry-specific solutions that deliver immediate value',
    products: [
      {
        tag: 'EDUTECH SAAS',
        title: 'Learning Management System',
        videoThumbnail: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
        capabilities: [
          'Student & Teacher Management',
          'Course Creation & Delivery',
          'Assessment & Grading',
          'Real-time Analytics Dashboard',
          'Mobile Learning Support'
        ],
        stats: [
          { value: '150+', label: 'Clients' },
          { value: '25K+', label: 'Daily Users' }
        ]
      },
      {
        tag: 'HEALTHCARE SAAS',
        title: 'Healthcare Management Platform',
        videoThumbnail: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
        capabilities: [
          'Patient Records Management',
          'Appointment Scheduling',
          'Telemedicine Integration',
          'Billing & Insurance Processing',
          'HIPAA-Compliant Security'
        ],
        stats: [
          { value: '80+', label: 'Clients' },
          { value: '15K+', label: 'Daily Users' }
        ]
      },
      {
        tag: 'RETAIL SAAS',
        title: 'E-Commerce & Inventory Platform',
        videoThumbnail: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
        capabilities: [
          'Multi-channel Sales Management',
          'Real-time Inventory Tracking',
          'Automated Order Processing',
          'Customer Analytics',
          'Payment Gateway Integration'
        ],
        stats: [
          { value: '200+', label: 'Clients' },
          { value: '40K+', label: 'Daily Users' }
        ]
      },
      {
        tag: 'FINTECH SAAS',
        title: 'Financial Management Suite',
        videoThumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
        capabilities: [
          'Automated Accounting',
          'Invoice & Expense Management',
          'Financial Reporting',
          'Tax Compliance Tools',
          'Bank Reconciliation'
        ],
        stats: [
          { value: '120+', label: 'Clients' },
          { value: '18K+', label: 'Daily Users' }
        ]
      }
    ]
  },
  process: {
    headline: 'How We Work',
    subtitle: 'Simple, proven approach to digital transformation',
    steps: [
      {
        icon: '🔍',
        title: 'Discover',
        description: 'Understanding your business needs and goals'
      },
      {
        icon: '✏️',
        title: 'Design',
        description: 'Creating intuitive and engaging user experiences'
      },
      {
        icon: '⚡',
        title: 'Develop',
        description: 'Building robust and scalable solutions'
      },
      {
        icon: '🚀',
        title: 'Deploy',
        description: 'Launching and optimizing for success'
      }
    ]
  },
  cta: {
    question: 'Ready to Transform Your Business?',
    description: 'Join hundreds of businesses that have already started their digital transformation journey with us.',
    buttonText: 'Start Your Transformation',
    secondaryButtonText: 'Schedule a Free Consultation'
  }
};

export const servicesDropdownMenu = [
  {
    id: 'digital-transformation',
    label: 'Digital Transformation',
    path: '/services'
  },
  {
    id: 'growth-marketing',
    label: 'Growth Marketing & Automation',
    path: '/services/growth-marketing'
  }
];
