# Images intégrées - EverDawn v2

## ✅ Images ajoutées et configurées

### 1. **logo.png** (1.1 MB)
- **Emplacement :** `assets/images/logo.png`
- **Utilisation :** Hero section principale (remplacement du texte "EverDawn")
- **Taille affichée :** Responsive de 300px à 700px de large
- **Effet :** Drop-shadow violet pour effet glow

**Intégration :**
- HTML : ligne 77
- CSS : lignes 427-431
- Animation : Zoom-in depuis scale(8) vers scale(1)

---

### 2. **character.png** (11 KB)
- **Emplacement :** `assets/images/character.png`
- **Utilisation :** Section Discord (personnage illustratif)
- **Taille affichée :** Max 400px de large
- **Effet :** Drop-shadow purple + hover scale 1.05

**Intégration :**
- HTML : ligne 257
- CSS : lignes 794-805
- Masqué sur mobile (<768px)

---

### 3. **img1.png** (3.8 MB) 
- **Emplacement :** `assets/images/img1.png`
- **Dimensions originales :** 2560×1351px
- **Utilisation :** Background décoratif de la section About
- **Affichage :** 
  - Desktop : 60% largeur, côté droit, opacité 15%
  - Mobile : 100% largeur, opacité 8%

**Intégration :**
- CSS : lignes 500-511 (pseudo-élément ::before)
- Effet : Overlay subtil qui n'obstrue pas le contenu

---

## 🎨 Optimisations appliquées

### Responsive
- **Logo** : Réduit à 90vw max 400px sur mobile
- **Character** : Caché sur mobile pour économiser espace
- **Background img1** : Opacité réduite (8%) sur mobile

### Performance
- Utilisation de `background-size: cover` pour img1
- Drop-shadow au lieu de box-shadow (GPU-accelerated)
- Images chargées une seule fois (pas de duplication)

---

## 📊 Poids total des images

| Image | Taille | Optimisation possible |
|-------|--------|----------------------|
| logo.png | 1.1 MB | ⚠️ Réduire à ~200 KB (compression PNG) |
| character.png | 11 KB | ✅ Optimal |
| img1.png | 3.8 MB | ⚠️ Réduire à ~800 KB ou convertir WebP |

**Total actuel :** ~5 MB
**Cible optimale :** ~1-1.5 MB

---

## 🚀 Optimisations futures recommandées

### 1. Compression PNG
```bash
# Avec pngquant
pngquant --quality=70-85 logo.png -o logo-optimized.png
pngquant --quality=70-85 img1.png -o img1-optimized.png
```

### 2. Conversion WebP (meilleure compression)
```bash
# Avec cwebp
cwebp -q 85 logo.png -o logo.webp
cwebp -q 80 img1.png -o img1.webp
```

Puis modifier le HTML pour servir WebP avec fallback PNG :
```html
<picture>
    <source srcset="assets/images/logo.webp" type="image/webp">
    <img src="assets/images/logo.png" alt="EverDawn">
</picture>
```

### 3. Lazy loading pour img1
Ajouter dans le CSS :
```css
.about-section::before {
    /* Charger en différé avec will-change */
    will-change: opacity;
}
```

---

## ✨ Résultat visuel

### Hero Section
- Logo centré avec animation zoom
- Glow effect violet subtil
- Responsive et lisible sur tous écrans

### Discord Section
- Personnage à gauche (desktop)
- Texte + CTA à droite
- Character masqué sur mobile

### About Section
- Texte bien lisible au premier plan
- Image serveur en arrière-plan discret
- Ambiance immersive sans distraire

---

## 🔧 Modifications HTML

**Fichier :** `index.html`

```diff
- <h1 class="logo-text">EverDawn</h1>
- <p class="logo-subtitle">OneBlock Fantasy</p>
+ <img src="assets/images/logo.png" alt="EverDawn - Serveur OneBlock Fantasy" class="logo-image">
```

```diff
- <div class="character-placeholder">
-     <i class="bi bi-star-fill"></i>
- </div>
+ <img src="assets/images/character.png" alt="Personnage EverDawn" class="character-image">
```

---

## 🔧 Modifications CSS

**Fichier :** `css/style.css`

**Ajouts :**
- `.logo-image` (ligne 427-431)
- `.character-image` (ligne 794-805)
- `.about-section::before` (ligne 500-511)
- Media queries mobile (ligne 934-937, 967-970)

---

## 📝 Notes importantes

1. **Chemins relatifs** : Tous les chemins sont relatifs à `index.html`
2. **Cache navigateur** : Les images seront mises en cache après première visite
3. **Fallback** : Aucun fallback nécessaire (images décoratives)
4. **SEO** : Alt text ajouté pour accessibilité

---

✅ **Toutes les images sont intégrées et fonctionnelles !**

Le site est maintenant complet avec visuels personnalisés.
