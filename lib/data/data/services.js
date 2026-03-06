import React from 'react';
import { C } from '@/lib/tokens';

export const SERVICES = [
  {
    id: "bi",
    badge: "Cœur de métier",
    badgeColor: C.gold,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 21l4-7 4 4 4-9 5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Business Intelligence",
    subtitle: "Dashboards & Reporting",
    desc: "Dashboards interactifs sur mesure pour piloter votre activité en temps réel — du KPI stratégique au suivi opérationnel.",
    detail: "Notre expertise BI couvre la modélisation de données, la création de rapports automatisés et la mise en place d'indicateurs métiers adaptés à chaque secteur : immobilier, finance, retail, industrie. Nous livrons sur Power BI, Tableau, Looker et Google Data Studio.",
    tags: ["Power BI", "Tableau", "Looker", "KPI Design"],
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
    desc: "Tableaux de bord dédiés aux promoteurs, agences et foncières : suivi programmes, taux d'absorption, performance commerciale.",
    detail: "Modèles de données spécifiques au marché immobilier marocain : suivi des lots, pipeline de vente, portefeuille foncier, reporting MASI. Connexion directe à IMMO+, GESCO, Excel pour une mise à jour automatique.",
    tags: ["Suivi programmes", "Pipeline vente", "Analyse foncière", "ROI actifs"],
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
    desc: "Une seule vérité : Encaissé · Encaissable · Reste à encaisser. Intégration SAGE, ODOO, GESSINO et Excel.",
    detail: "Automatisation de la consolidation financière depuis plusieurs sources pour un tableau de bord de trésorerie fiable et temps réel. Fini les exports manuels et les décisions à l'aveugle.",
    tags: ["SAGE", "ODOO", "GESSINO", "Trésorerie"],
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
    subtitle: "Infrastructure & Pipelines",
    desc: "Pipelines ETL/ELT robustes, entrepôts cloud et architectures modernes — fondation de votre BI et futurs modèles IA.",
    detail: "De l'ingestion à la couche analytique : Azure Synapse, BigQuery, dbt, Airflow. Vos données sont propres, cohérentes et toujours disponibles.",
    tags: ["ETL/ELT", "Azure", "BigQuery", "dbt"],
  },
  {
    id: "ai",
    badge: "Roadmap 2025",
    badgeColor: C.gold,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "IA & Analytics Avancés",
    subtitle: "Modèles prédictifs",
    desc: "Modèles prédictifs pour l'estimation immobilière, scoring client et détection d'anomalies financières.",
    detail: "Notre feuille de route IA s'appuie sur la maturité data construite via nos projets BI. De la donnée descriptive au modèle prédictif, du modèle à la valeur métier mesurable.",
    tags: ["Prédictif", "Machine Learning", "Scoring", "Anomalies"],
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
    subtitle: "Croissance & visibilité",
    desc: "Sans marketing digital, une entreprise c'est une voiture sans essence. Stratégies data-driven pour générer des leads qualifiés.",
    detail: "SEO, SEA et Social Ads combinés à la puissance de vos données pour maximiser le ROI. Chaque campagne est mesurée via des dashboards BI dédiés.",
    tags: ["SEO/SEA", "Social Ads", "Analytics", "ROI"],
  },
];

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
    accentColor: C.gold,
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
    accentColor: "#7c5cbf",
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
