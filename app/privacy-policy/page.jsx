'use client'

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { C } from '@/lib/tokens';

const LAST_UPDATED = '13 Mars 2026';

const SECTIONS = [
  {
    id: 'intro',
    num: '01',
    title: "Introduction et Champ d'Application",
    content: `Data Scale Business Group (ci-après désigné "la Société", "nous", "notre") est une société spécialisée en Business Intelligence, Data Engineering et Intelligence Artificielle, dont le siège social est établi à Casablanca, Maroc.

La présente Politique de Confidentialité régit la collecte, l'utilisation, la conservation et la protection des données personnelles des utilisateurs du site web datascalebusiness.io (ci-après "le Site"), ainsi que de toute personne entrant en relation avec la Société dans le cadre de ses activités commerciales.

Cette politique est établie en conformité avec le Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne (Règlement UE 2016/679) et la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, promulguée par le Dahir n° 1-09-15 du 18 février 2009.

En accédant et en utilisant notre Site, vous reconnaissez avoir pris connaissance de la présente Politique de Confidentialité et acceptez les pratiques qui y sont décrites.`,
  },
  {
    id: 'responsable',
    num: '02',
    title: 'Identité du Responsable du Traitement',
    content: `Dénomination sociale : Data Scale Business Group
Forme juridique : Société de conseil en transformation digitale et data
Siège social : La Marina, 4 Boulevard Mohammed Ben Abdellah, Immeuble Oceanes 3, Bureau 3 RDC, Casablanca 20370, Maroc
Bureaux internationaux : 30 N Gould St Suite R, Sheridan, WY 82801, États-Unis
Adresse électronique : info@datascalebusiness.io
Téléphone : +212 671 370 001
Site web : https://datascalebusiness.io

En qualité de responsable du traitement, Data Scale Business Group détermine les finalités et les moyens des traitements de données à caractère personnel effectués dans le cadre de ses activités.`,
  },
  {
    id: 'collecte',
    num: '03',
    title: 'Catégories de Données Collectées',
    subsections: [
      {
        title: 'Données issues du Formulaire de Contact',
        text: `Dans le cadre de l'utilisation du formulaire de contact disponible sur notre Site, nous collectons les informations suivantes :

Données obligatoires :
Prénom et nom de famille
Adresse email professionnelle ou personnelle
Contenu du message et nature de la demande

Données facultatives :
Numéro de téléphone
Nom de l'entreprise ou de l'organisation
Service ou domaine d'expertise concerné (Business Intelligence, BI Immobilier, Cash Flow Management, Data Engineering, IA et Analytics, Marketing Digital)

Ces données sont collectées sur la base de votre consentement explicite, matérialisé par la soumission du formulaire, et sont strictement nécessaires au traitement de votre demande.`,
      },
      {
        title: 'Données issues des Communications par Email',
        text: `Lorsque vous nous contactez directement à l'adresse info@datascalebusiness.io, nous collectons et conservons :

L'adresse email expéditrice et les coordonnées associées
Le contenu intégral de vos échanges avec nos équipes
Les pièces jointes et documents partagés dans le cadre de vos demandes
L'historique des communications aux fins de suivi commercial et de service client

Ces données sont traitées dans le cadre de notre intérêt légitime à assurer la continuité et la qualité de nos relations avec nos prospects et clients.`,
      },
      {
        title: 'Données de Navigation collectées via Google Analytics 4',
        text: `Notre Site intègre Google Analytics 4 (GA4), un service d'analyse d'audience proposé par Google LLC, dont le siège est situé au 1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis.

Cet outil collecte de manière automatique et anonymisée les données suivantes :

Comportement de navigation : pages visitées, durée de session, taux de rebond, parcours de navigation
Sources de trafic : moteur de recherche, réseaux sociaux, accès direct, sites référents
Données techniques : type d'appareil, système d'exploitation, navigateur web utilisé, résolution d'écran
Données géographiques : pays et ville d'accès (approximatif, sans identification précise)

Identifiant de mesure Google Analytics 4 : G-JHRK820N2P

Aucune donnée permettant votre identification personnelle n'est transmise à Google Analytics. Les données sont traitées sur des serveurs de Google, y compris aux États-Unis, dans le cadre des clauses contractuelles types approuvées par la Commission Européenne.`,
      },
    ],
  },
  {
    id: 'finalites',
    num: '04',
    title: 'Finalités et Bases Légales du Traitement',
    content: `Nous traitons vos données personnelles pour les finalités suivantes, chacune reposant sur une base légale spécifique :

Traitement des demandes de contact et de renseignements
Base légale : Consentement (article 6.1.a du RGPD)
Conservation : 3 ans à compter du dernier contact

Gestion de la relation commerciale et établissement de propositions
Base légale : Exécution d'un contrat ou mesures précontractuelles (article 6.1.b du RGPD)
Conservation : Durée de la relation commerciale augmentée de 3 ans

Amélioration de l'expérience utilisateur et performances du Site
Base légale : Intérêt légitime (article 6.1.f du RGPD)
Conservation : 14 mois (paramétrage GA4 par défaut)

Respect de nos obligations légales et réglementaires
Base légale : Obligation légale (article 6.1.c du RGPD)
Conservation : Selon les durées légales applicables

Nous nous engageons à ne traiter vos données qu'aux fins pour lesquelles elles ont été collectées et à ne pas les utiliser à d'autres fins sans information préalable.`,
  },
  {
    id: 'partage',
    num: '05',
    title: 'Partage et Transfert des Données',
    content: `Data Scale Business Group ne vend, ne loue et ne cède jamais vos données personnelles à des tiers à des fins commerciales ou publicitaires.

Vos données peuvent être partagées exclusivement avec les catégories de destinataires suivantes :

Prestataires techniques d'hébergement et d'infrastructure
Netlify Inc. (hébergement du Site, certifié SOC 2 Type II) et Sanity Inc. (gestion du contenu éditorial). Ces prestataires agissent en qualité de sous-traitants au sens du RGPD et sont liés par des obligations contractuelles strictes de confidentialité.

Prestataires d'analyse d'audience
Google LLC (Google Analytics 4) pour l'analyse statistique anonymisée du trafic, encadrée par les clauses contractuelles types de la Commission Européenne.

Autorités compétentes
Les données peuvent être communiquées aux autorités judiciaires, administratives ou réglementaires compétentes lorsque la loi l'exige ou dans le cadre de procédures légales.

En cas de transfert de données hors de l'Espace Économique Européen ou du Maroc, nous nous assurons que des garanties appropriées sont mises en place conformément aux exigences du RGPD et de la loi 09-08.`,
  },
  {
    id: 'droits',
    num: '06',
    title: 'Vos Droits sur vos Données Personnelles',
    content: `Conformément au RGPD et à la loi marocaine n° 09-08, vous bénéficiez des droits suivants concernant vos données personnelles :

Droit d'accès (article 15 RGPD) : Vous pouvez obtenir la confirmation que nous traitons des données vous concernant et en recevoir une copie, ainsi que les informations relatives aux conditions de ce traitement.

Droit de rectification (article 16 RGPD) : Vous pouvez demander la correction de données inexactes ou incomplètes vous concernant.

Droit à l'effacement (article 17 RGPD) : Vous pouvez demander la suppression de vos données dans les cas prévus par la réglementation applicable.

Droit à la limitation du traitement (article 18 RGPD) : Vous pouvez demander que le traitement de vos données soit limité dans certaines circonstances.

Droit d'opposition (article 21 RGPD) : Vous pouvez vous opposer au traitement de vos données fondé sur notre intérêt légitime.

Droit à la portabilité (article 20 RGPD) : Vous pouvez recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.

Droit de retrait du consentement : Lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment sans que cela affecte la licéité du traitement antérieur.

Pour exercer l'un de ces droits, adressez votre demande à : info@datascalebusiness.io
Nous nous engageons à répondre dans un délai maximum de 30 jours calendaires à compter de la réception de votre demande.

Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) au Maroc sur cndp.ma, ou auprès de la CNIL en France sur cnil.fr si vous résidez en France.`,
  },
  {
    id: 'cookies',
    num: '07',
    title: 'Politique en matière de Cookies',
    content: `Notre Site utilise des cookies et technologies similaires afin d'assurer son bon fonctionnement et d'améliorer votre expérience de navigation.

Cookies strictement nécessaires
Ces cookies sont indispensables au fonctionnement technique du Site. Ils ne collectent aucune donnée personnelle identifiable et ne peuvent pas être désactivés sans affecter le bon fonctionnement du Site.

Cookies analytiques (Google Analytics 4)
Ces cookies nous permettent de mesurer l'audience du Site et de comprendre le comportement des visiteurs afin d'en améliorer le contenu et les performances. Les données collectées sont agrégées et anonymisées. Vous pouvez refuser ces cookies sans impact sur votre navigation. Durée de conservation des cookies analytiques : 13 mois maximum.

Gestion de vos préférences
Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies, ou pour être alerté préalablement à leur dépôt. Les paramètres de gestion des cookies sont accessibles dans les préférences de votre navigateur. Pour toute information complémentaire : allaboutcookies.org`,
  },
  {
    id: 'securite',
    num: '08',
    title: 'Sécurité et Protection des Données',
    content: `Data Scale Business Group met en oeuvre un ensemble de mesures techniques et organisationnelles appropriées afin de garantir la sécurité, l'intégrité et la confidentialité de vos données personnelles.

Mesures techniques déployées :
Chiffrement des communications via protocole TLS 1.3 (certificat SSL noté A+ par SSL Labs)
Activation du protocole HSTS (HTTP Strict Transport Security) avec longue durée de validité
Mise en oeuvre de headers de sécurité HTTP : X-Frame-Options, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
Hébergement sur infrastructure Netlify certifiée SOC 2 Type II
Protection contre les attaques DDoS assurée par Netlify Edge Network

Mesures organisationnelles :
Accès aux données personnelles restreint aux seuls collaborateurs habilités selon le principe du besoin d'en connaître
Mise à jour régulière des systèmes et application des correctifs de sécurité
Absence de base de données exposée directement au réseau public

En cas de violation de données susceptible d'engendrer un risque élevé pour vos droits et libertés, nous nous engageons à vous en notifier dans les meilleurs délais, conformément à l'article 34 du RGPD.`,
  },
  {
    id: 'conservation',
    num: '09',
    title: 'Durées de Conservation',
    content: `Vos données personnelles sont conservées pour des durées déterminées et proportionnées aux finalités du traitement :

Données issues du formulaire de contact : 3 ans à compter du dernier contact ou de la fin de la relation commerciale

Correspondances et échanges par email : 3 ans à compter de la fin de la relation commerciale, ou 5 ans en cas de relation contractuelle établie

Données Google Analytics (navigation anonymisée) : 14 mois glissants, conformément au paramétrage par défaut de GA4

Données de facturation et comptables : 10 ans, conformément aux obligations légales comptables applicables au Maroc et dans les autres juridictions où nous opérons

A l'expiration de ces délais, vos données sont supprimées de manière définitive et sécurisée ou rendues anonymes de façon irréversible à des fins statistiques.`,
  },
  {
    id: 'modifications',
    num: '10',
    title: 'Modifications de la Politique de Confidentialité',
    content: `Data Scale Business Group se réserve le droit de modifier la présente Politique de Confidentialité à tout moment, notamment pour refléter les évolutions réglementaires, législatives ou liées à nos pratiques de traitement des données.

Les modifications prennent effet dès leur publication sur le Site. La date de dernière mise à jour figurant en en-tête de ce document sera systématiquement actualisée.

En cas de modification substantielle affectant vos droits ou les conditions de traitement de vos données, nous vous en informerons par email si vous nous avez communiqué votre adresse électronique, ou par une notification visible sur le Site.

Nous vous encourageons à consulter régulièrement cette page afin de prendre connaissance des éventuelles mises à jour.

Dernière mise à jour : ${LAST_UPDATED}`,
  },
  {
    id: 'contact',
    num: '11',
    title: 'Contact et Réclamations',
    content: `Pour toute question relative à la présente Politique de Confidentialité, pour exercer vos droits ou pour signaler tout manquement à la protection de vos données personnelles, vous pouvez nous contacter :

Par voie électronique : info@datascalebusiness.io
Par courrier postal : Data Scale Business Group, La Marina, 4 Boulevard Mohammed Ben Abdellah, Immeuble Oceanes 3, Bureau 3 RDC, Casablanca 20370, Maroc
Par téléphone : +212 671 370 001

Notre équipe s'engage à accuser réception de votre demande et à y apporter une réponse complète dans un délai maximum de 30 jours calendaires.

Si vous souhaitez introduire une réclamation auprès d'une autorité de contrôle compétente :

Au Maroc : Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) accessible sur cndp.ma
En France : Commission Nationale de l'Informatique et des Libertés (CNIL) accessible sur cnil.fr
Dans l'Union Européenne : l'autorité de protection des données de votre État membre de résidence`,
  },
];

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ background: C.white, minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: C.dark, padding: '100px 28px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(46,125,110,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(46,125,110,0.04) 1px,transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.tealLight, marginBottom: 14 }}>
            Protection des Données Personnelles
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2rem,5vw,3rem)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            Politique de<br />Confidentialité
          </h1>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: 28, fontFamily: "'DM Sans',sans-serif" }}>
            Dernière mise à jour : {LAST_UPDATED}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['RGPD', 'Loi 09-08 Maroc', 'Google Analytics 4', 'SSL A+', 'SOC 2 Type II'].map(tag => (
              <span key={tag} style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.tealLight, background: `${C.teal}18`, border: `1px solid ${C.teal}35`, padding: '4px 12px' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '64px 28px 100px' }}>

        {/* Intro banner */}
        <div style={{ background: '#f7f9f8', border: `1.5px solid ${C.border}`, padding: '24px 28px', marginBottom: 48, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: `linear-gradient(to bottom,${C.teal},${C.gold})` }} />
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1rem', color: C.inkMid, lineHeight: 1.85 }}>
            La présente politique décrit comment Data Scale Business Group collecte, utilise et protège vos données personnelles conformément au RGPD et à la loi marocaine n° 09-08. Nous nous engageons à traiter vos données avec le plus haut niveau de transparence et de sécurité.
          </p>
        </div>

        {/* Table of contents */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 16 }}>
            Sommaire
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '6px 32px' }}>
            {SECTIONS.map(s => (
              <a key={s.id} href={`#${s.id}`}
                style={{ display: 'flex', alignItems: 'baseline', gap: 10, textDecoration: 'none', padding: '5px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ fontSize: '0.58rem', fontWeight: 700, color: C.teal, minWidth: 20 }}>{s.num}</span>
                <span style={{ fontSize: '0.78rem', color: C.inkMid, transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = C.teal}
                  onMouseLeave={e => e.target.style.color = C.inkMid}>
                  {s.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections accordion */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id} style={{ borderBottom: `1px solid ${C.border}` }}>
              <button
                onClick={() => setActive(active === s.id ? null : s.id)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 20, padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: '0.72rem', color: active === s.id ? C.teal : C.border, minWidth: 28, transition: 'color 0.2s' }}>
                  {s.num}
                </span>
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1rem', color: active === s.id ? C.ink : C.inkMid, flex: 1, transition: 'color 0.2s' }}>
                  {s.title}
                </span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={C.inkLight} strokeWidth="2"
                  style={{ transform: active === s.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s', flexShrink: 0 }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {active === s.id && (
                <div style={{ paddingLeft: 48, paddingBottom: 32, paddingRight: 8 }}>
                  {s.subsections ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                      {s.subsections.map(sub => (
                        <div key={sub.title}>
                          <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: '0.8rem', color: C.ink, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 3, height: 3, borderRadius: '50%', background: C.teal, flexShrink: 0 }} />
                            {sub.title}
                          </div>
                          <p style={{ fontSize: '0.83rem', color: C.inkMid, lineHeight: 1.9, whiteSpace: 'pre-line', fontFamily: "'DM Sans',sans-serif" }}>{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ fontSize: '0.83rem', color: C.inkMid, lineHeight: 1.9, whiteSpace: 'pre-line', fontFamily: "'DM Sans',sans-serif" }}>{s.content}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{ marginTop: 64, padding: '36px 40px', background: C.dark, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />
          <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>
            Une question relative à vos données personnelles ?
          </div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: 22, fontFamily: "'DM Sans',sans-serif" }}>
            Notre équipe traite toutes les demandes relatives à la protection des données dans un délai maximum de 30 jours calendaires.
          </p>
          <a href="mailto:info@datascalebusiness.io"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, color: C.tealLight, border: `1px solid ${C.teal}50`, padding: '10px 20px', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.tealLight; }}>
            info@datascalebusiness.io
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
}