import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      dashboard: 'Dashboard',
      subscriptions: 'Subscriptions',
      orders: 'Orders',
      profile: 'Profile',
      favorites: 'Favorites',
      logout: 'Logout',

      // Homepage
      heroTitle: 'Premium IPTV Experience',
      heroSubtitle: 'Stream thousands of channels in HD/4K quality with our reliable IPTV service',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      
      // Pricing
      pricingTitle: 'Choose Your Plan',
      pricingSubtitle: 'Select the perfect subscription plan for your needs',
      monthly: 'Monthly',
      quarterly: '3 Months',
      semiAnnual: '6 Months',
      yearly: '1 Year',
      mostPopular: 'Most Popular',
      bestValue: 'Best Value',
      choosePlan: 'Choose Plan',
      
      // Features
      featuresTitle: 'Why Choose Our IPTV?',
      hdQuality: 'HD/4K Quality',
      hdQualityDesc: 'Crystal clear streaming in HD and 4K resolution',
      antiFreeze: 'Anti-Freeze Technology',
      antiFreezeDesc: 'Enjoy uninterrupted streaming with our advanced servers',
      vod: 'Video on Demand',
      vodDesc: 'Access thousands of movies and TV shows instantly',
      support: '24/7 Support',
      supportDesc: 'Get help whenever you need it with our expert team',
      multiDevice: 'Multi-Device Access',
      multiDeviceDesc: 'Watch on TV, phone, tablet, and computer',
      
      // Common
      loading: 'Loading...',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      confirm: 'Confirm',
      
      // Auth
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      name: 'Name',
      forgotPassword: 'Forgot Password?',
      rememberMe: 'Remember me',
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: 'Already have an account?',
      
      // Dashboard
      welcomeBack: 'Welcome back',
      activeSubscriptions: 'Active Subscriptions',
      expiresIn: 'Expires in',
      days: 'days',
      renewNow: 'Renew Now',
      upgradeNow: 'Upgrade Now',
      
      // Footer
      quickLinks: 'Quick Links',
      support: 'Support',
      followUs: 'Follow Us',
      contactUs: 'Contact Us',
      whatsappSupport: 'WhatsApp Support'
    }
  },
  fr: {
    translation: {
      home: 'Accueil',
      about: 'À propos',
      contact: 'Contact',
      login: 'Connexion',
      register: 'S\'inscrire',
      dashboard: 'Tableau de bord',
      subscriptions: 'Abonnements',
      orders: 'Commandes',
      profile: 'Profil',
      favorites: 'Favoris',
      logout: 'Déconnexion',
      
      heroTitle: 'Expérience IPTV Premium',
      heroSubtitle: 'Diffusez des milliers de chaînes en qualité HD/4K avec notre service IPTV fiable',
      getStarted: 'Commencer',
      learnMore: 'En savoir plus',
      
      pricingTitle: 'Choisissez votre plan',
      pricingSubtitle: 'Sélectionnez le plan d\'abonnement parfait pour vos besoins',
      monthly: 'Mensuel',
      quarterly: '3 Mois',
      semiAnnual: '6 Mois',
      yearly: '1 An',
      mostPopular: 'Le plus populaire',
      bestValue: 'Meilleure valeur',
      choosePlan: 'Choisir le plan'
    }
  },
  ar: {
    translation: {
      home: 'الرئيسية',
      about: 'حول',
      contact: 'اتصال',
      login: 'تسجيل دخول',
      register: 'تسجيل',
      dashboard: 'لوحة التحكم',
      subscriptions: 'الاشتراكات',
      orders: 'الطلبات',
      profile: 'الملف الشخصي',
      favorites: 'المفضلة',
      logout: 'تسجيل خروج',
      
      heroTitle: 'تجربة IPTV متميزة',
      heroSubtitle: 'شاهد آلاف القنوات بجودة HD/4K مع خدمة IPTV الموثوقة',
      getStarted: 'البدء',
      learnMore: 'تعلم أكثر',
      
      pricingTitle: 'اختر خطتك',
      pricingSubtitle: 'اختر خطة الاشتراك المثالية لاحتياجاتك',
      monthly: 'شهرية',
      quarterly: '3 أشهر',
      semiAnnual: '6 أشهر',
      yearly: 'سنة',
      mostPopular: 'الأكثر شعبية',
      bestValue: 'أفضل قيمة',
      choosePlan: 'اختر الخطة'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;