import React from 'react';
import { C } from '@/lib/tokens';

export const SERVICES = [
  {
    id: "bi",
    badge: "Cœur de métier",
    badgeColor: C.teal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 21l4-7 4 4 4-9 5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Business Intelligence",
    subtitle: "Data Warehouse & Reporting",
    desc: "Centralisation des données de l’entreprise pour créer une vision claire et fiable de la performance via des dashboards interactifs.",
    detail: "Nous concevons des plateformes décisionnelles complètes permettant de connecter les systèmes métiers de l’entreprise (ERP, CRM, comptabilité, Excel) à un Data Warehouse centralisé. Les données sont extraites, transformées et historisées afin de produire des indicateurs fiables pour la direction. Nous développons ensuite des dashboards interactifs permettant de suivre les ventes, la performance commerciale, la finance et l’activité opérationnelle en temps réel. Notre approche couvre toute la chaîne data : ingestion des données, modélisation en Data Warehouse, automatisation du reporting et création de tableaux de bord pour la prise de décision.",
    tags: ["Power BI", "SQL Server", "Data Warehouse", "ETL"]
  },
  {
    id: "immo",
    badge: "Secteur vedette",
    badgeColor: C.teal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 28V14l12-10 12 10v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="11" y="19" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 19v9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "BI Immobilier",
    subtitle: "Pilotage actifs & ventes",
    desc: "Plateforme décisionnelle dédiée à la promotion immobilière : suivi du stock, des ventes, des encaissements et de la performance commerciale.",
    detail: "Nous développons des solutions BI spécialisées pour les promoteurs immobiliers et les sociétés de gestion de projets. Les données provenant des logiciels métiers comme GCIMMO / GSIMO, de la comptabilité SAGE ou d’outils internes sont consolidées dans un Data Warehouse unique. Cela permet de suivre en temps réel le stock disponible, les réservations, les ventes signées, les encaissements clients et la rentabilité des projets. Les dashboards permettent d’analyser la performance par projet, par typologie de bien, par commercial ou par canal d’acquisition, et de piloter le taux d’absorption des programmes immobiliers.",
    tags: ["GCIMMO", "Stock immobilier", "Ventes", "Power BI"]
  },
  {
    id: "cashflow",
    badge: "",
    badgeColor: "",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 13a4 4 0 018 0c0 2-2 3-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 9v2m0 10v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Cash Flow Management",
    subtitle: "Pilotage financier",
    desc: "Vision claire et consolidée de la trésorerie : encaissé, prévisionnel et reste à encaisser.",
    detail: "Nous connectons les systèmes financiers et opérationnels de l’entreprise afin de produire une vision consolidée de la trésorerie. Les données issues de la comptabilité SAGE, des systèmes de vente, des ERP ou d’Excel sont centralisées dans un Data Warehouse pour permettre une analyse fiable des flux financiers. Les dashboards permettent de suivre les encaissements clients, les échéances à venir, les retards de paiement et le reste à encaisser. Cette approche permet aux directions financières et aux dirigeants d’anticiper les besoins de trésorerie, de suivre les performances financières et de prendre des décisions plus rapides et mieux informées.",
    tags: ["SAGE", "Trésorerie", "Finance", "Power BI"]
  },
  {
    id: "data",
    badge: "",
    badgeColor: "",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="9" rx="10" ry="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 9v7c0 2.21 4.48 4 10 4s10-1.79 10-4V9" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 16v7c0 2.21 4.48 4 10 4s10-1.79 10-4v-7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Data Engineering",
    subtitle: "Architecture & Pipelines",
    desc: "Mise en place d’infrastructures data fiables pour collecter, transformer et centraliser les données de l’entreprise.",
    detail: "Nous concevons et déployons des architectures data permettant de centraliser les données provenant de multiples systèmes métiers : ERP, CRM, logiciels comptables, bases SQL ou fichiers Excel. Des pipelines ETL automatisés sont mis en place pour extraire les données, les nettoyer et les structurer dans un Data Warehouse prêt pour l’analyse. Cette couche technique garantit la qualité, la cohérence et la disponibilité des données utilisées par les dashboards et les analyses avancées.",
    tags: ["ETL", "SQL", "Data Warehouse", "Pipelines"]
  },
  {
    id: "ai",
    badge: "Roadmap 2025",
    badgeColor: C.teal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "IA & Analytics Avancés",
    subtitle: "Analyse prédictive",
    desc: "Exploitation de la data pour créer des modèles prédictifs et améliorer la prise de décision.",
    detail: "Une fois les données centralisées et structurées, il devient possible d’aller au-delà du simple reporting. Nous développons des modèles analytiques permettant d’anticiper certaines tendances : prévision des ventes, détection d’anomalies financières, scoring client ou estimation de la valeur d’actifs. Ces analyses avancées s’appuient sur les données du Data Warehouse afin de produire des insights exploitables par les équipes métier.",
    tags: ["Machine Learning", "Prédictif", "Analytics", "Data Science"]
  },
  {
    id: "marketing",
    badge: "",
    badgeColor: "",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 20s4-8 12-8 12 8 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="20" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Marketing Digital",
    subtitle: "Croissance & acquisition",
    desc: "Stratégies marketing pilotées par la donnée pour générer des leads et mesurer précisément la performance.",
    detail: "Nous accompagnons les entreprises dans la mise en place de stratégies marketing orientées data. Les campagnes SEO, SEA et Social Ads sont suivies à travers des dashboards analytiques permettant de mesurer le coût d’acquisition, la génération de leads et la performance des canaux. Les données marketing sont intégrées dans la plateforme BI afin de relier les actions marketing aux ventes et d’optimiser le retour sur investissement.",
    tags: ["SEO", "Ads", "Analytics", "ROI"]
}];

