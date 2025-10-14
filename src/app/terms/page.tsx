import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/ui/BackToTop';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Conditions Générales d'Utilisation et de Vente - Everdawn",
  description: "Conditions générales d'utilisation et de vente du serveur Minecraft Everdawn, géré par LyraStudio.",
};

export default function TermsPage() {
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
              Conditions Générales d'Utilisation et de Vente
            </h1>
            <p className="text-lg text-slate-text/70">
              Dernière mise à jour : 14 octobre 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* CGU Section */}
            <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-display font-bold text-slate-text mb-6 border-b-2 border-amber pb-3">
                I. Conditions Générales d'Utilisation (CGU)
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">1. Présentation du service</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Le présent site <strong>everdawn.fr</strong> (ci-après "le Site") et le serveur de jeu Minecraft Everdawn (ci-après "le Serveur") sont la propriété de <strong>LyraStudio</strong>, structure non déclarée actuellement en cours de constitution.
                </p>
                <p className="text-slate-text/80 leading-relaxed">
                  Les services Everdawn comprennent tous les services accessibles via le domaine everdawn.fr, incluant le site web, le serveur de jeu Minecraft, le Discord officiel, et autres plateformes associées.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">2. Acceptation des conditions</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  L'accès et l'utilisation du Site et du Serveur impliquent l'acceptation pleine et entière des présentes Conditions Générales d'Utilisation. En cas de non-acceptation, l'utilisateur doit immédiatement cesser toute utilisation des services Everdawn.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">3. Règles du serveur et comportement</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Tout utilisateur s'engage à respecter les règles suivantes :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li>Respecter tous les joueurs et membres de l'équipe</li>
                  <li>Interdiction absolue de tricher, utiliser des mods non autorisés, exploiter des bugs ou utiliser des clients modifiés non conformes</li>
                  <li>Pas de spam, flood, publicité pour d'autres serveurs ou contenu inapproprié dans le chat</li>
                  <li>Interdiction de grief (destruction intentionnelle des constructions d'autrui)</li>
                  <li>Respecter les constructions et propriétés des autres joueurs</li>
                  <li>Interdiction de tout contenu à caractère raciste, injurieux, diffamant, pornographique ou discriminatoire</li>
                  <li>Suivre les instructions des modérateurs et administrateurs</li>
                  <li>Ne pas tenter de nuire au bon fonctionnement du serveur (DDoS, exploits, etc.)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">4. Sanctions</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Le non-respect des règles peut entraîner les sanctions suivantes, selon la gravité :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li>Avertissement verbal ou écrit</li>
                  <li>Mute (réduction de parole) temporaire ou définitif</li>
                  <li>Kick (expulsion temporaire)</li>
                  <li>Bannissement temporaire</li>
                  <li>Bannissement définitif</li>
                </ul>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  LyraStudio se réserve le droit de sanctionner tout comportement jugé inapproprié, même s'il n'est pas explicitement mentionné dans ces règles. L'équipe se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l'utilisateur en cas d'infraction grave.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">5. Compte joueur et sécurité</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Vous êtes entièrement responsable de la sécurité de votre compte Minecraft et des actions effectuées depuis celui-ci. En cas de piratage ou d'utilisation frauduleuse, vous devez immédiatement contacter l'équipe via Discord ou la commande <code className="bg-sand/30 px-2 py-1 rounded">/staff</code>.
                </p>
                <p className="text-slate-text/80 leading-relaxed">
                  LyraStudio ne saurait être tenue responsable des conséquences d'un compte compromis. Nous recommandons fortement l'activation de l'authentification à deux facteurs lorsque disponible.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">6. Propriété intellectuelle</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Tous les contenus du Serveur Everdawn (textures, resource packs, plugins personnalisés, configurations, maps, constructions, lore, branding) sont la propriété exclusive de LyraStudio et sont protégés par le droit d'auteur.
                </p>
                <p className="text-slate-text/80 leading-relaxed">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site ou du Serveur, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de LyraStudio.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">7. Disponibilité et maintenance</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  LyraStudio s'efforce de maintenir le Serveur accessible 24h/24 et 7j/7, mais ne peut garantir une disponibilité ininterrompue. Des maintenances programmées ou urgentes peuvent survenir sans préavis.
                </p>
                <p className="text-slate-text/80 leading-relaxed">
                  LyraStudio se réserve le droit de modifier, suspendre ou interrompre tout ou partie des services à tout moment, sans préavis et sans que sa responsabilité puisse être engagée.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">8. Limitation de responsabilité</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  LyraStudio ne peut être tenue responsable de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li>La perte de progression, items, constructions ou données suite à un bug, problème technique, reset ou incident</li>
                  <li>Les interactions entre joueurs (litiges, scams, etc.)</li>
                  <li>Les contenus partagés par les utilisateurs</li>
                  <li>Les interruptions de service, quelle qu'en soit la cause</li>
                  <li>Les dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser les services</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">9. Modification des CGU</h3>
                <p className="text-slate-text/80 leading-relaxed">
                  LyraStudio se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet immédiatement après leur publication sur cette page. La date de dernière mise à jour est indiquée en haut du document.
                </p>
              </div>
            </section>

            {/* CGV Section */}
            <section className="mb-12 bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-display font-bold text-slate-text mb-6 border-b-2 border-amber pb-3">
                II. Conditions Générales de Vente (CGV)
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">1. Objet</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre tout utilisateur effectuant un achat sur la boutique Everdawn (<strong>store.everdawn.fr</strong>) et LyraStudio.
                </p>
                <p className="text-slate-text/80 leading-relaxed">
                  Les objets numériques et services achetés sur la boutique sont exclusivement utilisables sur le serveur Everdawn.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">2. Produits et services</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  La boutique propose les produits et services suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li>Rangs VIP avec avantages permanents ou temporaires</li>
                  <li>Cosmétiques (items, effets visuels, etc.)</li>
                  <li>Ressources de jeu (matériaux, monnaie virtuelle, etc.)</li>
                  <li>Accès à des zones ou fonctionnalités premium</li>
                  <li>Autres contenus numériques liés au gameplay</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">3. Prix</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Les prix sont indiqués en euros (EUR) toutes taxes comprises (TTC). LyraStudio se réserve le droit de modifier ses tarifs à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">4. Commande et paiement</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  <strong>Important :</strong> Les paiements sont entièrement traités par des plateformes tierces certifiées (<strong>Tebex</strong> et/ou <strong>Patreon</strong>). LyraStudio n'agit qu'en tant qu'intermédiaire et ne gère en aucun cas directement les paiements.
                </p>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  En effectuant un achat, vous acceptez les conditions générales de vente du prestataire de paiement utilisé (Tebex ou Patreon). LyraStudio ne stocke aucune information bancaire ou de paiement.
                </p>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Les moyens de paiement disponibles dépendent de la plateforme utilisée et peuvent inclure :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li>Carte bancaire (Visa, Mastercard, American Express, etc.)</li>
                  <li>PayPal</li>
                  <li>Paysafecard</li>
                  <li>Autres moyens selon disponibilité sur la plateforme</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">5. Livraison des produits numériques</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Les produits numériques sont livrés instantanément sur le compte du joueur après validation du paiement. En cas de problème technique, le délai maximum de livraison est de 48 heures. Au-delà, l'utilisateur doit contacter le support.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">6. Droit de rétractation</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contenus numériques fournis immédiatement après validation de la commande. En effectuant un achat, vous acceptez expressément la fourniture immédiate du contenu numérique et renoncez à votre droit de rétractation.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">7. Politique de remboursement</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  <strong>Remboursements gérés par les plateformes tierces :</strong> Les achats effectués via Tebex ou Patreon sont soumis aux politiques de remboursement de ces plateformes. LyraStudio ne gère <strong>aucun remboursement directement</strong>.
                </p>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Pour toute demande de remboursement, vous devez contacter directement :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li><strong>Tebex :</strong> Via leur système de support (tebex.io/contact/support)</li>
                  <li><strong>Patreon :</strong> Via leur centre d'aide (support.patreon.com)</li>
                </ul>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  En général, les contenus numériques livrés immédiatement sont <strong>non remboursables</strong> conformément aux conditions de ces plateformes et à l'article L221-28 du Code de la consommation.
                </p>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  <strong>Cas exceptionnels :</strong> En cas d'erreur technique avérée de notre part (double facturation, produit non livré après 48h, produit non conforme), contactez notre support qui transmettra votre demande à la plateforme de paiement concernée.
                </p>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  <strong>Important :</strong> Un bannissement temporaire ou définitif du serveur pour non-respect des règles n'entraîne <strong>aucun remboursement</strong> des achats effectués. Les avantages achetés ne peuvent être transférés vers un autre compte.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">8. Garanties</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  LyraStudio garantit que :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li>Les produits achetés seront livrés conformément à leur description</li>
                  <li>Les rangs permanents restent actifs tant que le serveur est en ligne</li>
                  <li>Les avantages achetés sont fonctionnels et utilisables dans le jeu</li>
                </ul>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  Cependant, LyraStudio se réserve le droit de modifier les avantages et fonctionnalités des produits pour des raisons d'équilibrage du jeu, sans que cela n'ouvre droit à remboursement.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">9. Réclamations et litiges</h3>
                <p className="text-slate-text/80 leading-relaxed mb-4">
                  Pour toute réclamation concernant :
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-text/80 ml-4">
                  <li><strong>Le contenu in-game :</strong> Contactez notre support via Discord ou la commande <code className="bg-sand/30 px-2 py-1 rounded">/staff</code></li>
                  <li><strong>Les paiements ou remboursements :</strong> Contactez directement Tebex ou Patreon selon la plateforme utilisée</li>
                </ul>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  <strong>Responsabilité limitée :</strong> LyraStudio n'est responsable que de la livraison des contenus numériques sur le serveur. Les questions relatives aux paiements, facturations ou remboursements relèvent de la responsabilité exclusive de Tebex ou Patreon.
                </p>
                <p className="text-slate-text/80 leading-relaxed mt-4">
                  En cas de litige non résolu à l'amiable concernant la fourniture du service, le tribunal compétent sera celui du domicile du défendeur, conformément à la législation française.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-text mb-4">10. Données personnelles</h3>
                <p className="text-slate-text/80 leading-relaxed">
                  Les données collectées lors d'un achat sont traitées conformément à notre <Link href="/privacy" className="text-amber hover:text-amber-dark">Politique de confidentialité</Link>. Elles sont utilisées uniquement pour le traitement de la commande et la fourniture du service.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-display font-bold text-slate-text mb-4">Contact</h2>
              <p className="text-slate-text/80 leading-relaxed mb-4">
                Pour toute question concernant ces conditions, contactez-nous :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-text/80">
                <li>Nom : LyraStudio (structure en cours de constitution)</li>
                <li>Service : Everdawn</li>
                <li>Discord : <a href="https://discord.everdawn.fr" className="text-amber hover:text-amber-dark">discord.everdawn.fr</a></li>
                <li>Commande in-game : <code className="bg-sand/30 px-2 py-1 rounded">/staff</code></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
