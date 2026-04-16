'use client'

import { useState } from 'react'

import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome'

import styles from './privacy-policy.module.css'

const LAST_UPDATED = '13 Mars 2026'

const SECTIONS = [
  {
    id: 'intro',
    num: '01',
    title: "Introduction et Champ d'Application",
    content: `Data Scale Business Group (ci-apres designe "la Societe", "nous", "notre") est une societe specialisee en Business Intelligence, Data Engineering et Intelligence Artificielle, dont le siege social est etabli a Casablanca, Maroc.

La presente Politique de Confidentialite regit la collecte, l'utilisation, la conservation et la protection des donnees personnelles des utilisateurs du site web datascalebusiness.io (ci-apres "le Site"), ainsi que de toute personne entrant en relation avec la Societe dans le cadre de ses activites commerciales.

Cette politique est etablie en conformite avec le Reglement General sur la Protection des Donnees (RGPD) de l'Union Europeenne (Reglement UE 2016/679) et la loi marocaine n° 09-08 relative a la protection des personnes physiques a l'egard du traitement des donnees a caractere personnel, promulguee par le Dahir n° 1-09-15 du 18 fevrier 2009.

En accedant et en utilisant notre Site, vous reconnaissez avoir pris connaissance de la presente Politique de Confidentialite et acceptez les pratiques qui y sont decrites.`,
  },
  {
    id: 'responsable',
    num: '02',
    title: 'Identite du Responsable du Traitement',
    content: `Denomination sociale : Data Scale Business Group
Forme juridique : Societe de conseil en transformation digitale et data
Siege social : La Marina, 4 Boulevard Mohammed Ben Abdellah, Immeuble Oceanes 3, Bureau 3 RDC, Casablanca 20370, Maroc
Bureaux internationaux : 30 N Gould St Suite R, Sheridan, WY 82801, Etats-Unis
Adresse electronique : info@datascalebusiness.io
Telephone : +212 671 370 001
Site web : https://datascalebusiness.io

En qualite de responsable du traitement, Data Scale Business Group determine les finalites et les moyens des traitements de donnees a caractere personnel effectues dans le cadre de ses activites.`,
  },
  {
    id: 'collecte',
    num: '03',
    title: 'Categories de Donnees Collectees',
    subsections: [
      {
        title: 'Donnees issues du Formulaire de Contact',
        text: `Dans le cadre de l'utilisation du formulaire de contact disponible sur notre Site, nous collectons les informations suivantes :

Donnees obligatoires :
Prenom et nom de famille
Adresse email professionnelle ou personnelle
Contenu du message et nature de la demande

Donnees facultatives :
Numero de telephone
Nom de l'entreprise ou de l'organisation
Service ou domaine d'expertise concerne (Business Intelligence, BI Immobilier, Cash Flow Management, Data Engineering, IA et Analytics, Marketing Digital)

Ces donnees sont collectees sur la base de votre consentement explicite, materialise par la soumission du formulaire, et sont strictement necessaires au traitement de votre demande.`,
      },
      {
        title: 'Donnees issues des Communications par Email',
        text: `Lorsque vous nous contactez directement a l'adresse info@datascalebusiness.io, nous collectons et conservons :

L'adresse email expeditrice et les coordonnees associees
Le contenu integral de vos echanges avec nos equipes
Les pieces jointes et documents partages dans le cadre de vos demandes
L'historique des communications aux fins de suivi commercial et de service client

Ces donnees sont traitees dans le cadre de notre interet legitime a assurer la continuite et la qualite de nos relations avec nos prospects et clients.`,
      },
      {
        title: 'Donnees de Navigation collectees via Google Analytics 4',
        text: `Notre Site integre Google Analytics 4 (GA4), un service d'analyse d'audience propose par Google LLC, dont le siege est situe au 1600 Amphitheatre Parkway, Mountain View, CA 94043, Etats-Unis.

Cet outil collecte de maniere automatique et anonymisee les donnees suivantes :

Comportement de navigation : pages visitees, duree de session, taux de rebond, parcours de navigation
Sources de trafic : moteur de recherche, reseaux sociaux, acces direct, sites referents
Donnees techniques : type d'appareil, systeme d'exploitation, navigateur web utilise, resolution d'ecran
Donnees geographiques : pays et ville d'acces (approximatif, sans identification precise)

Identifiant de mesure Google Analytics 4 : G-JHRK820N2P

Aucune donnee permettant votre identification personnelle n'est transmise a Google Analytics. Les donnees sont traitees sur des serveurs de Google, y compris aux Etats-Unis, dans le cadre des clauses contractuelles types approuvees par la Commission Europeenne.`,
      },
    ],
  },
  {
    id: 'finalites',
    num: '04',
    title: 'Finalites et Bases Legales du Traitement',
    content: `Nous traitons vos donnees personnelles pour les finalites suivantes, chacune reposant sur une base legale specifique :

Traitement des demandes de contact et de renseignements
Base legale : Consentement (article 6.1.a du RGPD)
Conservation : 3 ans a compter du dernier contact

Gestion de la relation commerciale et etablissement de propositions
Base legale : Execution d'un contrat ou mesures precontractuelles (article 6.1.b du RGPD)
Conservation : Duree de la relation commerciale augmentee de 3 ans

Amelioration de l'experience utilisateur et performances du Site
Base legale : Interet legitime (article 6.1.f du RGPD)
Conservation : 14 mois (parametrage GA4 par defaut)

Respect de nos obligations legales et reglementaires
Base legale : Obligation legale (article 6.1.c du RGPD)
Conservation : Selon les durees legales applicables

Nous nous engageons a ne traiter vos donnees qu'aux fins pour lesquelles elles ont ete collectees et a ne pas les utiliser a d'autres fins sans information prealable.`,
  },
  {
    id: 'partage',
    num: '05',
    title: 'Partage et Transfert des Donnees',
    content: `Data Scale Business Group ne vend, ne loue et ne cede jamais vos donnees personnelles a des tiers a des fins commerciales ou publicitaires.

Vos donnees peuvent etre partagees exclusivement avec les categories de destinataires suivantes :

Prestataires techniques d'hebergement et d'infrastructure
Netlify Inc. (hebergement du Site, certifie SOC 2 Type II) et Sanity Inc. (gestion du contenu editorial). Ces prestataires agissent en qualite de sous-traitants au sens du RGPD et sont lies par des obligations contractuelles strictes de confidentialite.

Prestataires d'analyse d'audience
Google LLC (Google Analytics 4) pour l'analyse statistique anonymisee du trafic, encadree par les clauses contractuelles types de la Commission Europeenne.

Autorites competentes
Les donnees peuvent etre communiquees aux autorites judiciaires, administratives ou reglementaires competentes lorsque la loi l'exige ou dans le cadre de procedures legales.

En cas de transfert de donnees hors de l'Espace Economique Europeen ou du Maroc, nous nous assurons que des garanties appropriees sont mises en place conformement aux exigences du RGPD et de la loi 09-08.`,
  },
  {
    id: 'droits',
    num: '06',
    title: 'Vos Droits sur vos Donnees Personnelles',
    content: `Conformement au RGPD et a la loi marocaine n° 09-08, vous beneficiez des droits suivants concernant vos donnees personnelles :

Droit d'acces (article 15 RGPD) : Vous pouvez obtenir la confirmation que nous traitons des donnees vous concernant et en recevoir une copie, ainsi que les informations relatives aux conditions de ce traitement.

Droit de rectification (article 16 RGPD) : Vous pouvez demander la correction de donnees inexactes ou incompletes vous concernant.

Droit a l'effacement (article 17 RGPD) : Vous pouvez demander la suppression de vos donnees dans les cas prevus par la reglementation applicable.

Droit a la limitation du traitement (article 18 RGPD) : Vous pouvez demander que le traitement de vos donnees soit limite dans certaines circonstances.

Droit d'opposition (article 21 RGPD) : Vous pouvez vous opposer au traitement de vos donnees fonde sur notre interet legitime.

Droit a la portabilite (article 20 RGPD) : Vous pouvez recevoir vos donnees dans un format structure, couramment utilise et lisible par machine.

Droit de retrait du consentement : Lorsque le traitement est fonde sur votre consentement, vous pouvez le retirer a tout moment sans que cela affecte la licéité du traitement anterieur.

Pour exercer l'un de ces droits, adressez votre demande a : info@datascalebusiness.io
Nous nous engageons a repondre dans un delai maximum de 30 jours calendaires a compter de la reception de votre demande.

Si vous estimez que vos droits ne sont pas respectes, vous pouvez introduire une reclamation aupres de la Commission Nationale de controle de la protection des Donnees a caractere Personnel (CNDP) au Maroc sur cndp.ma, ou aupres de la CNIL en France sur cnil.fr si vous residez en France.`,
  },
  {
    id: 'cookies',
    num: '07',
    title: 'Politique en matiere de Cookies',
    content: `Notre Site utilise des cookies et technologies similaires afin d'assurer son bon fonctionnement et d'ameliorer votre experience de navigation.

Cookies strictement necessaires
Ces cookies sont indispensables au fonctionnement technique du Site. Ils ne collectent aucune donnee personnelle identifiable et ne peuvent pas etre desactives sans affecter le bon fonctionnement du Site.

Cookies analytiques (Google Analytics 4)
Ces cookies nous permettent de mesurer l'audience du Site et de comprendre le comportement des visiteurs afin d'en ameliorer le contenu et les performances. Les donnees collectees sont agregees et anonymisees. Vous pouvez refuser ces cookies sans impact sur votre navigation. Duree de conservation des cookies analytiques : 13 mois maximum.

Gestion de vos preferences
Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies, ou pour etre alerte prealablement a leur depot. Les parametres de gestion des cookies sont accessibles dans les preferences de votre navigateur. Pour toute information complementaire : allaboutcookies.org`,
  },
  {
    id: 'securite',
    num: '08',
    title: 'Securite et Protection des Donnees',
    content: `Data Scale Business Group met en oeuvre un ensemble de mesures techniques et organisationnelles appropriees afin de garantir la securite, l'integrite et la confidentialite de vos donnees personnelles.

Mesures techniques deployees :
Chiffrement des communications via protocole TLS 1.3 (certificat SSL note A+ par SSL Labs)
Activation du protocole HSTS (HTTP Strict Transport Security) avec longue duree de validite
Mise en oeuvre de headers de securite HTTP : X-Frame-Options, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
Hebergement sur infrastructure Netlify certifiee SOC 2 Type II
Protection contre les attaques DDoS assuree par Netlify Edge Network

Mesures organisationnelles :
Acces aux donnees personnelles restreint aux seuls collaborateurs habilites selon le principe du besoin d'en connaitre
Mise a jour reguliere des systemes et application des correctifs de securite
Absence de base de donnees exposee directement au reseau public

En cas de violation de donnees susceptible d'engendrer un risque eleve pour vos droits et libertes, nous nous engageons a vous en notifier dans les meilleurs delais, conformement a l'article 34 du RGPD.`,
  },
  {
    id: 'conservation',
    num: '09',
    title: 'Durees de Conservation',
    content: `Vos donnees personnelles sont conservees pour des durees determinees et proportionnees aux finalites du traitement :

Donnees issues du formulaire de contact : 3 ans a compter du dernier contact ou de la fin de la relation commerciale

Correspondances et echanges par email : 3 ans a compter de la fin de la relation commerciale, ou 5 ans en cas de relation contractuelle etablie

Donnees Google Analytics (navigation anonymisee) : 14 mois glissants, conformement au parametrage par defaut de GA4

Donnees de facturation et comptables : 10 ans, conformement aux obligations legales comptables applicables au Maroc et dans les autres juridictions ou nous operons

A l'expiration de ces delais, vos donnees sont supprimees de maniere definitive et securisee ou rendues anonymes de facon irreversible a des fins statistiques.`,
  },
  {
    id: 'modifications',
    num: '10',
    title: 'Modifications de la Politique de Confidentialite',
    content: `Data Scale Business Group se reserve le droit de modifier la presente Politique de Confidentialite a tout moment, notamment pour refleter les evolutions reglementaires, legislatives ou liees a nos pratiques de traitement des donnees.

Les modifications prennent effet des leur publication sur le Site. La date de derniere mise a jour figurant en en-tete de ce document sera systematiquement actualisee.

En cas de modification substantielle affectant vos droits ou les conditions de traitement de vos donnees, nous vous en informerons par email si vous nous avez communique votre adresse electronique, ou par une notification visible sur le Site.

Nous vous encourageons a consulter regulierement cette page afin de prendre connaissance des eventuelles mises a jour.

Derniere mise a jour : ${LAST_UPDATED}`,
  },
  {
    id: 'contact',
    num: '11',
    title: 'Contact et Reclamations',
    content: `Pour toute question relative a la presente Politique de Confidentialite, pour exercer vos droits ou pour signaler tout manquement a la protection de vos donnees personnelles, vous pouvez nous contacter :

Par voie electronique : info@datascalebusiness.io
Par courrier postal : Data Scale Business Group, La Marina, 4 Boulevard Mohammed Ben Abdellah, Immeuble Oceanes 3, Bureau 3 RDC, Casablanca 20370, Maroc
Par telephone : +212 671 370 001

Notre equipe s'engage a accuser reception de votre demande et a y apporter une reponse complete dans un delai maximum de 30 jours calendaires.

Si vous souhaitez introduire une reclamation aupres d'une autorite de controle competente :

Au Maroc : Commission Nationale de controle de la protection des Donnees a caractere Personnel (CNDP) accessible sur cndp.ma
En France : Commission Nationale de l'Informatique et des Libertes (CNIL) accessible sur cnil.fr
Dans l'Union Europeenne : l'autorite de protection des donnees de votre Etat membre de residence`,
  },
]

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState(null)

  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <div className={styles.shell}>
            <p className={styles.kicker}>Protection des donnees personnelles</p>
            <h1 className={styles.title}>Politique de confidentialite</h1>
            <p className={styles.updated}>Derniere mise a jour : {LAST_UPDATED}</p>
            <div className={styles.tags}>
              {['RGPD', 'Loi 09-08 Maroc', 'Google Analytics 4', 'SSL A+', 'SOC 2 Type II'].map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.shell}>
            <div className={styles.introCard}>
              La presente politique decrit comment Data Scale Business Group collecte,
              utilise et protege vos donnees personnelles conformement au RGPD et a la loi
              marocaine n° 09-08. Nous nous engageons a traiter vos donnees avec un niveau
              eleve de transparence et de securite.
            </div>

            <div className={styles.layout}>
              <aside className={styles.toc}>
                <p className={styles.tocLabel}>Sommaire</p>
                <div className={styles.tocLinks}>
                  {SECTIONS.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className={styles.tocLink}>
                      <span>{section.num}</span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </div>
              </aside>

              <div className={styles.sections}>
                {SECTIONS.map((section) => (
                  <section key={section.id} id={section.id} className={styles.sectionBlock}>
                    <button
                      type="button"
                      className={styles.sectionButton}
                      onClick={() => setActive(active === section.id ? null : section.id)}
                    >
                      <span className={styles.sectionNumber}>{section.num}</span>
                      <span className={styles.sectionHeading}>{section.title}</span>
                      <span className={active === section.id ? styles.chevronOpen : styles.chevron}>
                        v
                      </span>
                    </button>

                    {active === section.id ? (
                      <div className={styles.sectionContent}>
                        {section.subsections ? (
                          <div className={styles.subsections}>
                            {section.subsections.map((sub) => (
                              <div key={sub.title} className={styles.subsection}>
                                <h3>{sub.title}</h3>
                                <p>{sub.text}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p>{section.content}</p>
                        )}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>

            <div className={styles.contactCard}>
              <div>
                <h2>Une question relative a vos donnees personnelles ?</h2>
                <p>
                  Notre equipe traite les demandes relatives a la protection des donnees
                  dans un delai maximum de 30 jours calendaires.
                </p>
              </div>
              <a href="mailto:info@datascalebusiness.io" className={styles.contactLink}>
                info@datascalebusiness.io
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
