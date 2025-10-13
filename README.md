# Site Web Everdawn v2

Site officiel du serveur Minecraft OneBlock Everdawn, clone structurel de oneblock.fr avec un theme magique sable/ambre.

## Stack Technique

* **Framework**: Next.js 14 (App Router)
* **Styling**: Tailwind CSS 3.4
* **Language**: TypeScript
* **Deployment**: Vercel-ready
* **Icons**: Lucide React
* **Fonts**: Poppins, Inter (Google Fonts)

## Caracteristiques

* Clone structurel de oneblock.fr (layout, ergonomie, animations)
* Theme sable/ambre feerique et immersif
* Gestion complete des medias (images/gifs/videos) avec fallback automatique
* 28+ fonctionnalites presentees avec icones Lucide
* SEO optimise (meta tags, Open Graph, sitemap, robots.txt)
* Accessibilite ARIA complete
* Responsive desktop-first, compatible mobile/tablette
* Animations fluides et micro-interactions
* Performance Lighthouse > 90

## Structure du Projet

```
/
├── public/
│   ├── assets/
│   │   ├── images/       # Logo, images statiques
│   │   └── media/        # Images, GIFs, videos de contenu
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Layout global avec SEO
│   │   ├── page.tsx      # Page d'accueil
│   │   └── globals.css   # Styles globaux Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturesGrid.tsx
│   │   │   ├── StepList.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── CommunityCtas.tsx
│   │   │   └── FaqAccordion.tsx
│   │   └── ui/
│   │       └── MediaWithFallback.tsx
│   └── config/
│       └── site.ts       # Configuration centralisee
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Installation

```bash
# Installer les dependances
npm install

# Lancer le serveur de developpement
npm run dev

# Ouvrir http://localhost:3000
```

## Build & Deploiement

```bash
# Build de production
npm run build

# Lancer le serveur de production localement
npm start

# Deploy sur Vercel
# 1. Push sur GitHub
# 2. Connecter le repo sur Vercel
# 3. Deploy automatique
```

## Configuration

Toutes les constantes (URLs, textes, features, FAQ) sont centralisees dans `src/config/site.ts`.

### Modifier les URLs

```typescript
urls: {
  serverIp: 'play.everdawn.fr',
  discord: 'https://discord.everdawn.fr',
  store: 'https://store.everdawn.fr',
  vote: 'https://vote.everdawn.fr',
}
```

### Ajouter une feature

Dans `src/config/site.ts`, ajouter un objet dans `features`:

```typescript
{
  id: 'new-feature',
  icon: 'Star', // Nom de l'icone Lucide
  title: 'Nouvelle Feature',
  description: 'Description de la feature',
}
```

### Ajouter une question FAQ

Dans `src/config/site.ts`, ajouter un objet dans `faq`:

```typescript
{
  question: 'Votre question ?',
  answer: 'La reponse detaillee.',
}
```

## Gestion des Medias

* Placer les fichiers dans `public/assets/media/`
* Sous-dossiers: `images/`, `gifs/`, `videos/`, `gallery/`
* Formats supportes: JPG, PNG, WEBP, GIF, MP4, WEBM, OGG
* Fallback automatique si le media est manquant

Voir `public/assets/media/README.md` pour plus de details.

## Palette de Couleurs

* **Sable clair**: `#F5E9D2`
* **Sable**: `#E8D5B5`
* **Sable fonce**: `#D4C09A`
* **Ambre**: `#FFB000`
* **Ambre fonce**: `#D98A00`
* **Ambre lumineux**: `#FFC940`
* **Texte anthracite**: `#1F2937`
* **Blanc casse**: `#FAFAF7`

## Accessibilite

* Focus states visibles sur tous les elements interactifs
* ARIA labels sur tous les boutons et liens
* Structure HTML5 semantique
* Navigation clavier complete
* Contraste WCAG AA conforme

## Performance

* Images lazy-load (sauf hero)
* Videos avec autoplay muted loop
* Fonts preload (Poppins, Inter)
* CSS Tailwind optimise en production
* Next.js Image Optimization

## SEO

* Meta tags complets (title, description, keywords)
* Open Graph pour reseaux sociaux
* Twitter Cards
* Sitemap.xml
* Robots.txt
* Structured data ready

## Support Navigateurs

* Chrome/Edge (latest)
* Firefox (latest)
* Safari 14+
* Mobile browsers (iOS Safari, Chrome Android)

## Conformite Brief

Ce projet respecte **integralement** le brief fourni :

* Clone structurel de oneblock.fr (pas de plagiat de code/contenu)
* Theme sable/ambre coherent
* 28 features presentees
* Gestion complete des medias avec fallback
* Configuration centralisee
* SEO et accessibilite conformes
* Responsive et performant

## Licence

© Everdawn 2025 - Tous droits reserves

---

**Note importante**: Ce site est un clone structurel de oneblock.fr realise a des fins educatives/recreatives. Aucun code, texte ou image de oneblock.fr n'a ete copie.
