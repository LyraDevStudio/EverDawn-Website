/**
 * Configuration centrale du site Everdawn
 * Toutes les constantes, URLs, textes, et données structurées
 */

export const siteConfig = {
  name: 'Everdawn',
  slogan: 'L\'aventure OneBlock magique et feerique',
  description: 'Rejoignez Everdawn, le serveur Minecraft OneBlock immersif ou la magie rencontre l\'aventure. Explorez, construisez, et vivez une experience unique dans un univers enchante.',
  
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
    { label: 'Fonctionnalites', href: '#fonctionnalites' },
    { label: 'Communaute', href: '#communaute' },
    { label: 'Boutique', href: '#boutique' },
    { label: 'Vote', href: '#vote' },
  ],

  // Hero section
  hero: {
    title: 'Bienvenue dans l\'univers d\'Everdawn',
    subtitle: 'Un serveur OneBlock unique ou chaque bloc revele une aventure magique, feerique et immersive.',
    ctaPrimary: 'Rejoindre le serveur',
    ctaSecondary: 'Rejoindre le Discord',
    backgroundMedia: '/assets/media/hero.jpg', // Peut etre .jpg, .gif, ou .mp4
  },

  // Points cles (ruban d'icones)
  highlights: [
    { icon: 'Sparkles', text: 'Magie et feerie' },
    { icon: 'Users', text: 'Communaute active' },
    { icon: 'Trophy', text: 'Classements' },
    { icon: 'Gift', text: 'Recompenses quotidiennes' },
    { icon: 'Shield', text: 'Staff devoue' },
    { icon: 'Zap', text: 'Performances optimales' },
  ],

  // Fonctionnalites principales (25+ items)
  features: [
    {
      id: 'resource-pack',
      icon: 'Package',
      title: 'Resource Pack',
      description: 'Un resource pack sur mesure qui sublime l\'univers magique d\'Everdawn avec des textures enchanteresses.',
    },
    {
      id: 'leaderboards',
      icon: 'Trophy',
      title: 'Classements',
      description: 'Affrontez les meilleurs joueurs et gravissez les echelons du classement mondial.',
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
      title: 'Panneau d\'ile',
      description: 'Gerez votre ile facilement avec une interface intuitive et complete.',
    },
    {
      id: 'welcome-message',
      icon: 'MessageCircle',
      title: 'Message de bienvenue',
      description: 'Personnalisez le message d\'accueil de votre ile pour impressionner vos visiteurs.',
    },
    {
      id: 'player-icons',
      icon: 'User',
      title: 'Icones de joueur',
      description: 'Choisissez parmi une large gamme d\'avatars pour personnaliser votre profil.',
    },
    {
      id: 'staff-chat',
      icon: 'Shield',
      title: 'Chat staff',
      description: 'Une equipe reactive et bienveillante, toujours a l\'ecoute de la communaute.',
    },
    {
      id: 'message-colors',
      icon: 'Palette',
      title: 'Couleurs de messages',
      description: 'Exprimez-vous avec style grace aux couleurs de messages personnalisables.',
    },
    {
      id: 'discord-bot',
      icon: 'Bot',
      title: 'Bot Discord',
      description: 'Integration complete avec Discord pour suivre votre progression en temps reel.',
    },
    {
      id: 'custom-motd',
      icon: 'FileText',
      title: 'MOTD personnalise',
      description: 'Un message du jour dynamique et immersi qui evolue avec les evenements du serveur.',
    },
    {
      id: 'generator',
      icon: 'Cpu',
      title: 'Generateur',
      description: 'Ameliorez votre generateur de bloc pour debloquer de nouvelles ressources rares.',
    },
    {
      id: 'nick-colors',
      icon: 'Type',
      title: 'Couleurs de pseudo',
      description: 'Distinguez-vous avec un pseudo colore et des gradients enchantes.',
    },
    {
      id: 'emoji-chat',
      icon: 'Smile',
      title: 'Emojis dans le chat',
      description: 'Utilisez des emojis personnalises pour enrichir vos conversations.',
    },
    {
      id: 'daily-chest',
      icon: 'Gift',
      title: 'Coffre quotidien',
      description: 'Recevez chaque jour des recompenses aleatoires pour votre fidelite.',
    },
    {
      id: 'upgrades',
      icon: 'TrendingUp',
      title: 'Ameliorations',
      description: 'Debloquez des ameliorations puissantes pour votre ile et vos outils.',
    },
    {
      id: 'elevators',
      icon: 'ArrowUpDown',
      title: 'Ascenseurs',
      description: 'Deplacez-vous rapidement entre les etages grace aux ascenseurs magiques.',
    },
    {
      id: 'animations',
      icon: 'Film',
      title: 'Animations',
      description: 'Des animations fluides et enchanteresses pour une experience immersive.',
    },
    {
      id: 'cinematic',
      icon: 'Video',
      title: 'Cinematiques',
      description: 'Des sequences cinematiques epoustouflantes pour les evenements majeurs.',
    },
    {
      id: 'warp-list',
      icon: 'MapPin',
      title: 'Liste de warps',
      description: 'Teleportez-vous instantanement vers les lieux cles du serveur.',
    },
    {
      id: 'reports',
      icon: 'Flag',
      title: 'Signalements',
      description: 'Un systeme de signalement efficace pour maintenir une communaute saine.',
    },
    {
      id: 'chest-shop',
      icon: 'ShoppingCart',
      title: 'Boutique coffres',
      description: 'Creez vos propres boutiques et echangez avec d\'autres joueurs.',
    },
    {
      id: 'dungeons',
      icon: 'Swords',
      title: 'Donjons',
      description: 'Explorez des donjons generes proceduralement remplis de tresors et de dangers.',
    },
    {
      id: 'clans',
      icon: 'Users',
      title: 'Clans',
      description: 'Rejoignez ou creez un clan pour partager l\'aventure avec vos allies.',
    },
    {
      id: 'daily',
      icon: 'Calendar',
      title: 'Quetes quotidiennes',
      description: 'Completez des defis quotidiens pour gagner des recompenses exclusives.',
    },
    {
      id: 'homes',
      icon: 'Home',
      title: 'Points de retour',
      description: 'Definissez plusieurs points de retour pour vous teleporter instantanement.',
    },
    {
      id: 'cosmetics',
      icon: 'Shirt',
      title: 'Cosmetiques',
      description: 'Debloquez des cosmetiques exclusifs pour personnaliser votre personnage.',
    },
    {
      id: 'chat-game',
      icon: 'MessageSquare',
      title: 'Jeux de chat',
      description: 'Participez a des mini-jeux dans le chat pour gagner des recompenses.',
    },
    {
      id: 'likes',
      icon: 'Heart',
      title: 'Systeme de likes',
      description: 'Soutenez vos joueurs preferes et leur ile avec un systeme de likes.',
    },
  ],

  // Etapes pour rejoindre
  steps: [
    {
      number: 1,
      title: 'Lancez Minecraft',
      description: 'Ouvrez votre launcher Minecraft et assurez-vous d\'utiliser la version Java 1.20+.',
      icon: 'Play',
    },
    {
      number: 2,
      title: 'Ajoutez le serveur',
      description: 'Dans le menu multijoueur, ajoutez le serveur avec l\'adresse play.everdawn.fr.',
      icon: 'Server',
    },
    {
      number: 3,
      title: 'Rejoignez l\'aventure',
      description: 'Connectez-vous et laissez la magie d\'Everdawn vous transporter dans un monde feerique.',
      icon: 'Sparkles',
    },
  ],

  // FAQ
  faq: [
    {
      question: 'Quelle version de Minecraft est requise ?',
      answer: 'Everdawn fonctionne sur Minecraft Java Edition 1.20 et versions ulterieures. Nous recommandons d\'utiliser la derniere version stable pour une experience optimale.',
    },
    {
      question: 'Le serveur est-il gratuit ?',
      answer: 'Oui, Everdawn est entierement gratuit. Vous pouvez acheter des ameliorations cosmetiques dans la boutique pour soutenir le serveur, mais toutes les fonctionnalites principales sont accessibles gratuitement.',
    },
    {
      question: 'Comment puis-je proteger mon ile ?',
      answer: 'Votre ile est automatiquement protegee. Vous pouvez gerer les permissions d\'acces via le panneau d\'ile et inviter des joueurs de confiance a vous rejoindre.',
    },
    {
      question: 'Y a-t-il des evenements reguliers ?',
      answer: 'Oui ! Nous organisons des evenements hebdomadaires avec des recompenses exclusives, des donjons speciaux, et des defis communautaires.',
    },
    {
      question: 'Comment puis-je contacter le staff ?',
      answer: 'Vous pouvez contacter notre equipe directement sur le serveur via /staff, ou rejoindre notre Discord pour une assistance rapide.',
    },
  ],

  // Footer
  footer: {
    description: 'Everdawn - Le serveur OneBlock magique et feerique ou chaque bloc raconte une histoire.',
    copyright: '© Everdawn 2025',
    links: {
      navigation: [
        { label: 'Accueil', href: '#accueil' },
        { label: 'Fonctionnalites', href: '#fonctionnalites' },
        { label: 'Communaute', href: '#communaute' },
      ],
      legal: [
        { label: 'Conditions d\'utilisation', href: '/terms' },
        { label: 'Politique de confidentialite', href: '/privacy' },
      ],
      social: [
        { label: 'Discord', href: 'https://discord.everdawn.fr' },
        { label: 'Boutique', href: 'https://store.everdawn.fr' },
        { label: 'Vote', href: 'https://vote.everdawn.fr' },
      ],
    },
  },

  // Chemins medias par defaut
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
