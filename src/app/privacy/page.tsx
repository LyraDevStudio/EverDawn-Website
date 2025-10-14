import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Politique de Confidentialité - Everdawn',
  description: 'Politique de confidentialité et gestion des données personnelles pour Everdawn, conforme au RGPD.',
};

export default function PrivacyPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="min-h-screen bg-ivory pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-text mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-slate-text/70">
              Dernière mise à jour : 14 octobre 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                La protection des données personnelles et de la vie privée des joueurs sont des valeurs fondamentales pour LyraStudio et le projet Everdawn. Nous nous engageons à protéger votre vie privée et à traiter vos données de manière responsable et conforme au RGPD (Règlement Général sur la Protection des Données).
              </p>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez nos services : site web everdawn.fr, serveur de jeu Minecraft Everdawn, Discord officiel et boutique en ligne.
              </p>
              <p className="text-slate-text/80 leading-relaxed">
                Nous observons la législation française et européenne, les directives des autorités et les bonnes pratiques en matière de traitement de données. Nous traitons vos données à caractère personnel uniquement à des fins appropriées définies à l'avance et uniquement lorsque cela est nécessaire.
              </p>
            </section>

            {/* Données collectées */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                2. Données collectées
              </h2>
              
              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                2.1 Données de connexion
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li>Pseudo Minecraft et UUID (identifiant unique)</li>
                <li>Adresse IP</li>
                <li>Dates et heures de connexion</li>
                <li>Temps de jeu total et par session</li>
                <li>Fournisseur d'accès Internet</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                2.2 Données de jeu
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li>Statistiques de jeu (blocs minés, mobs tués, progression, etc.)</li>
                <li>Constructions, inventaire et équipement</li>
                <li>Historique des commandes utilisées</li>
                <li>Messages du chat in-game</li>
                <li>Interactions avec d'autres joueurs</li>
                <li>Données liées aux îles (permissions, membres, etc.)</li>
                <li>Classements et achievements</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                2.3 Données de transaction
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li>Historique d'achats sur la boutique</li>
                <li>Informations de paiement (traitées de manière sécurisée par nos prestataires tiers)</li>
                <li>Adresse email pour la confirmation de commande</li>
                <li>Pseudo in-game associé aux achats</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                2.4 Données Discord (si connecté)</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>ID Discord et tag (nom#0000)</li>
                <li>Données de profil public</li>
                <li>Historique de tickets support</li>
              </ul>
            </section>

            {/* Base légale et motifs */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                3. Base légale et motifs du traitement
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nous traitons vos données sur les bases légales suivantes :
              </p>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                3.1 Exécution d'un contrat
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li>Informations de contact pour fournir les services et le support client</li>
                <li>Informations de paiement pour les achats en ligne</li>
                <li>Identifiants en ligne et données de profil pour le bon fonctionnement du serveur</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                3.2 Intérêt légitime
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li>Informations de contact et de paiement pour la prévention de la fraude</li>
                <li>Informations sur le profil du joueur pour la modération du contenu</li>
                <li>Données de comportement in-game pour l'analyse et l'amélioration des services</li>
                <li>Identifiants en ligne pour les statistiques d'usage</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                3.3 Obligation légale
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Conservation des documents relatifs aux achats (obligations comptables et fiscales)</li>
                <li>Prévention des crimes, fraudes et abus</li>
                <li>Réponse aux demandes des autorités compétentes</li>
              </ul>
            </section>

            {/* Utilisation des données */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                4. Utilisation des données
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Assurer le fonctionnement du serveur et des services</li>
                <li>Sauvegarder votre progression, constructions et inventaire</li>
                <li>Gérer les classements et statistiques publiques</li>
                <li>Détecter et prévenir la triche, les abus et les comportements malveillants</li>
                <li>Traiter vos achats et gérer votre compte boutique</li>
                <li>Améliorer l'expérience de jeu et développer de nouvelles fonctionnalités</li>
                <li>Communiquer avec vous (support, mises à jour, événements)</li>
                <li>Assurer la sécurité et la modération du serveur</li>
                <li>Analyser l'utilisation des services pour optimiser les performances</li>
              </ul>
            </section>

            {/* Profilage */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                5. Profilage et personnalisation
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nous utilisons des données de comportement in-game rendues anonymes pour personnaliser et développer nos services. Ces données peuvent être utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Vous offrir un contenu plus pertinent et adapté à votre style de jeu</li>
                <li>Guider et soutenir la production de nouvelles fonctionnalités</li>
                <li>Équilibrer le gameplay et l'économie du serveur</li>
                <li>Personnaliser les défis et récompenses</li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                Les données à caractère personnel sont traitées de manière sécurisée et confidentielle. Nous traitons principalement vos données sous une forme dans laquelle un tiers ne peut pas vous identifier en tant que personne.
              </p>
            </section>

            {/* Conservation */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                6. Conservation des données
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nous conservons vos données uniquement le temps nécessaire pour remplir les objectifs pour lesquels elles ont été collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li><strong>Données de jeu :</strong> Aussi longtemps que votre compte est actif et jusqu'à 2 ans après la dernière connexion</li>
                <li><strong>Logs de connexion :</strong> 90 jours maximum</li>
                <li><strong>Messages de chat :</strong> 30 jours maximum (sauf en cas de signalement ou sanction)</li>
                <li><strong>Données de transaction :</strong> 10 ans (obligation légale comptable)</li>
                <li><strong>Sanctions et historique modération :</strong> Durée de la sanction + 1 an pour les sanctions temporaires, permanent pour les bannissements définitifs</li>
                <li><strong>Données de support :</strong> 1 an après la résolution du ticket</li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                Lorsque la période de conservation est terminée, nous supprimons ou anonymisons les données personnelles.
              </p>
            </section>

            {/* Partage des données */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                7. Partage et divulgation des données
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Vos données ne sont <strong>jamais vendues</strong> à des tiers. Nous pouvons partager certaines données avec :
              </p>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                7.1 Sous-traitants et partenaires
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li><strong>Prestataires de paiement :</strong> Stripe, PayPal pour traiter vos transactions de manière sécurisée</li>
                <li><strong>Hébergeurs :</strong> OVH, Hetzner pour le stockage et le fonctionnement du serveur (infrastructure européenne basée en France)</li>
                <li><strong>Services d'analyse :</strong> Données anonymisées uniquement pour les statistiques d'usage</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                7.2 Autorités légales
              </h3>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Vos données peuvent être divulguées si cela est requis par la loi, un règlement ou une demande des autorités compétentes, ou pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Faire respecter nos Conditions d'Utilisation</li>
                <li>Enquêter sur une utilisation illicite des services</li>
                <li>Garantir la sécurité des services et des utilisateurs</li>
                <li>Protéger nos droits légaux</li>
              </ul>
            </section>

            {/* Localisation */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                8. Localisation et transfert des données
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nous stockons intégralement vos données sur une infrastructure européenne basée en <strong>France</strong>. Vos données ne sont pas transférées hors de l'Union Européenne (UE) / Espace Économique Européen (EEE), garantissant ainsi une protection conforme au RGPD.
              </p>
            </section>

            {/* Sécurité */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                9. Sécurité des données
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Chiffrement des données sensibles (mots de passe, informations de paiement)</li>
                <li>Accès restreint aux données (principe du moindre privilège)</li>
                <li>Contrôle d'accès basé sur l'authentification forte</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Pare-feu et protection anti-DDoS</li>
                <li>Mises à jour de sécurité régulières</li>
                <li>Formation de l'équipe aux bonnes pratiques de sécurité</li>
                <li>Surveillance et détection des incidents de sécurité</li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                Vous êtes également responsable de la sécurité de vos propres données. Nous vous recommandons de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Utiliser un mot de passe fort et unique pour votre compte</li>
                <li>Ne jamais partager vos identifiants</li>
                <li>Activer l'authentification à deux facteurs lorsque disponible</li>
                <li>Maintenir vos appareils à jour et protégés</li>
              </ul>
            </section>

            {/* Droits RGPD */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                10. Vos droits (RGPD)
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li><strong>Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et obtenir une copie de celles-ci</li>
                <li><strong>Droit de rectification :</strong> Faire corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données dans certaines conditions</li>
                <li><strong>Droit à la limitation du traitement :</strong> Obtenir la limitation du traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et lisible par machine</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des motifs légitimes</li>
                <li><strong>Droit de retirer votre consentement :</strong> Retirer un consentement précédemment donné</li>
                <li><strong>Droit de définir des directives :</strong> Définir le sort de vos données après votre décès</li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous via :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mt-2">
                <li>Discord : <a href="https://discord.everdawn.fr" className="text-amber hover:text-amber-dark">discord.everdawn.fr</a></li>
                <li>Commande in-game : <code className="bg-sand/30 px-2 py-1 rounded">/staff</code></li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                11. Cookies et technologies similaires
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Notre site web utilise des cookies et technologies similaires pour améliorer votre expérience. Un cookie est un petit fichier texte stocké sur votre appareil lors de la visite d'un site web.
              </p>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                11.1 Types de cookies utilisés
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80 mb-4">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (connexion, panier, sécurité)</li>
                <li><strong>Cookies de performance :</strong> Permettent d'analyser l'utilisation du site et d'améliorer ses performances</li>
                <li><strong>Cookies fonctionnels :</strong> Mémorisent vos préférences (langue, thème, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-text mb-3 mt-6">
                11.2 Gestion des cookies
              </h3>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Vous pouvez à tout moment gérer vos préférences de cookies via les paramètres de votre navigateur. Notez que le refus de certains cookies peut affecter le fonctionnement du site.
              </p>
            </section>

            {/* Mineurs */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                12. Protection des mineurs
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nos services sont accessibles aux mineurs de plus de 13 ans. Les mineurs de moins de 13 ans doivent obtenir l'autorisation de leurs parents ou tuteurs légaux avant d'utiliser nos services.
              </p>
              <p className="text-slate-text/80 leading-relaxed">
                Nous ne collectons pas intentionnellement de données personnelles de mineurs de moins de 13 ans sans consentement parental. Si vous pensez que nous avons collecté des informations d'un mineur sans autorisation, veuillez nous contacter immédiatement.
              </p>
            </section>

            {/* Modifications */}
            <section className="mb-8 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                13. Modifications de la politique
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les changements importants seront notifiés via :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Notification sur le serveur Discord</li>
                <li>Annonce in-game</li>
                <li>Bannière sur le site web</li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                La date de dernière mise à jour est toujours indiquée en haut de cette page. Nous vous encourageons à consulter régulièrement cette politique.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">
                14. Contact et réclamations
              </h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité, l'exercice de vos droits ou une réclamation, contactez-nous :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li><strong>Responsable du traitement :</strong> LyraStudio</li>
                <li><strong>Service :</strong> Everdawn</li>
                <li><strong>Discord :</strong> <a href="https://discord.everdawn.fr" className="text-amber hover:text-amber-dark">discord.everdawn.fr</a></li>
                <li><strong>Commande in-game :</strong> <code className="bg-sand/30 px-2 py-1 rounded">/staff</code></li>
              </ul>
              <p className="text-slate-text/80 leading-relaxed mt-4">
                Nous nous engageons à répondre à toute demande dans un délai maximum de 30 jours.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
