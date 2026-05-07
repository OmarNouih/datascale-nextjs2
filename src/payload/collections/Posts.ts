import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug URL',
      admin: {
        description: 'URL en kebab-case (ex: guide-bi-maroc-2025)',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Résumé / Meta description',
      admin: {
        description: 'Max 155 caractères',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Catégorie',
      options: [
        { label: 'Business Intelligence', value: 'Business Intelligence' },
        { label: 'Data Engineering', value: 'Data Engineering' },
        { label: 'Conseil Data', value: 'Conseil Data' },
        { label: 'Marketing Digital', value: 'Marketing Digital' },
        { label: 'Corvya Real Estate', value: 'Corvya Real Estate' },
      ],
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: "Image principale",
    },
    {
      name: 'body',
      type: 'richText',
      label: "Corps de l'article",
      required: true,
    },
    {
      name: 'linkedinHook',
      type: 'textarea',
      label: 'Hook LinkedIn',
      admin: {
        description: '1-2 phrases percutantes pour le partage social',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Statut',
      defaultValue: 'draft',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date de publication',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