export const STATS = [
  { value: "18+",  unit: " ans", label: "D'expérience"      },
  { value: "4",    unit: "",     label: "Continents"         },
  { value: "100%", unit: "",     label: "Capture de Leads"   },
  { value: "3",    unit: "",     label: "Piliers de Croissance" },
];

export const NAV_LINKS = [
  { label: "Accueil",      href: "home"         },
  { label: "Expertise",    href: "services"     },
  { label: 'Blog',         href: 'blog'         },  
  { label: "Synapse",      href: "synapse"      },
  { label: "Références",   href: "realisations" },
  { label: "À Propos",     href: "about"        },
  { label: "Contact",      href: "contact"      },
];

export const STEPS = [
  { num: "01", title: "Découverte",    desc: "Audit de vos données, compréhension des enjeux métiers et définition des KPIs stratégiques." },
  { num: "02", title: "Architecture",  desc: "Conception du modèle de données, choix des outils et maquettage des dashboards." },
  { num: "03", title: "Développement", desc: "Construction des pipelines et développement des rapports en sprints itératifs." },
  { num: "04", title: "Déploiement",   desc: "Mise en production, formation des équipes et support continu." },
];

export const REALISATIONS = [
  {
    sector: "Immobilier",
    accentColor: C.teal,
    title: "Dashboard pilotage promotion immobilière",
    client: "Promoteur régional — Casablanca",
    desc: "Centralisation de 3 programmes, suivi temps réel du taux d'absorption, pipeline commercial et rentabilité par lot.",
    metrics: [
      { val: "3",    label: "Programmes" },
      { val: "−80%", label: "Reporting"   },
      { val: "100%", label: "Visibilité"  },
    ],
    tags: ["Power BI", "Excel", "Immobilier"],
  },
  {
    sector: "Finance",
    accentColor: C.tealLight,
    title: "Cash flow multi-entités temps réel",
    client: "Groupe familial — Maroc",
    desc: "Consolidation automatique SAGE et Excel de 4 filiales en un dashboard de trésorerie avec alertes de seuil.",
    metrics: [
      { val: "4",   label: "Entités"         },
      { val: "0",   label: "Saisies manuelles"},
      { val: "J+0", label: "Visibilité"       },
    ],
    tags: ["SAGE", "Power BI", "Trésorerie"],
  },
  {
    sector: "Distribution",
    accentColor: C.tealDark,
    title: "Analytics performance réseau distribution",
    client: "Distributeur FMCG — Maroc",
    desc: "Performance par point de vente, analyse sell-out et suivi objectifs par région et commercial.",
    metrics: [
      { val: "120+", label: "Points de vente" },
      { val: "+35%", label: "Productivité"    },
      { val: "Live", label: "Données"         },
    ],
    tags: ["Power BI", "SQL", "Retail"],
  },
];

export const PARTNERS = [
  { name: "Microsoft",    logo: "MS",  color: "#00a4ef", desc: "Power BI & Azure"       },
  { name: "Tableau",      logo: "TB",  color: "#e97627", desc: "Certifié Tableau"        },
  { name: "Salesforce",   logo: "SF",  color: "#00a1e0", desc: "Salesforce Analytics"    },
  { name: "Google Cloud", logo: "GC",  color: "#4285f4", desc: "BigQuery & Looker"       },
  { name: "SAP",          logo: "SAP", color: "#0070f2", desc: "SAP Data Services"       },
  { name: "Odoo",         logo: "OD",  color: "#714b67", desc: "Intégration Odoo"        },
];
