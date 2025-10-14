/**
 * Configuration centrale du site Everdawn
 * Toutes les constantes, URLs, textes, et données structurées
 */

export const siteConfig = {
  name: 'Everdawn',
  slogan: "L'aventure OneBlock magique et féerique",
  description: "Rejoignez Everdawn, le serveur Minecraft OneBlock immersif où la magie rencontre l'aventure. Explorez, construisez, et vivez une expérience unique dans un univers enchanté.",
  
  // URLs principales
  urls: {
    serverIp: 'play.everdawn.fr',
    discord: 'https://discord.everdawn.fr',
    store: 'https://store.everdawn.fr',
    vote: 'https://vote.everdawn.fr',
    wiki: 'https://wiki.everdawn.fr',
  },

  // Navigation header
  navigation: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Communauté', href: '#communaute' },
    { label: 'Boutique', href: '#boutique' },
    { label: 'Vote', href: '#vote' },
  ],

  // Hero section
  hero: {
    title: "Bienvenue dans l'univers d'Everdawn",
    subtitle: 'Un serveur OneBlock unique où chaque bloc révèle une aventure magique, féerique et immersive.',
    ctaPrimary: 'Rejoindre le serveur',
    ctaSecondary: 'Rejoindre le Discord',
    backgroundMedia: '/assets/media/hero.jpg', // Peut etre .jpg, .gif, ou .mp4
  },

  // Points clés (ruban d'icônes)
  highlights: [
    { icon: 'Sparkles', text: 'Magie et féerie' },
    { icon: 'Users', text: 'Communauté active' },
    { icon: 'Trophy', text: 'Classements' },
    { icon: 'Gift', text: 'Récompenses quotidiennes' },
    { icon: 'Shield', text: 'Staff dévoué' },
    { icon: 'Zap', text: 'Performances optimales' },
  ],

  // Fonctionnalités principales (25+ items)
  features: [
    {
      id: 'resource-pack',
      icon: 'Package',
      title: 'Resource Pack',
      description: "Un resource pack sur mesure qui sublime l'univers magique d'Everdawn avec des textures enchanteresses.",
    },
    {
      id: 'leaderboards',
      icon: 'Trophy',
      title: 'Classements',
      description: 'Affrontez les meilleurs joueurs et gravissez les échelons du classement mondial.',
    },
    {
      id: 'rank-effects',
      icon: 'Sparkles',
      title: 'Effets de rang',
      description: 'Des effets visuels uniques et personnalisables selon votre rang.',
    },
    {
      id: 'island-panel',
      icon: 'LayoutGrid',
      title: "Panneau d'île",
      description: 'Gérez votre île facilement avec une interface intuitive et complète.',
    },
    {
      id: 'welcome-message',
      icon: 'MessageCircle',
      title: 'Message de bienvenue',
      description: "Personnalisez le message d'accueil de votre île pour impressionner vos visiteurs.",
    },
    {
      id: 'player-icons',
      icon: 'User',
      title: 'Icônes de joueur',
      description: "Choisissez parmi une large gamme d'avatars pour personnaliser votre profil.",
    },
    {
      id: 'message-colors',
      icon: 'Palette',
      title: 'Couleurs de messages',
      description: 'Exprimez-vous avec style grâce aux couleurs de messages personnalisables.',
    },
    {
      id: 'discord-bot',
      icon: 'Bot',
      title: 'Bot Discord',
      description: 'Intégration complète avec Discord pour suivre votre progression en temps réel.',
    },
    {
      id: 'custom-motd',
      icon: 'FileText',
      title: 'MOTD personnalisé',
      description: 'Un message du jour dynamique et immersif qui évolue avec les événements du serveur.',
    },
    {
      id: 'generator',
      icon: 'Cpu',
      title: 'Générateur',
      description: 'Améliorez votre générateur de bloc pour débloquer de nouvelles ressources rares.',
    },
    {
      id: 'nick-colors',
      icon: 'Type',
      title: 'Couleurs de pseudo',
      description: 'Distinguez-vous avec un pseudo coloré et des gradients enchantés.',
    },
    {
      id: 'emoji-chat',
      icon: 'Smile',
      title: 'Emojis dans le chat',
      description: 'Utilisez des emojis personnalisés pour enrichir vos conversations.',
    },
    {
      id: 'daily-chest',
      icon: 'Gift',
      title: 'Coffre quotidien',
      description: 'Recevez chaque jour des récompenses aléatoires pour votre fidélité.',
    },
    {
      id: 'upgrades',
      icon: 'TrendingUp',
      title: 'Améliorations',
      description: 'Débloquez des améliorations puissantes pour votre île et vos outils.',
    },
    {
      id: 'elevators',
      icon: 'ArrowUpDown',
      title: 'Ascenseurs',
      description: 'Déplacez-vous rapidement entre les étages grâce aux ascenseurs magiques.',
    },
    {
      id: 'animations',
      icon: 'Film',
      title: 'Animations',
      description: 'Des animations fluides et enchanteresses pour une expérience immersive.',
    },
    {
      id: 'cinematic',
      icon: 'Video',
      title: 'Cinématiques',
      description: 'Des séquences cinématiques époustouflantes pour les événements majeurs.',
    },
    {
      id: 'warp-list',
      icon: 'MapPin',
      title: 'Liste de warps',
      description: 'Téléportez-vous instantanément vers les lieux clés du serveur.',
    },
    {
      id: 'reports',
      icon: 'Flag',
      title: 'Signalements',
      description: 'Un système de signalement efficace pour maintenir une communauté saine.',
    },
    {
      id: 'chest-shop',
      icon: 'ShoppingCart',
      title: 'Boutique coffres',
      description: "Créez vos propres boutiques et échangez avec d'autres joueurs.",
    },
    {
      id: 'dungeons',
      icon: 'Swords',
      title: 'Donjons',
      description: 'Explorez des donjons générés procéduralement remplis de trésors et de dangers.',
    },
    {
      id: 'clans',
      icon: 'Users',
      title: 'Clans',
      description: "Rejoignez ou créez un clan pour partager l'aventure avec vos alliés.",
    },
    {
      id: 'daily',
      icon: 'Calendar',
      title: 'Quêtes quotidiennes',
      description: 'Complétez des défis quotidiens pour gagner des récompenses exclusives.',
    },
    {
      id: 'homes',
      icon: 'Home',
      title: 'Points de retour',
      description: 'Définissez plusieurs points de retour pour vous téléporter instantanément.',
    },
    {
      id: 'cosmetics',
      icon: 'Shirt',
      title: 'Cosmétiques',
      description: 'Débloquez des cosmétiques exclusifs pour personnaliser votre personnage.',
    },
    {
      id: 'chat-game',
      icon: 'MessageSquare',
      title: 'Jeux de chat',
      description: 'Participez à des mini-jeux dans le chat pour gagner des récompenses.',
    },
    {
      id: 'likes',
      icon: 'Heart',
      title: 'Système de likes',
      description: 'Soutenez vos joueurs préférés et leur île avec un système de likes.',
    },
  ],

  // Étapes pour rejoindre
  steps: [
    {
      number: 1,
      title: 'Lancez Minecraft',
      description: "Ouvrez votre launcher Minecraft et assurez-vous d'utiliser la version Java 1.20+.",
      icon: 'Play',
    },
    {
      number: 2,
      title: 'Ajoutez le serveur',
      description: "Dans le menu multijoueur, ajoutez le serveur avec l'adresse play.everdawn.fr.",
      icon: 'Server',
    },
    {
      number: 3,
      title: "Rejoignez l'aventure",
      description: "Connectez-vous et laissez la magie d'Everdawn vous transporter dans un monde féerique.",
      icon: 'Sparkles',
    },
  ],

  // FAQ
  faq: [
    {
      question: 'Quelle version de Minecraft est requise ?',
      answer: "Everdawn fonctionne sur Minecraft Java Edition 1.20 et versions ultérieures. Nous recommandons d'utiliser la dernière version stable pour une expérience optimale.",
    },
    {
      question: 'Le serveur est-il gratuit ?',
      answer: 'Oui, Everdawn est entièrement gratuit. Vous pouvez acheter des améliorations cosmétiques dans la boutique pour soutenir le serveur, mais toutes les fonctionnalités principales sont accessibles gratuitement.',
    },
    {
      question: 'Comment puis-je protéger mon île ?',
      answer: "Votre île est automatiquement protégée. Vous pouvez gérer les permissions d'accès via le panneau d'île et inviter des joueurs de confiance à vous rejoindre.",
    },
    {
      question: 'Y a-t-il des événements réguliers ?',
      answer: 'Oui ! Nous organisons des événements hebdomadaires avec des récompenses exclusives, des donjons spéciaux, et des défis communautaires.',
    },
    {
      question: 'Comment puis-je contacter le staff ?',
      answer: 'Vous pouvez contacter notre équipe directement sur le serveur via /staff, ou rejoindre notre Discord pour une assistance rapide.',
    },
  ],

  // Footer
  footer: {
    description: 'Everdawn - Le serveur OneBlock magique et féerique où chaque bloc raconte une histoire.',
    copyright: '© Everdawn 2025',
    links: {
      navigation: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Fonctionnalités', href: '#fonctionnalites' },
        { label: 'Communauté', href: '#communaute' },
      ],
      legal: [
        { label: "Conditions d'utilisation", href: '/terms' },
        { label: 'Politique de confidentialité', href: '/privacy' },
      ],
      social: [
        { label: 'Discord', href: 'https://discord.everdawn.fr' },
        { label: 'Boutique', href: 'https://store.everdawn.fr' },
        { label: 'Vote', href: 'https://vote.everdawn.fr' },
      ],
    },
  },

  // Chemins médias par défaut
  media: {
    defaultHero: '/assets/media/hero.jpg',
    defaultFeatureImage: '/assets/media/feature-placeholder.jpg',
    defaultGalleryImages: [
      '/assets/media/gallery/img1.jpg',
      '/assets/media/gallery/img2.jpg',
      '/assets/media/gallery/img3.jpg',
    ],
    logo: '/assets/images/logo.png',
  },
};

export type SiteConfig = typeof siteConfig;
