# Client: Data Scale Business Group
# Site: https://datascalebusiness.io
# CMS: Sanity.io (Project ID: x4y9lk8q, Dataset: blogs)
# Langue: Français uniquement
# Cible: Décideurs marocains et africains (DAF, DSI, DG, Directeurs Marketing)

## IDENTITÉ DE LA MARQUE
Data Scale Business est un cabinet de conseil spécialisé en Business Intelligence,
Data Engineering et Intelligence Artificielle basé à Casablanca, Maroc.
Clients références : Marjane Holding, Label'Vie, Chaabane Immobilier,
Greentek Media, LeBonCoin, Super Auto Distribution, Tanger Med Engineering.
Produit phare : Corvya Real Estate (CRM + IA immobilier, assistant Reva AI).

## TONE OF VOICE
- Expert mais accessible, jamais condescendant
- Concret et ancré dans la réalité marocaine
- Pas de jargon technique inutile
- Pas de phrases génériques comme "dans un monde en constante évolution"
- Pas de listes à puces dans le corps des articles
- Pas de tirets longs (—)
- Storytelling : commencer par une situation concrète reconnaissable
- Longueur : 800 à 950 mots par article

## STRUCTURE OBLIGATOIRE DE CHAQUE ARTICLE
1. Titre accrocheur (max 60 caractères pour SEO)
2. Slug URL en kebab-case
3. Catégorie (voir liste ci-dessous)
4. Excerpt/meta description (max 155 caractères, avec mot-clé principal)
5. Corps de l'article :
   - Chapeau d'accroche (situation concrète marocaine)
   - 4 à 6 sections avec titres H2
   - Conclusion avec call-to-action implicite
6. Hook LinkedIn (1 à 2 phrases percutantes pour partage social)

## CATÉGORIES SANITY
- Business Intelligence
- Data Engineering
- Conseil Data
- Marketing Digital
- Corvya Real Estate

## SUJETS PAR CATÉGORIE

### Business Intelligence
- Power BI, Qlik, Tableau comparatifs
- Data Warehouse vs Lakehouse
- Cash Flow BI
- Dashboard immobilier Power BI
- ROI projet BI en 90 jours

### Data Engineering
- Pipelines ETL au Maroc
- Architecture data moderne (ERP + CRM + Excel)
- Data Lake vs Data Warehouse
- Migration vers le cloud au Maroc

### Conseil Data
- Gouvernance data Maroc
- Erreurs projets data
- Data Strategy pour PME marocaines
- CDO (Chief Data Officer) : rôle et valeur

### Marketing Digital
- CRM analytique vs opérationnel
- Retail Media Maroc
- Attribution marketing data-driven
- Personnalisation à l'échelle

### Corvya Real Estate
- Qualification leads immobilier
- CRM immobilier Maroc
- IA et conversion leads
- Pilotage KPIs promoteurs

## ARTICLES DÉJÀ PUBLIÉS (ne pas dupliquer)
- guide-business-intelligence-maroc-2025 (Business Intelligence, 2026-03-06)
- data-engineering-maroc-architecture-2025 (Data Engineering, 2026-03-06)
- roi-business-intelligence-maroc-mesurer-valeur (Conseil Data, 2026-03-09)
- cash-flow-business-intelligence-maroc-pilotage-tresorerie (Business Intelligence, 2026-03-15)
- pipeline-etl-maroc-erreurs-data-engineering (Data Engineering, 2026-03-23)
- retail-media-maroc-data-grande-distribution-2026 (Marketing Digital, 2026-03-27)
- gouvernance-data-maroc-erreurs-entreprises-2026 (Conseil Data, 2026-04-06)
- power-bi-qlik-tableau-comparatif-maroc-2026 (Business Intelligence, 2026-04-11)
- crm-analytique-vs-operationnel-marketing-maroc (Marketing Digital, 2026-04-25)
- cdo-chief-data-officer-maroc-entreprise (Conseil Data, 2026-05-01)

## RÉFÉRENCES CLIENTS À MENTIONNER NATURELLEMENT
Marjane Holding → CRM analytique, Datalake, Big Data, grande distribution
Label'Vie → Data Marketing, CRM, Marketing Digital, retail
Chaabane Immobilier → KPIs immobilier, Power BI, pilotage 360
Greentek Media → Retail Media, marketing digital, audience
LeBonCoin → Gouvernance data, data management
Super Auto Distribution → Marketing, CRM, leads automobile
Tanger Med Engineering → Data management, gouvernance, infrastructure

## SCHEMA SANITY POUR PUBLICATION
{
  _type: "post",
  title: "...",
  slug: { current: "..." },
  excerpt: "... (max 155 chars)",
  categories: [{ _ref: "ID_CATEGORIE" }],
  author: { _ref: "ID_AUTEUR" },
  publishedAt: "2026-XX-XXTXX:XX:XXZ",
  body: [... portable text blocks ...]
}

## PLANNING DE PUBLICATION
- Rythme : 2 articles par semaine
- Jours de publication : lundi matin + jeudi matin (08h00 UTC)
- Alterner les catégories : ne jamais publier 2 articles de la même catégorie consécutivement
- Priorité Corvya Real Estate : 0 articles publiés, à traiter en priorité
- Les sujets ne sont pas limités à la liste ci-dessus : tout sujet pertinent dans les 5 catégories est acceptable

## COMMANDE AUTOMATISATION
Pour générer et publier un article :
1. Choisir le prochain sujet selon le planning et les articles déjà publiés
2. Rédiger l'article selon les règles ci-dessus
3. Publier via Sanity API avec le token d'écriture
4. Logger le slug publié pour ne pas le dupliquer