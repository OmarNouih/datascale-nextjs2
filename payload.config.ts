import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { cloudinaryStorage } from 'payload-cloudinary'
import sharp from 'sharp'
import { Posts } from './src/payload/collections/Posts'
import { Media } from './src/payload/collections/Media'
import { Users } from './src/payload/collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Data Scale Business',
    },
  },
  collections: [Posts, Media, Users],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'datasecret-local-dev-key-change-in-prod',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 5000000,
    },
  },
  plugins: [
    cloudinaryStorage({
      config: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      },
      collections: {
        media: true,
      },
      folder: 'datascalebusiness',
    }),
  ],
})
