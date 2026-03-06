import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'x4y9lk8q',
  dataset: 'blogs',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source).url();