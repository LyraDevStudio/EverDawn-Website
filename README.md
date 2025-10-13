# EverDawn - Site Web Officiel (v2)

Site web inspiré d'oneblock.fr pour le serveur Minecraft OneBlock Fantasy **EverDawn**.

## Description

Site statique moderne avec un design long-scroll inspiré d'oneblock.fr, adapté au thème fantasy d'EverDawn. Comprend des animations au scroll, des boutons "candy" stylisés, et une navigation glassmorphism.

**Serveur:** `mc.everdawn.fr` | **Version:** Minecraft 1.21.8

---

## Caractéristiques

### Design
- **Style oneblock.fr** avec sections longues (100vh, 150vh)
- **Navigation sticky** avec effet glassmorphism
- **Boutons candy** avec décorations arrondies
- **Animations scroll** avec IntersectionObserver
- **Thème fantasy** : violet, bleu ciel, or pastel
- **Hero fullscreen** avec placeholder vidéo
- **Responsive** : desktop-first, mobile-friendly

### Sections
1. **Hero** - Logo animé, IP copiable, player count badge
2. **About** - Texte + icônes plateformes + carte "Comment rejoindre"
3. **Stats** - 3 statistiques dans des badges rotatifs
4. **Features** - Grille des 28 fonctionnalités
5. **Discord** - Grande carte promo avec CTA
6. **Bottom CTA** - Boutons finaux Copy IP + Discord
7. **Footer** - Liens organisés en colonnes

---

## Installation

### Méthode 1: Ouverture directe
```bash
# Ouvrir simplement index.html
open index.html
```

### Méthode 2: Serveur local (recommandé)
```bash
# Python 3
cd Siteweb-EverDawn-v2
python -m http.server 8000
# http://localhost:8000
```

---

## Personnalisation

### 1. Couleurs

Édite `css/style.css` lignes 2-33 :

```css
:root {
    --primary-purple: #7d5cff;
    --sky-blue: #9fe9ff;
    --pastel-gold: #f7d37c;
    /* ... */
}
```

### 2. Images intégrées

Les images suivantes sont déjà configurées :
- **Logo** : `assets/images/logo.png` (hero section)
- **Character** : `assets/images/character.png` (Discord section)
- **Background** : `assets/images/img1.png` (About section, subtil)

### 3. Vidéo background

Remplace le placeholder ligne 67 par une vraie vidéo dans `assets/videos/`.

---

## Déploiement

### Cloudflare Pages (recommandé)
1. Push sur GitHub
2. Connecte à Cloudflare Pages
3. Build command: `(vide)`
4. Output: `/`

### Nginx
```nginx
server {
    listen 80;
    server_name everdawn.fr;
    root /var/www/everdawn-v2;
    index index.html;
}
```

---

## Technologies

- HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Cinzel + Poppins)
- Bootstrap Icons
- IntersectionObserver API

---

## Support

- **Discord:** discord.everdawn.fr
- **Serveur:** mc.everdawn.fr

---

## Licence

© 2025 EverDawn. Tous droits réservés.

Design inspiré de oneblock.fr (Rivrs).
