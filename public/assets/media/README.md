# Organisation des Medias Everdawn

## Structure

```
public/assets/
├── images/          # Images statiques (logo, etc.)
├── media/
│   ├── images/      # Images de contenu
│   ├── gifs/        # GIFs animes
│   ├── videos/      # Videos (MP4, WEBM)
│   └── gallery/     # Images/gifs/videos pour la galerie
```

## Formats supportes

* **Images**: JPG, PNG, WEBP
* **GIFs**: GIF
* **Videos**: MP4, WEBM, OGG

## Nomenclature recommandee

* `hero.jpg` ou `hero.mp4` - Media de fond pour la section hero
* `feature-{nom}.jpg` - Visuels pour les features
* `gallery/img{numero}.{ext}` - Elements de la galerie

## Fallback automatique

Si un media est manquant, le composant `MediaWithFallback` affiche automatiquement un placeholder elegant avec le theme sable/ambre.

## Optimisation

* Compresser les images avant upload (TinyPNG, Squoosh)
* Videos : max 1080p, codec H.264, bitrate ~5Mbps
* GIFs : limiter la resolution et le nombre de frames

## Ajout de nouveaux medias

1. Placer le fichier dans le bon dossier
2. Mettre a jour la configuration dans `src/config/site.ts` si necessaire
3. Le composant detecte automatiquement le type (image/gif/video)
